"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Stats() {
  const { dict } = useLanguage();

  return (
    <div className="bg-green-1 py-10 px-5 sm:px-8 lg:px-10 border-b border-white/[.06]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[.08]">
        {dict.stats.items.map((s) => (
          <Reveal key={s.label} className="bg-green-1 px-6 py-6 sm:px-9 sm:py-7 text-center">
            <div className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-none">
              {s.num}
              <span className="text-teal">{s.suffix}</span>
            </div>
            <div className="text-sm text-white/50 font-semibold mt-2">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
