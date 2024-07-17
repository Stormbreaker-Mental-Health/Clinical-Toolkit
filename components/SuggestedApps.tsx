import { SVGProps } from "react";
import Image from "next/image";
import { prefix } from "../utils/prefix";
import { useLocalization } from "../hooks/useLocalization";
import LanguagePicker from "./LanguagePicker";

const Item = (props: {
  title: string;
  description: string;
  link: string;
  image: string;
}) => {
  return (
    <div className="flex items-center bg-gray-200 rounded-md p-2 mb-2">
      <img
        src={props.image}
        alt={props.title}
        className="h-12 w-12 rounded-md"
      />
      <div className="ml-4 flex-1">
        <h3 className="font-semibold">{props.title}</h3>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
      <DownloadIcon
        className="h-6 w-6 text-gray-600 cursor-pointer"
        onClick={() => {
          window.open(props.link, "_blank");
        }}
      />
    </div>
  );
};

export default function SuggestedApps() {
  const locale = useLocalization();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 py-2 border-b gap-4">
        <Image
          src={`${prefix}/logo.png`}
          alt="Vercel Logo"
          width={44}
          height={44}
          className="rounded-md"
        />
        <h1 className="text-2xl font-light">{locale.headers.title}</h1>
        <LanguagePicker />
      </div>
      <div className="flex items-center justify-center px-4 py-2 border-b">
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
                image={value.link}
                title={value.title}
                description={value.description}
                link={value.link}
              />
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-2 border-b">
        <h1 className="text-xl font-semibold">
          {locale.headers.suggested_apps_title}
        </h1>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-light mb-4">
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
            />
          ) : null;
        })}
        <h2 className="text-lg font-light mt-8 mb-4">
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
            />
          ) : null;
        })}
        <h2 className="text-lg font-light mt-8 mb-4">
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
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

function ChevronLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function DownloadIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
