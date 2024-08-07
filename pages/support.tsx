import Head from "next/head";
import Image from "next/image";

import AccountDeletionForm from "../components/AccountDeletionForm";
import { useLocalization } from "../hooks/useLocalization";
import { prefix } from "../utils/prefix";
import LanguagePicker from "../components/LanguagePicker";

export default function Home() {
  const locale = useLocalization();

  return (
    <>
      <Head>
        <title>{locale.headers.title}</title>
        <meta
          name="description"
          content="Stormbreaker Mental Health Awareness"
        />
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </Head>
      <div className="flex items-center justify-between px-4 py-2 border-b gap-4">
        <Image
          src={`${prefix}/logo.png`}
          alt="Stormbreaker Logo"
          width={44}
          height={44}
          className="rounded-md"
        />
        <h1 className="text-2xl font-light">Stormbreaker</h1>
        <LanguagePicker />
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center overflow-auto p-8">
        <div className="flex flex-col gap-4 items-center h-1/2">
          <Image
            className="rounded-md"
            alt="Company logo"
            height={100}
            width={80}
            src={`${prefix}/icon.png`}
          />
          <AccountDeletionForm />
        </div>
        <div className="flex flex-col gap-4">
          <Image
            className="rounded-md"
            alt="Company logo"
            height={500}
            width={256}
            src={`${prefix}/app.png`}
          />
          <p className="w-64 text-sm text-gray-500 dark:text-gray-400 text-center">
            {locale.support.alternative}
          </p>
        </div>
      </div>
    </>
  );
}
