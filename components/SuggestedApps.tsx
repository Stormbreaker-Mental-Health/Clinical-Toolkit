import Image from "next/image";
import { prefix } from "../utils/prefix";
import { useLocalization } from "../hooks/useLocalization";
import LanguagePicker from "./LanguagePicker";
import { Item } from "./Item";

export default function SuggestedApps() {
  const locale = useLocalization();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 py-2 gap-4">
        <Image
          src={`${prefix}/logo.png`}
          alt="Vercel Logo"
          width={44}
          height={44}
          className="mt-1 rounded-md"
        />
        <h1 className="text-2xl font-light text-center ml-7">
          {locale.headers.title}
        </h1>
        <LanguagePicker />
      </div>
      <div className="flex items-center justify-center mx-4 py-2 border-b">
        <h1 className="text-xl font-semibold">
          {locale.headers.clinical_resources_title}
        </h1>
      </div>
      <div className="px-4 py-2">
        <div className="space-y-4">
          {Object.entries(locale.clinical_resources).map(([key, value]) => {
            return (
              <Item
                key={key}
                image={value.image}
                title={value.title}
                description={value.description}
                link={value.link}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mx-4 py-2 border-b">
        <h1 className="text-xl font-semibold">
          {locale.headers.suggested_apps_title}
        </h1>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-normal mb-2 mt-2">
          {locale.headers.distraction_tools_title}:
        </h2>
        {Object.entries(locale.suggested_apps).map(([key, value]) => {
          return value.category === "distraction" ? (
            <Item
              key={key}
              title={value.title}
              description={value.description}
              link={value.link}
              image={value.image}
              subcategory="app"
            />
          ) : null;
        })}
        <h2 className="text-lg font-normal mt-6 mb-2">
          {locale.headers.calming_tools_title}:
        </h2>
        {Object.entries(locale.suggested_apps).map(([key, value]) => {
          return value.category === "calming" ? (
            <Item
              key={key}
              title={value.title}
              description={value.description}
              link={value.link}
              image={value.image}
              subcategory="app"
            />
          ) : null;
        })}
      </div>
      <div className="flex items-center justify-center mx-4 py-2 border-b">
        <h1 className="text-xl font-semibold">
          {locale.headers.additional_resources_title}
        </h1>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-normal mb-2 mt-2">
          {locale.headers.other_tools_title}:
        </h2>
        {Object.entries(locale.suggested_apps).map(([key, value]) => {
          return value.category === "other" ? (
            <Item
              key={key}
              title={value.title}
              description={value.description}
              link={value.link}
              image={value.image}
              subcategory={value.subcategory}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
