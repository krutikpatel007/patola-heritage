"use client";

import React, { useState, useEffect } from "react";
import { TRANSLATIONS, Language } from "@/config/translations";
import { WeddingMonogram } from "./PatolaPatterns";
import { Menu, X, Globe, Music, Volume2, VolumeX } from "lucide-react";

interface NavigationProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  lang,
  onLanguageChange,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#shubh-lagna", label: t.nav.invitation },
    { href: "#ceremony", label: t.nav.ceremony },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#venue", label: t.nav.venue },
    { href: "#countdown", label: t.nav.countdown },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-[#F5EFE3]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(112,44,53,0.06)] border-b border-[#C19A59]/25 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Patola Heritage Home"
        >
          <WeddingMonogram size="sm" lang={lang} className="w-10 h-10 group-hover:scale-105 transition-transform" />
          <div className="flex flex-col text-left">
            <span className="font-heading-en text-sm tracking-[0.25em] text-[#702C35] font-semibold uppercase">
              Patola Heritage
            </span>
            <span className="text-[10px] text-[#C19A59] tracking-widest font-heading-gu">
              {lang === "gu" ? "શુભ વિવાહ મહોત્સવ" : "Royal Wedding Invitation"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-xs uppercase tracking-widest font-medium text-[#2C2623] hover:text-[#702C35] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C19A59] hover:after:w-full after:transition-all cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Language Switch & Music Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Sound Toggle in Nav Bar */}
          <button
            onClick={onToggleMusic}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#C19A59]/30 text-[#702C35] hover:bg-[#C19A59]/10 transition-colors text-xs font-medium cursor-pointer"
            title={isPlayingMusic ? t.nav.musicOff : t.nav.musicOn}
            aria-label="Sound Toggle"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C19A59] animate-pulse" />
                <span className="hidden sm:inline text-[11px] font-sans-en text-[#702C35]">
                  {t.nav.musicOn}
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-stone-400" />
                <span className="hidden sm:inline text-[11px] font-sans-en text-stone-500">
                  {t.nav.musicOff}
                </span>
              </>
            )}
          </button>

          {/* Bilingual Language Switcher Button */}
          <button
            onClick={() => onLanguageChange(lang === "gu" ? "en" : "gu")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#702C35] text-[#DFBD7A] hover:bg-[#8A3742] transition-colors text-xs font-semibold tracking-wider cursor-pointer shadow-sm border border-[#C19A59]/40"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{t.nav.langToggle}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#702C35] hover:bg-[#C19A59]/10 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6EE] border-b border-[#C19A59]/30 shadow-xl px-6 py-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-2 text-sm font-medium tracking-wider text-[#2C2623] hover:text-[#702C35] border-b border-[#C19A59]/15 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C19A59] text-xs">◆</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
