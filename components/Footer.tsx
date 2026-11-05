"use client";

import React from "react";
import { TRANSLATIONS, Language } from "@/config/translations";
import { WeddingMonogram, GujaratiToran, PatolaBorderStrip, SacredGanesha } from "./PatolaPatterns";
import { ArrowUp, Heart } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#200A0E] text-[#F5EFE3] pt-16 pb-12 px-4 sm:px-6 overflow-hidden border-t-2 border-[#C19A59]">
      {/* Gujarati Toran at Top of Footer */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <GujaratiToran className="h-10 opacity-70" />
      </div>

      {/* Background Subtle Patola Texture */}
      <div className="absolute inset-0 patola-dark-texture opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center pt-8">
        {/* Lord Ganesha blessing icon */}
        <div className="mb-4">
          <SacredGanesha className="w-10 h-10 text-[#DFBD7A]/80 mx-auto" />
        </div>

        {/* Monogram */}
        <div className="my-3">
          <WeddingMonogram size="md" lang={lang} />
        </div>

        {/* The Three Pillars: પરંપરા • પ્રેમ • પરિવાર */}
        <div className="my-4">
          <span className="font-heading-gu text-2xl sm:text-4xl text-[#DFBD7A] font-bold tracking-wide">
            {t.closing.threePillars}
          </span>
        </div>

        {/* Farewell Message */}
        <p className="font-serif-en italic text-base sm:text-xl text-[#E6D9C3]/90 max-w-xl mx-auto leading-relaxed my-2">
          &ldquo;{t.closing.farewellMessage}&rdquo;
        </p>

        {/* Family Signoff */}
        <div className="mt-6 mb-8 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-[#C19A59] font-sans-en">
            {t.closing.warmRegards}
          </span>
          <span className="font-heading-gu text-xl sm:text-2xl font-bold text-[#F5EFE3] mt-1">
            {t.closing.familySignoff}
          </span>
          <span className="text-xs text-[#DFBD7A]/70 font-sans-en mt-1">
            26 November 2026 • Vishv Umiyadham, Ahmedabad
          </span>
        </div>

        {/* Return to Top Button */}
        <button
          onClick={scrollToTop}
          className="my-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C19A59]/40 bg-[#280E13] text-[#DFBD7A] hover:border-[#DFBD7A] hover:bg-[#702C35] transition-all text-xs tracking-wider uppercase font-sans-en cursor-pointer"
        >
          <span>{t.closing.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Bottom Patola Ikat Motif Ribbon */}
        <div className="w-full max-w-md my-4 opacity-40 text-[#DFBD7A]">
          <PatolaBorderStrip />
        </div>

        {/* Copyright & Cultural Tribute */}
        <div className="pt-4 text-center space-y-1">
          <p className="text-[11px] font-sans-en tracking-wider text-[#E6D9C3]/60 uppercase">
            PATOLA HERITAGE • PERSONAL WEDDING INVITATION
          </p>
          <p className="text-[10px] font-sans-en text-[#C19A59]/70">
            {t.closing.patolaHeritageCrafted}
          </p>
        </div>
      </div>
    </footer>
  );
};
