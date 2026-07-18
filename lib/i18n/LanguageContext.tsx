"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { lat } from "./lat";
import { cyr } from "./cyr";
import type { Dictionary } from "./types";

export type Lang = "lat" | "cyr";

const dictionaries: Record<Lang, Dictionary> = { lat, cyr };

const STORAGE_KEY = "kamtar-lang";

interface LanguageContextValue {
  lang: Lang;
  dict: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

function applyHtmlLang(lang: Lang) {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang === "cyr" ? "uz-Cyrl" : "uz-Latn";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("lat");

  useEffect(() => {
    let initial: Lang = "lat";
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "lat" || saved === "cyr") {
        initial = saved;
      } else if (typeof navigator !== "undefined") {
        // Detect Cyrillic-preferring browsers (uz-Cyrl, ru, etc.) as a helpful default.
        const browserLang = navigator.language?.toLowerCase() ?? "";
        if (browserLang.includes("cyrl") || browserLang.startsWith("ru")) {
          initial = "cyr";
        }
      }
    } catch {
      // localStorage may be unavailable (e.g. private mode) — fall back to default.
    }
    setLangState(initial);
    applyHtmlLang(initial);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    applyHtmlLang(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore write errors
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dict: dictionaries[lang], setLang }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
