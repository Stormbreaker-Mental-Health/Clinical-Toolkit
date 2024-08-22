import { collection, doc, getDoc } from "firebase/firestore";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { firestore } from "../utils/firebase";
import { useLanguage } from "./useLanguageContext";

export interface LocalizationState {
  clinical_resources: { [key: string]: any };
  headers: { [key: string]: any };
  suggested_apps: { [key: string]: any };
  support: { [key: string]: any };
  configurable: { [key: string]: any };
}

export interface Action {
  type: ActionType;
  payload: any;
}

interface ContextProps {
  state: LocalizationState;
  dispatch: React.Dispatch<Action>;
}

enum ActionType {
  UPDATE_LOCALIZATION_DATA = "UPDATE_LOCALIZATION_DATA",
}

const initialState: LocalizationState = {
  clinical_resources: {},
  headers: {},
  suggested_apps: {},
  support: {},
  configurable: {},
};

const LocalizationContext = createContext({} as ContextProps);

const useLocalization = () => {
  const context = useContext(LocalizationContext);
  return {
    ...context,
    clinical_resources: context.state.clinical_resources,
    headers: context.state.headers,
    suggested_apps: context.state.suggested_apps,
    support: context.state.support,
    configurable: context.state.configurable,
  };
};

const localizationReducer = (state: LocalizationState, action: Action) => {
  switch (action.type) {
    case ActionType.UPDATE_LOCALIZATION_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const transformData = (data: any, isSpanish: boolean): any => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (Array.isArray(value)) {
        return [key, isSpanish ? value[1] : value[0]];
      } else if (typeof value === "object" && value !== null) {
        return [key, transformData(value, isSpanish)];
      } else {
        return [key, value];
      }
    })
  );
};

const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(localizationReducer, initialState);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchLocalizationData = async () => {
      const collectionRef = collection(firestore, "clinical_toolkit");
      const docRefs = [
        "clinical_resources",
        "headers",
        "suggested_apps",
        "support",
        "configurable",
      ].map((docId) => doc(collectionRef, docId));
      const isSpanish = language === "es";

      const docSnaps = await Promise.all(
        docRefs.map((docRef) => getDoc(docRef))
      );
      const transformedData = docSnaps.reduce((acc: any, docSnap, index) => {
        if (docSnap.exists()) {
          const rawData = docSnap.data();
          const transformedDocData = transformData(rawData, isSpanish);
          acc[`doc${index + 1}`] = transformedDocData;
        }
        return acc;
      }, {});

      dispatch({
        type: ActionType.UPDATE_LOCALIZATION_DATA,
        payload: {
          clinical_resources: transformedData["doc1"],
          headers: transformedData["doc2"],
          suggested_apps: transformedData["doc3"],
          support: transformedData["doc4"],
          configurable: transformedData["doc5"],
        },
      });
    };

    fetchLocalizationData();
  }, [language]);

  return (
    <LocalizationContext.Provider value={{ state, dispatch }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export { ActionType, LocalizationProvider, useLocalization };
