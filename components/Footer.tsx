"use client";

import { LogoMarkIcon, FacebookIcon, TelegramIcon, TwitterIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const f = dict.footer;

  return (
    <footer className="bg-green-3 pt-14 sm:pt-16 pb-10 px-5 sm:px-8 lg:px-10 border-t border-white/[.06]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-[60px] pb-10 sm:pb-12 border-b border-white/[.07]">
          <div>
            <div className="flex items-center gap-2.5 text-white text-xl font-extrabold tracking-tight mb-4">
              <span className="w-9 h-9 rounded-[10px] bg-teal grid place-items-center">
                <LogoMarkIcon className="w-5 h-5 text-white" />
              </span>
              Kamatar ERP
            </div>
            <p className="text-[14.5px] text-white/40 leading-[1.7] max-w-[280px]">
              {f.description}
            </p>
          </div>

          <div>
            <h5 className="text-[13px] font-bold text-white/50 uppercase tracking-wide mb-[18px]">
              {f.productTitle}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {f.productLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[14.5px] text-white/55 font-medium transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[13px] font-bold text-white/50 uppercase tracking-wide mb-[18px]">
              {f.companyTitle}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {f.companyLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[14.5px] text-white/55 font-medium transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h5 className="text-[13px] font-bold text-white/50 uppercase tracking-wide mb-[18px]">
              {f.contactTitle}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {f.contactLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-[14.5px] text-white/55 font-medium transition-colors hover:text-white"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7">
          <p className="text-[13.5px] text-white/30">{f.copyright}</p>
          <div className="flex gap-2.5">
            <a
              href="#"
              className="w-9 h-9 rounded-[9px] bg-white/[.06] grid place-items-center transition-colors hover:bg-white/[.12]"
            >
              <FacebookIcon className="w-[17px] h-[17px] text-white/50" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-[9px] bg-white/[.06] grid place-items-center transition-colors hover:bg-white/[.12]"
            >
              <TelegramIcon className="w-[17px] h-[17px] text-white/50" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-[9px] bg-white/[.06] grid place-items-center transition-colors hover:bg-white/[.12]"
            >
              <TwitterIcon className="w-[17px] h-[17px] text-white/50" />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
