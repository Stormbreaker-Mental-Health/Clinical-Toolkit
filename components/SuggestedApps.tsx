import { SVGProps } from "react";
import Image from "next/image";
import { prefix } from "../utils/prefix";

export default function SuggestedApps() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center px-4 py-2 border-b gap-4">
        <Image
          src={`${prefix}/logo.png`}
          alt="Vercel Logo"
          width={44}
          height={44}
          className="rounded-md"
        />
        <h1 className="text-2xl font-light">StormBreaker Clinical Toolkit</h1>
      </div>
      <div className="flex items-center justify-center px-4 py-2 border-b">
        <h1 className="text-xl font-semibold">Suggested Apps</h1>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold mb-4">Distraction tools:</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Tap Tap Fish"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Tap Tap Fish</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Medito"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Medito</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Candy Crush"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Candy Crush</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Tetris Beat"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Tetris Beat</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-8 mb-4">Calming tools:</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Medito"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Medito</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Candy Crush"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Candy Crush</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
          <div className="flex items-center">
            <img
              src={`${prefix}/placeholder.svg`}
              alt="Tetris Beat"
              className="h-12 w-12 rounded-md"
            />
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">Tetris Beat</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <DownloadIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
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
