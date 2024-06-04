import React from "react";
import { useLanguage } from "../hooks/useLanguageContext";

const languageOptions = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
];

const LanguagePicker: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (code: string) => {
    setLanguage(code);
    localStorage.setItem("preferredLanguage", code);
    // Optionally, reload the page or update the application state
    // window.location.reload(); // Uncomment to reload the page
  };

  return (
    <div className="flex gap-1">
      {languageOptions.map((option) => (
        <button
          key={option.code}
          onClick={() => handleLanguageChange(option.code)}
          style={{
            background: language === option.code ? "lightblue" : "white",
          }}
          className="p-1 px-2 rounded-md"
        >
          <span role="img" aria-label={option.name}>
            {option.flag}
          </span>
        </button>
      ))}
    </div>
  );
};

export default LanguagePicker;
