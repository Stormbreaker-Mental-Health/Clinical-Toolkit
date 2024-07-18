import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { prefix } from "../utils/prefix";
import SuggestedApps from "../components/SuggestedApps";
import { useLocalization } from "../hooks/useLocalization";

const Home: NextPage = () => {
  const locale = useLocalization();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fffdf1]">
      <Head>
        <title>{locale.headers.title}</title>
        <meta
          name="description"
          content="Stormbreaker Mental Health Awareness"
        />
        <link rel="icon" href={`${prefix}/logo.png`} />
      </Head>

      <main className="bg-gray-300 w-full max-w-5xl mx-auto flex-grow rounded-none lg:rounded-md m-0 lg:m-8">
        <SuggestedApps />
      </main>

      <footer className="flex items-center justify-center w-full h-16 border-t bg-gray-200">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1"
        >
          <Image
            src={`${prefix}/logo.png`}
            alt="Vercel Logo"
            width={24}
            height={24}
            className="rounded-md mr-1"
          />
          Stormbreaker
          <span>&copy;</span> {new Date().getFullYear()}
        </a>
      </footer>
    </div>
  );
};

export default Home;
