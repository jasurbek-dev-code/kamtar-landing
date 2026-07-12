"use client";

import Reveal from "./Reveal";
import PricingCalculator from "./PricingCalculator";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ADDON_DOTS = ["bg-[#8b5cf6]", "bg-teal", "bg-amber", "bg-[#3b82f6]", "bg-red"];
const CHIP_DOTS = ["bg-red", "bg-[#8b5cf6]", "bg-teal", "bg-[#3b82f6]"];
const PLAN_FEATURE_DOTS = [
  ["bg-red", "bg-[#8b5cf6]", "bg-teal", "bg-[#3b82f6]"],
  ["bg-[#8b5cf6]", "bg-teal", "bg-amber", "bg-[#3b82f6]"],
  ["bg-red", "bg-teal", "bg-[#3b82f6]", "bg-[#8b5cf6]"],
];

export default function Pricing() {
  const { dict } = useLanguage();
  const p = dict.pricing;

  return (
    <section className="py-20 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-10 bg-canvas" id="pricing">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center mb-12 sm:mb-[52px]">
          <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-3.5 py-1.5 rounded-full uppercase tracking-wide mb-4">
            {p.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-ink tracking-tight leading-[1.2] mb-4 text-balance">
            {p.titlePre} <em className="not-italic text-teal-700">{p.titleEm}</em> {p.titlePost}
          </h2>
          <p className="text-[17px] text-muted leading-[1.7] max-w-[520px] mx-auto">{p.subtitle}</p>
        </Reveal>

        {/* Base package */}
        <Reveal className="max-w-[900px] mx-auto mb-5">
          <div className="relative overflow-hidden bg-green-nav rounded-[22px] px-6 sm:px-12 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-10 items-center">
            <div className="pointer-events-none absolute -top-1/2 -right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(39,179,155,.12)_0%,transparent_65%)]" />
            <div className="relative z-[1]">
              <span className="inline-block text-[11px] font-bold text-teal bg-teal/[.15] px-3 py-1 rounded-full uppercase tracking-wide mb-3.5">
                {p.basePackage.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-white tracking-tight mb-2.5">{p.basePackage.title}</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.basePackage.chips.map((chip, i) => (
                  <span
                    key={chip}
                    className="flex items-center gap-1.5 bg-white/[.08] border border-white/10 rounded-full px-[13px] py-1.5 text-[13px] text-white/80 font-semibold"
                  >
                    <span className={`w-[7px] h-[7px] rounded-full ${CHIP_DOTS[i]}`} />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative z-[1] text-left sm:text-right">
              <div className="text-[44px] sm:text-[56px] font-black text-white tracking-tighter leading-none">
                <sup className="text-xl sm:text-2xl align-top mr-0.5 mt-2 inline-block">$</sup>25
              </div>
              <div className="text-sm text-white/45 font-medium mt-1">{p.basePackage.perMonth}</div>
              <div className="text-[13px] text-white/35 mt-0.5">{p.basePackage.approx}</div>
            </div>
          </div>
        </Reveal>

        {/* Add-ons */}
        <Reveal className="max-w-[900px] mx-auto mb-11">
          <div className="bg-white border-[1.5px] border-line rounded-[18px] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="text-sm font-bold text-ink whitespace-nowrap">
              {p.addons.title}
              <span className="block text-xs font-medium text-muted mt-0.5">{p.addons.subtitle}</span>
            </div>
            <div className="flex gap-2.5 flex-wrap sm:justify-end flex-1">
              {p.addons.items.map((a, i) => (
                <div key={a.name} className="flex items-center gap-2 bg-canvas border-[1.5px] border-line rounded-xl px-[15px] py-2.5">
                  <span className={`w-[9px] h-[9px] rounded-full ${ADDON_DOTS[i]}`} />
                  <span className="text-[13.5px] font-semibold text-ink-2">{a.name}</span>
                  <span className="text-sm font-extrabold text-teal-700">{a.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Example plans */}
        <Reveal className="text-center text-sm font-semibold text-muted mb-6">{p.plansLabel}</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {p.plans.map((plan, planIdx) => (
            <Reveal
              key={plan.name}
              className={`relative bg-white rounded-[20px] p-8 border-[1.5px] transition-transform hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,.07)] ${
                plan.popularBadge ? "border-teal border-2" : "border-line"
              }`}
            >
              {plan.popularBadge && (
                <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-4 py-[5px] rounded-full whitespace-nowrap">
                  {plan.popularBadge}
                </span>
              )}
              <div className="text-[13px] font-bold uppercase tracking-wide text-muted mb-3">{plan.name}</div>
              <div className="text-4xl font-black tracking-tighter leading-none mb-1 text-ink">
                <sup className="text-lg font-bold align-top mr-0.5 mt-[7px] inline-block">$</sup>
                {plan.price}
              </div>
              <div className="text-[13px] text-faint font-medium mb-[22px]">{plan.period}</div>
              <ul className="flex flex-col gap-2.5 mb-[26px]">
                {plan.features.map((label, i) => (
                  <li key={label} className="flex items-center gap-2.5 text-sm text-ink-2 font-medium">
                    <span className={`w-[7px] h-[7px] rounded-full shrink-0 ${PLAN_FEATURE_DOTS[planIdx][i]}`} />
                    {label}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3.5 rounded-xl text-[15px] font-bold transition-all ${
                  plan.popularBadge
                    ? "bg-teal text-white shadow-[0_6px_20px_rgba(39,179,155,.3)] hover:bg-teal-700"
                    : "bg-transparent border-2 border-line text-ink hover:border-teal hover:text-teal-700"
                }`}
              >
                {plan.cta}
              </button>
            </Reveal>
          ))}
        </div>

        {/* Custom calculator */}
        <Reveal className="max-w-[1000px] mx-auto mt-14">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-extrabold text-ink tracking-tight mb-2">{p.calculator.title}</h3>
            <p className="text-[15px] text-muted">{p.calculator.subtitle}</p>
          </div>
          <PricingCalculator />
        </Reveal>
      </div>
    </section>
  );
}
