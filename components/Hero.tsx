"use client";

import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  ArrowRightIcon,
  PlayIcon,
  UserIcon,
  StoreIcon,
  CashIcon,
  CardIcon,
  SplitPayIcon,
  TrendUpIcon,
  ClockIcon,
} from "./icons";

export default function Hero() {
  const { dict } = useLanguage();
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-nav via-green-2 to-green-3 pt-[140px] pb-20 px-5 sm:px-8 lg:pt-[156px] lg:pb-[100px] lg:px-10">
      <div className="pointer-events-none absolute -top-[40%] -right-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(39,179,155,.12)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-[20%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(194,54,42,.08)_0%,transparent_70%)]" />

      <div className="relative z-[1] max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 bg-teal/15 border border-teal/30 text-teal text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
            <span className="w-[7px] h-[7px] rounded-full bg-teal animate-pulse" />
            {h.badge}
          </div>
          <h1 className="text-[38px] sm:text-[46px] lg:text-[58px] font-black text-white leading-[1.1] tracking-[-1px] lg:tracking-[-1.5px] mb-6 text-balance">
            {h.titlePre} <em className="not-italic text-teal">{h.titleEm}</em>
          </h1>
          <p className="text-base sm:text-lg text-white/65 leading-[1.7] mb-10 max-w-[480px]">{h.subtitle}</p>
          <div className="flex flex-wrap gap-3.5">
            <button className="inline-flex items-center gap-2.5 bg-teal text-white text-[15px] sm:text-base font-bold px-7 sm:px-[34px] py-4 rounded-[13px] shadow-[0_8px_28px_rgba(39,179,155,.35)] transition-all hover:bg-teal-700 hover:-translate-y-0.5">
              {h.ctaPrimary}
              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </button>
            <button className="inline-flex items-center gap-2.5 bg-white/[.08] text-white text-[15px] sm:text-base font-semibold px-7 py-4 rounded-[13px] border-[1.5px] border-white/[.18] transition-all hover:bg-white/[.13] hover:border-white/30">
              <PlayIcon className="w-[18px] h-[18px]" />
              {h.ctaSecondary}
            </button>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="flex">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-green-nav bg-green-1 grid place-items-center -ml-2 first:ml-0"
                >
                  <UserIcon className="w-4 h-4 text-white/60" />
                </div>
              ))}
            </div>
            <span className="text-[13.5px] text-white/55 font-medium">
              <strong className="text-white/85">{h.socialProofStrong}</strong> {h.socialProofText}
            </span>
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="relative bg-gradient-to-br from-green-1 to-green-3 rounded-[20px] border border-white/10 p-5 shadow-hero overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal to-red" />
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center gap-2 bg-white/[.07] rounded-[9px] px-3.5 py-2 text-[13px] font-bold text-white">
                <StoreIcon className="w-3.5 h-3.5 text-white/50" />
                {h.panel.storeName}
              </div>
              <div className="flex-1" />
              <div className="hidden sm:block text-xs text-white/40 font-semibold">07.07.2026 · 10:24</div>
            </div>
            <div className="flex gap-1 mb-4 overflow-x-auto no-scrollbar">
              {h.panel.tabs.map((t, i) => (
                <span
                  key={t}
                  className={`text-[11px] font-semibold px-[11px] py-[5px] rounded-[7px] whitespace-nowrap ${
                    i === 0 ? "bg-white/10 text-white" : "text-white/45"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2.5 mb-3.5">
              <div className="rounded-[11px] p-3.5 flex flex-col gap-2.5 bg-red">
                <div className="w-8 h-8 rounded-lg bg-white/[.18] grid place-items-center">
                  <CashIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/90">{h.panel.cards[0]}</div>
              </div>
              <div className="rounded-[11px] p-3.5 flex flex-col gap-2.5 bg-teal">
                <div className="w-8 h-8 rounded-lg bg-white/[.18] grid place-items-center">
                  <CardIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/90">{h.panel.cards[1]}</div>
              </div>
              <div className="rounded-[11px] p-3.5 flex flex-col gap-2.5 bg-white/[.07] border border-white/[.08]">
                <div className="w-8 h-8 rounded-lg bg-white/[.18] grid place-items-center">
                  <SplitPayIcon className="w-4 h-4 text-white" />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-white/90">{h.panel.cards[2]}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-2.5">
              <div className="bg-white rounded-[11px] p-3.5">
                <div className="text-[11px] font-bold text-muted uppercase tracking-wide mb-2.5">{h.panel.todaySales}</div>
                <div className="text-lg font-extrabold text-ink tracking-tight">24,850,000</div>
                <div className="text-[11px] text-muted font-medium mt-0.5">{h.panel.currency}</div>
                <div className="flex flex-col gap-[7px] mt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-medium">{h.panel.cash}</span>
                    <span className="font-bold text-teal-700">18,200,000</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-medium">{h.panel.credit}</span>
                    <span className="font-bold text-ink">6,650,000</span>
                  </div>
                </div>
                <div className="h-1 bg-line rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full rounded-full bg-teal" style={{ width: "73%" }} />
                </div>
              </div>
              <div className="bg-white rounded-[11px] p-3.5">
                <div className="text-[11px] font-bold text-muted uppercase tracking-wide mb-2.5">{h.panel.cashboxStatus}</div>
                <div className="text-lg font-extrabold text-teal-700 tracking-tight">142,300,000</div>
                <div className="text-[11px] text-muted font-medium mt-0.5">{h.panel.cashboxSub}</div>
                <div className="flex flex-col gap-[7px] mt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-medium">USD</span>
                    <span className="font-bold text-ink">$ 4,250</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted font-medium">{h.panel.debt}</span>
                    <span className="font-bold text-red">−3,200,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex absolute -top-5 -right-6 items-center gap-2.5 bg-white rounded-xl shadow-[0_8px_28px_rgba(0,0,0,.18)] px-4 py-3">
            <div className="w-9 h-9 rounded-[9px] bg-green-light text-teal-700 grid place-items-center shrink-0">
              <TrendUpIcon className="w-[18px] h-[18px]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-ink leading-none">+18.4%</div>
              <div className="text-[11px] text-muted font-medium mt-0.5">{h.panel.growthLabel}</div>
            </div>
          </div>
          <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-2.5 bg-white rounded-xl shadow-[0_8px_28px_rgba(0,0,0,.18)] px-4 py-3">
            <div className="w-9 h-9 rounded-[9px] bg-amber/15 text-amber grid place-items-center shrink-0">
              <ClockIcon className="w-[18px] h-[18px]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-ink leading-none">{h.panel.realtimeLabel1}</div>
              <div className="text-[11px] text-muted font-medium mt-0.5">{h.panel.realtimeLabel2}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
