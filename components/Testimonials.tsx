"use client";

import Reveal from "./Reveal";
import { StarIcon, UserIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const { dict } = useLanguage();
  const t = dict.testimonials;

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-white" id="testimonials">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] text-balance">
            {t.titlePre} <em className="not-italic text-teal-700">{t.titleEm}</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item) => (
            <Reveal key={item.name} className="bg-canvas rounded-[20px] p-8 border-[1.5px] border-line">
              <div className="flex gap-[3px] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber" />
                ))}
              </div>
              <blockquote className="text-[15.5px] text-ink-2 leading-[1.7] font-medium mb-6">{item.quote}</blockquote>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-green-nav grid place-items-center shrink-0">
                  <UserIcon className="w-[22px] h-[22px] text-white/60" />
                </div>
                <div>
                  <div className="text-[15px] font-bold text-ink">{item.name}</div>
                  <div className="text-[13px] text-muted font-medium">{item.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
