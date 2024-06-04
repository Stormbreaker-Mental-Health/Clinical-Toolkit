import React, { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    const browserLocale = (
      navigator.language || navigator.languages[0]
    ).includes("es")
      ? "es"
      : "en";
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    setLanguage(preferredLanguage || browserLocale);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
