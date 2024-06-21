import React, { PropsWithChildren, useEffect, useState } from "react";
import i18n from "i18n-js";

// Import translations
import en from "./english.json";
import ar from "./arabic.json";
import clientLocalStorage from "@/lib/clientLocalStorage";

// Define types for translations
type TranslationKeys = keyof typeof en;

// Configure i18n
i18n.translations = { en, ar };

const LanguageContext = React.createContext<{
  language: string;
  switchLanguage: (newLanguage: string) => void;
}>({
  language: "en",
  switchLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: PropsWithChildren;
}) => {
  const [language, setLanguage] = useState<string>("en");

  // Load language preference from AsyncStorage on app start
  useEffect(() => {
    const loadLanguagePreference = async () => {
      try {
        const savedLanguage = await clientLocalStorage.getItem({
          key: "language",
        });
        if (savedLanguage) {
          setLanguage(savedLanguage);
        }
      } catch (error) {
        console.error("Error loading language preference:", error);
      }
    };
    loadLanguagePreference();
  }, []);

  // Function to switch language
  const switchLanguage = async (newLanguage: string) => {
    try {
      await clientLocalStorage.setItem({ key: "language", value: newLanguage });
      setLanguage(newLanguage);
    } catch (error) {
      console.error("Error saving language preference:", error);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage }}
    >
        {children}

    </LanguageContext.Provider>
  );
};

export const useLanguage = () => React.useContext(LanguageContext);

// Usage:
// Wrap your root component with LanguageProvider
// Use useLanguage() hook in child components to access language and switchLanguage function
