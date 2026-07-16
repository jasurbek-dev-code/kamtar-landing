"use client";

import { useEffect, useState } from "react";
import { LogoMarkIcon, MenuIcon, CloseIcon } from "./icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { dict } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // O'tish kerak bo'lgan tizim linki (masalan, app.kamatar.uz yoki boshqa url)
  const LOGIN_URL = "https://erp.kamatar.uz";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] bg-green-nav h-[72px] flex items-center justify-between px-5 sm:px-8 lg:px-10 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,.3)]" : ""
      }`}
    >
      <a
        href="#"
        className="flex items-center gap-2.5 text-white text-lg sm:text-xl font-extrabold tracking-tight shrink-0"
      >
        <span className="w-9 h-9 rounded-[10px] bg-teal grid place-items-center">
          <LogoMarkIcon className="w-5 h-5 text-white" />
        </span>
        Kamatar ERP
      </a>

      <div className="hidden lg:flex gap-1">
        {dict.nav.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-white/70 text-[15px] font-semibold px-4 py-2 rounded-[9px] transition-all hover:text-white hover:bg-white/10"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex items-center gap-3  shrink-0">
        <LanguageSwitcher />

        {/* Desktop uchun login tugmasi 'a' tegi orqali o'tkazildi */}
        <a
          href={LOGIN_URL}
          className="text-white/80 text-sm font-semibold px-5 py-[9px] rounded-[9px] border-[1.5px] border-white/20 transition-all hover:bg-white/10 hover:text-white hover:border-white/40 text-center"
        >
          {dict.nav.login}
        </a>
      </div>

      <div className="lg:hidden ml-auto flex items-center gap-2">
        <LanguageSwitcher />
        <button
          aria-label={dict.nav.menuLabel}
          onClick={() => setOpen((v) => !v)}
          className="text-white p-2"
        >
          {open ? (
            <CloseIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[72px] left-0 right-0 bg-green-nav border-t border-white/10 px-5 py-5 flex flex-col gap-1 shadow-xl">
          {dict.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 text-[15px] font-semibold px-3 py-3 rounded-[9px] hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            {/* Mobil menyu uchun login tugmasi 'a' tegi orqali o'tkazildi */}
            <a
              href={LOGIN_URL}
              onClick={() => setOpen(false)}
              className="text-white/80 text-sm font-semibold px-5 py-3 rounded-[9px] border-[1.5px] border-white/20 text-center"
            >
              {dict.nav.login}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
