"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  CashIcon,
  CardIcon,
  BoxIcon,
  SplitPayIcon,
  UsersIcon,
  WrenchIcon,
  BarsIcon,
  GridIcon,
} from "./icons";

const ICONS = [CashIcon, CardIcon, BoxIcon, SplitPayIcon, UsersIcon, WrenchIcon, BarsIcon, GridIcon];

export default function Modules() {
  const { dict } = useLanguage();
  const m = dict.modules;

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-white" id="modules">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center">
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {m.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] mb-4 text-balance">
            {m.titlePre} <em className="not-italic text-teal-700">{m.titleEm}</em>
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[520px] mx-auto">{m.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {m.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={item.title}
                className="group bg-canvas rounded-2xl p-6 border-[1.5px] border-line flex flex-col gap-3.5 transition-all hover:border-teal hover:bg-teal-50 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-green-light grid place-items-center transition-colors group-hover:bg-teal/[.15]">
                  <Icon className="w-6 h-6 text-teal-700" />
                </div>
                <h4 className="text-base font-bold text-ink">{item.title}</h4>
                <p className="text-[13.5px] text-muted leading-[1.6]">{item.text}</p>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full self-start transition-colors group-hover:bg-teal/[.18]">
                  {item.tag}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
