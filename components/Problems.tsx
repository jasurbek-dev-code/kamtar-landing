"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  ClipboardIcon,
  ChartBoltIcon,
  UsersIcon,
  BoxIcon,
  SplitPayIcon,
  DocIcon,
} from "./icons";

const ICONS = [ClipboardIcon, ChartBoltIcon, UsersIcon, BoxIcon, SplitPayIcon, DocIcon];
const COLORS = [
  "bg-red-50 text-red",
  "bg-amber-50 text-amber",
  "bg-blue-50 text-blue-500",
  "bg-purple-50 text-purple-500",
  "bg-teal-50 text-teal-700",
  "bg-slate-100 text-slate-600",
];

export default function Problems() {
  const { dict } = useLanguage();
  const p = dict.problems;

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-canvas" id="problems">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {p.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] mb-4 text-balance">
            {p.titlePre} <em className="not-italic text-teal-700">{p.titleEm}</em>
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[520px]">{p.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {p.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={item.title}
                className="bg-white rounded-[18px] p-8 border-[1.5px] border-line transition-all hover:border-teal hover:shadow-[0_8px_32px_rgba(39,179,155,.08)] hover:-translate-y-1"
              >
                <div className={`w-[52px] h-[52px] rounded-2xl grid place-items-center mb-5 ${COLORS[i]}`}>
                  <Icon className="w-[26px] h-[26px]" />
                </div>
                <h3 className="text-[17px] font-bold text-ink mb-2.5">{item.title}</h3>
                <p className="text-[14.5px] text-muted leading-[1.65]">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
