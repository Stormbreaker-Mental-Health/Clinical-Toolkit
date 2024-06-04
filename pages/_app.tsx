import { LanguageProvider } from "../hooks/useLanguageContext";
import { LocalizationProvider } from "../hooks/useLocalization";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <LocalizationProvider>
        <Component {...pageProps} />
      </LocalizationProvider>
    </LanguageProvider>
  );
}

export default MyApp;
