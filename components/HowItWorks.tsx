"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HowItWorks() {
  const { dict } = useLanguage();
  const hw = dict.howItWorks;
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-canvas" id="how">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal>
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {hw.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] mb-4 text-balance">
            {hw.titlePre} <em className="not-italic text-teal-700">{hw.titleEm}</em>
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[520px]">{hw.subtitle}</p>

          <div className="flex flex-col gap-2 mt-10">
            {hw.steps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`text-left flex gap-5 px-[22px] py-5 rounded-2xl transition-colors ${
                  active === i ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,.06)]" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-[11px] text-white text-base font-extrabold grid place-items-center shrink-0 ${
                    active === i ? "bg-teal" : "bg-green-nav"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink mb-1.5">{s.title}</h4>
                  <p className="text-sm text-muted leading-[1.6]">{s.text}</p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="bg-green-nav rounded-[20px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,.25)]">
            <div className="bg-white/[.05] px-[18px] py-3.5 flex items-center gap-2.5 border-b border-white/[.06]">
              <span className="w-2 h-2 rounded-full bg-red-bright" />
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span className="text-xs text-white/40 font-semibold ml-auto">{hw.panel.header}</span>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.client}</div>
                  <div className="text-sm text-teal font-semibold">{hw.panel.clientName}</div>
                </div>
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.date}</div>
                  <div className="text-sm text-white font-semibold">07.07.2026</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.product}</div>
                  <div className="text-sm text-white font-semibold">{hw.panel.productName}</div>
                </div>
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.qty}</div>
                  <div className="text-sm text-white font-semibold">{hw.panel.qtyValue}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.price}</div>
                  <div className="text-sm text-teal font-semibold">{hw.panel.priceValue}</div>
                </div>
                <div className="bg-white/[.06] border border-white/[.08] rounded-[9px] px-3.5 py-[11px]">
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-wide mb-1">{hw.panel.discount}</div>
                  <div className="text-sm text-white font-semibold">—</div>
                </div>
              </div>
              <div className="bg-teal rounded-[10px] px-[18px] py-4 flex justify-between items-center mt-3.5">
                <span className="text-[13px] text-white/80 font-semibold">{hw.panel.total}</span>
                <span className="text-[22px] text-white font-extrabold">{hw.panel.totalValue}</span>
              </div>
              <div className="w-full mt-3 bg-red text-white rounded-[10px] py-3.5 text-sm font-bold text-center">
                {hw.panel.confirm}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
