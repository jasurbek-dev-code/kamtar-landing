"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  CashIcon,
  BoxIcon,
  SplitPayIcon,
  UsersIcon,
  CardIcon,
  BarsIcon,
  ArrowUpRightIcon,
} from "./icons";

const ICONS = [CashIcon, BoxIcon, SplitPayIcon, UsersIcon, CardIcon, BarsIcon];
const VARIANTS = ["dark", "light", "teal", "light", "red", "dark"] as const;

const CARD_STYLES: Record<string, string> = {
  dark: "bg-green-nav text-white",
  light: "bg-canvas border-[1.5px] border-line text-ink",
  teal: "bg-teal text-white",
  red: "bg-red text-white",
};

const ICON_BOX: Record<string, string> = {
  dark: "bg-white/10 text-white",
  light: "bg-green-light text-teal-700",
  teal: "bg-white/20 text-white",
  red: "bg-white/20 text-white",
};

const TAG_STYLES: Record<string, string> = {
  dark: "bg-white/10 text-white/75",
  light: "bg-white text-ink-2 border border-line",
  teal: "bg-white/[.18] text-white/90",
  red: "bg-white/[.18] text-white/90",
};

const ARROW_STYLES: Record<string, string> = {
  dark: "bg-white/[.12] text-white",
  light: "bg-green-light text-teal-700",
  teal: "bg-white/[.12] text-white",
  red: "bg-white/[.12] text-white",
};

const BODY_STYLES: Record<string, string> = {
  dark: "text-white/[.72]",
  light: "text-muted",
  teal: "text-white/[.72]",
  red: "text-white/[.72]",
};

export default function Features() {
  const { dict } = useLanguage();
  const f = dict.features;

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-white" id="features">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-14 sm:mb-[70px]">
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {f.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] mb-4 text-balance">
            {f.titlePre} <em className="not-italic text-teal-700">{f.titleEm}</em>
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[520px] mx-auto">{f.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {f.items.map((item, i) => {
            const Icon = ICONS[i];
            const variant = VARIANTS[i];
            return (
              <Reveal
                key={item.title}
                className={`group relative overflow-hidden rounded-[20px] p-8 sm:p-9 transition-transform hover:-translate-y-1 ${CARD_STYLES[variant]}`}
              >
                <div className={`w-14 h-14 rounded-[15px] grid place-items-center mb-6 ${ICON_BOX[variant]}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold mb-3 tracking-tight">{item.title}</h3>
                <p className={`text-[14.5px] leading-[1.7] ${BODY_STYLES[variant]}`}>{item.text}</p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {item.tags.map((t) => (
                    <span key={t} className={`text-xs font-semibold px-3 py-[5px] rounded-full ${TAG_STYLES[variant]}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  className={`absolute bottom-7 right-7 w-9 h-9 rounded-[9px] grid place-items-center transition-transform group-hover:translate-x-[3px] group-hover:-translate-y-[3px] ${ARROW_STYLES[variant]}`}
                >
                  <ArrowUpRightIcon className="w-4 h-4" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
