"use client";

import React from "react";
import { motion } from "framer-motion";
import { TRANSLATIONS, Language } from "@/config/translations";
import { AuspiciousKalash, PatolaParrot, HaveliArch, PatolaBorderStrip } from "./PatolaPatterns";

interface InvitationProps {
  lang: Language;
}

export const Invitation: React.FC<InvitationProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="shubh-lagna"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#F5EFE3] overflow-hidden"
    >
      {/* Decorative Top Ribbon */}
      <div className="w-full max-w-4xl mx-auto mb-12 opacity-35">
        <PatolaBorderStrip />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#C19A59] font-semibold">
            {t.invitation.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#702C35] mt-1 tracking-tight">
            {t.invitation.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#243E35] mt-2">
            {t.invitation.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#C19A59] mx-auto mt-4" />
        </motion.div>

        {/* Haveli Arch Framed Royal Stationery Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FAF6EE] rounded-3xl border-2 border-[#C19A59]/40 p-8 sm:p-14 md:p-16 shadow-[0_15px_40px_rgba(112,44,53,0.06)]"
        >
          {/* Ornate Corner Brackets */}
          <div className="patola-corner-tl" />
          <div className="patola-corner-tr" />
          <div className="patola-corner-bl" />
          <div className="patola-corner-br" />

          {/* Haveli Cusped Crest */}
          <HaveliArch>
            <div className="flex items-center justify-center gap-6 my-2 text-[#C19A59]">
              <PatolaParrot className="w-10 h-10 transform scale-x-[-1] opacity-75 hidden sm:block" />
              <AuspiciousKalash className="w-14 h-14 md:w-16 md:h-16 text-[#C19A59]" />
              <PatolaParrot className="w-10 h-10 opacity-75 hidden sm:block" />
            </div>
          </HaveliArch>

          {/* Sacred Sanskrit Shloka */}
          <div className="my-6 text-center">
            <p className="font-heading-gu text-xs sm:text-sm text-[#702C35] font-semibold tracking-wider leading-relaxed px-4 py-2 border-y border-[#C19A59]/25 inline-block">
              {t.invitation.sanskritShloka}
            </p>
          </div>

          {/* Primary Editorial Invitation Texts */}
          <div className="space-y-6 text-center max-w-xl mx-auto my-8">
            <blockquote className="font-heading-gu text-lg sm:text-2xl text-[#702C35] font-medium leading-relaxed">
              &ldquo;{t.invitation.invitationText}&rdquo;
            </blockquote>

            <div className="w-12 h-[1px] bg-[#C19A59]/50 mx-auto" />

            <p className="font-serif-en text-sm sm:text-base text-[#2C2623]/80 leading-relaxed italic">
              {t.invitation.cordialInvite}
            </p>

            <p className="text-xs uppercase tracking-widest text-[#243E35] font-sans-en font-semibold pt-2">
              {t.invitation.parentsBlessing}
            </p>
          </div>

          {/* Decorative Bottom Emblem */}
          <div className="flex items-center justify-center gap-3 pt-6 text-[#C19A59]">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C19A59]" />
            <span className="text-xs">❖ ❖ ❖</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C19A59]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
