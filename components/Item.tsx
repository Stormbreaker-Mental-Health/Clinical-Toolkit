import Image from "next/image";
import {
  PodcastIcon,
  VideoIcon,
  BookIcon,
  DownloadIcon,
  ExternalIcon,
} from "./Icons";
import { useEffect, useRef, useState } from "react";
import { useLocalization } from "../hooks/useLocalization";

export const Item = (props: {
  title: string;
  description: string;
  link: string;
  image: string;
  subcategory?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // widowWidth 532px is the breakpoint for the line-clamp to take effect for the shortest description
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const locale = useLocalization();
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center bg-gray-200 rounded-md px-4 py-2 mb-2">
      <Image
        src={props.image}
        alt={props.title}
        className="rounded-md"
        width={48}
        height={48}
      />
      <div className="ml-4 flex-1">
        <h3 className="font-semibold">{props.title}</h3>
        <div>
          <p
            className={`text-sm text-gray-600 pr-2 ${
              !isExpanded && windowWidth < 532
                ? "line-clamp-3"
                : "line-clamp-none"
            }`}
          >
            {props.description}
          </p>
          {props.subcategory && windowWidth < 532 && (
            <button className="text-sm text-blue-500" onClick={toggleExpanded}>
              {isExpanded
                ? locale.headers.less_button
                : locale.headers.more_button}
            </button>
          )}
        </div>
      </div>
      {props.subcategory === "podcast" ? (
        <PodcastIcon
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        />
      ) : props.subcategory === "video" ? (
        <VideoIcon
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        />
      ) : props.subcategory === "book" ? (
        <BookIcon
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        />
      ) : props.subcategory === "app" ? (
        <DownloadIcon
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        />
      ) : (
        <ExternalIcon
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => {
            window.open(props.link, "_blank");
          }}
        />
      )}
    </div>
  );
};
