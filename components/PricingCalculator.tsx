"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const RATE = 12000;
const BASE = 25;

type RoleKey = "owner" | "admin" | "leader" | "seller" | "store";

const PRICES: Record<RoleKey, number> = { owner: 6, admin: 5, leader: 4, seller: 3, store: 12 };
const INCLUDED: Partial<Record<RoleKey, number>> = { owner: 1, admin: 1, seller: 1 };
const DOTS: Record<RoleKey, string> = {
  owner: "bg-[#8b5cf6]",
  admin: "bg-teal",
  leader: "bg-amber",
  seller: "bg-[#3b82f6]",
  store: "bg-red",
};
const ROLE_ORDER: RoleKey[] = ["owner", "admin", "leader", "seller", "store"];

function formatThousands(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function PricingCalculator() {
  const { dict } = useLanguage();
  const pc = dict.pricingCalculator;

  const [state, setState] = useState<Record<RoleKey, number>>({
    owner: 1,
    admin: 1,
    leader: 0,
    seller: 1,
    store: 0,
  });

  const change = (role: RoleKey, delta: number) => {
    const min = INCLUDED[role] ?? 0;
    setState((prev) => ({ ...prev, [role]: Math.max(min, prev[role] + delta) }));
  };

  const { extra, total } = useMemo(() => {
    const extra: Record<RoleKey, number> = { owner: 0, admin: 0, leader: 0, seller: 0, store: 0 };
    let add = 0;
    for (const role of ROLE_ORDER) {
      extra[role] = Math.max(0, state[role] - (INCLUDED[role] ?? 0));
      add += extra[role] * PRICES[role];
    }
    return { extra, total: BASE + add };
  }, [state]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5 items-start">
      <div className="bg-white border-[1.5px] border-line rounded-2xl overflow-hidden">
        <div className="flex items-center gap-3.5 px-5 sm:px-6 py-4 sm:py-[18px] bg-gradient-to-r from-teal-50 to-white border-b border-line">
          <div className="flex-1">
            <div className="text-[15px] font-bold text-ink">{pc.basePackage}</div>
            <div className="text-xs text-muted font-medium">{pc.baseIncluded}</div>
          </div>
          <div className="text-lg font-extrabold text-teal-700">${BASE}</div>
        </div>

        {ROLE_ORDER.map((role) => {
          const min = INCLUDED[role] ?? 0;
          return (
            <div key={role} className="flex items-center gap-3 sm:gap-3.5 px-5 sm:px-6 py-3.5 border-b border-line last:border-b-0">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${DOTS[role]}`} />
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-bold text-ink">{pc.roles[role].label}</div>
                <div className="text-xs text-muted font-medium truncate">{pc.roles[role].desc}</div>
              </div>
              <span className="hidden sm:inline text-[13.5px] font-bold text-muted whitespace-nowrap mr-1.5">
                +${PRICES[role]}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => change(role, -1)}
                  disabled={state[role] <= min}
                  className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[9px] bg-canvas border-[1.5px] border-line text-ink-2 text-lg font-semibold grid place-items-center transition-all hover:enabled:bg-green-light hover:enabled:border-teal hover:enabled:text-teal-700 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  −
                </button>
                <span className="w-8 text-center text-base font-bold text-ink">{state[role]}</span>
                <button
                  onClick={() => change(role, 1)}
                  className="w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-[9px] bg-canvas border-[1.5px] border-line text-ink-2 text-lg font-semibold grid place-items-center transition-all hover:bg-green-light hover:border-teal hover:text-teal-700"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-green-nav rounded-2xl p-6 lg:sticky lg:top-[88px]">
        <div className="text-[15px] font-bold text-white mb-[18px]">{pc.monthlyTitle}</div>
        <div className="flex flex-col gap-2.5 mb-[18px]">
          <div className="flex items-center justify-between text-[13.5px]">
            <span className="text-white/55 font-medium">{pc.basePlan}</span>
            <span className="font-bold text-white">${BASE}</span>
          </div>
          <div className="h-px bg-white/[.08] my-0.5" />
          {ROLE_ORDER.map((role) =>
            extra[role] > 0 ? (
              <div key={role} className="flex items-center justify-between text-[13.5px]">
                <span className="text-white/55 font-medium flex items-center gap-[7px]">
                  <span className={`w-2 h-2 rounded-full ${DOTS[role]}`} />
                  {extra[role]} × {pc.roles[role].label}
                </span>
                <span className="font-bold text-white/50">+${extra[role] * PRICES[role]}</span>
              </div>
            ) : null
          )}
        </div>
        <div className="bg-white/[.06] border border-white/10 rounded-[14px] p-[18px] mb-4">
          <div className="text-xs text-white/50 font-semibold uppercase tracking-wide mb-1.5">{pc.total}</div>
          <div className="text-[34px] font-black text-white tracking-tight leading-none">
            <sup className="text-base align-top mr-0.5">$</sup>
            {total}
          </div>
          <div className="text-[13px] text-white/40 font-medium mt-1">
            ≈ {formatThousands(total * RATE)} {pc.currency}
          </div>
        </div>
        <button className="w-full py-3.5 bg-teal text-white rounded-[11px] text-[15px] font-bold transition-colors hover:bg-teal-700">
          {pc.startButton}
        </button>
      </div>
    </div>
  );
}
