"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Til / Тил"
      className={`inline-flex items-center bg-white/[.08] border-[1.5px] border-white/[.14] rounded-[9px] p-[3px] text-xs font-bold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("lat")}
        aria-pressed={lang === "lat"}
        title="O'zbekcha (lotin)"
        className={`px-2.5 py-1 rounded-[6px] transition-colors ${
          lang === "lat" ? "bg-teal text-white" : "text-white/60 hover:text-white"
        }`}
      >
        Lot
      </button>
      <button
        type="button"
        onClick={() => setLang("cyr")}
        aria-pressed={lang === "cyr"}
        title="Ўзбекча (кирилл)"
        className={`px-2.5 py-1 rounded-[6px] transition-colors ${
          lang === "cyr" ? "bg-teal text-white" : "text-white/60 hover:text-white"
        }`}
      >
        Кир
      </button>
    </div>
  );
}
