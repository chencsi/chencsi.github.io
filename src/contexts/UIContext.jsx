import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import AOS from 'aos';

const UIContext = createContext({
  theme: null,
  lang: null,
  toggleTheme: () => { },
  setLang: () => { },
});

const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

const getSystemLanguage = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith("hu") ? "hu" : "en";
};

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("ui-theme");
    const savedLang = localStorage.getItem("ui-lang");

    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme);
    } else {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
      localStorage.setItem("ui-theme", systemTheme);
    }

    if (savedLang && (savedLang === "en" || savedLang === "hu")) {
      setLang(savedLang);
    } else {
      const systemLang = getSystemLanguage();
      setLang(systemLang);
      localStorage.setItem("ui-lang", systemLang);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("ui-theme", theme);
      document.documentElement.style.colorScheme = theme;
      if (typeof AOS !== 'undefined' && AOS.refresh) {
        setTimeout(() => {
          AOS.refresh();
        }, 50);
      }
    }
  }, [theme]);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("ui-lang", lang);
      document.documentElement.lang = lang;
      if (typeof AOS !== 'undefined' && AOS.refresh) {
        setTimeout(() => {
          AOS.refresh();
        }, 50);
      }
    }
  }, [lang]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const setLanguage = (newLang) => setLang(newLang);

  const value = {
    theme,
    lang,
    toggleTheme,
    setLanguage,
  };

  return (<UIContext.Provider value={value}>{children}</UIContext.Provider>);
};

export default UIContext;
