"use client";

import React from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import { PatolaElephant, PatolaMandala, PatolaBorderStrip } from "./PatolaPatterns";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

interface WeddingEventProps {
  lang: Language;
}

export const WeddingEvent: React.FC<WeddingEventProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { event, venue } = WEDDING_CONFIG;

  return (
    <section
      id="ceremony"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#280E13] text-[#F5EFE3] overflow-hidden patola-dark-texture"
    >
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#702C35]/30 blur-3xl pointer-events-none" />

      {/* Decorative Patola Border Strip */}
      <div className="w-full max-w-4xl mx-auto mb-12 opacity-30 text-[#DFBD7A]">
        <PatolaBorderStrip />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#DFBD7A] font-semibold">
            {t.ceremony.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#DFBD7A] mt-1 tracking-tight">
            {t.ceremony.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#E6D9C3]/80 mt-2">
            {t.ceremony.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#DFBD7A] mx-auto mt-4" />
        </motion.div>

        {/* Luxury Event Stationery Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-gradient-to-b from-[#38141B] to-[#200A0E] border-2 border-[#C19A59] p-8 sm:p-14 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle Corner Accents */}
          <div className="patola-corner-tl" />
          <div className="patola-corner-tr" />
          <div className="patola-corner-bl" />
          <div className="patola-corner-br" />

          {/* Badge & Elephants */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#C19A59]/30">
            <PatolaElephant className="w-12 h-10 text-[#DFBD7A] opacity-80 hidden sm:block" />
            <div className="flex flex-col items-center mx-auto">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#702C35] border border-[#C19A59] text-[11px] font-sans-en uppercase tracking-widest text-[#DFBD7A] font-semibold">
                <Sparkles className="w-3 h-3" />
                {t.ceremony.badge}
              </span>
              <h3 className="font-heading-gu text-xl sm:text-2xl font-bold text-[#F5EFE3] mt-2">
                {lang === "gu" ? event.ceremonyNameGu : event.ceremonyNameEn}
              </h3>
            </div>
            <PatolaElephant className="w-12 h-10 text-[#DFBD7A] opacity-80 transform scale-x-[-1] hidden sm:block" />
          </div>

          {/* Core Ceremony Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            {/* Date & Day */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#280E13]/80 border border-[#C19A59]/30">
              <div className="p-3 rounded-xl bg-[#702C35] border border-[#C19A59]/50 text-[#DFBD7A]">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-[#DFBD7A]/80 font-sans-en">
                  {t.ceremony.dateLabel} & {t.ceremony.dayLabel}
                </span>
                <span className="text-xl sm:text-2xl font-heading-gu font-bold text-[#F5EFE3] mt-0.5">
                  {lang === "gu" ? event.dateFormattedGu : event.dateFormattedEn}
                </span>
                <span className="text-sm font-sans-en text-[#E6D9C3]/80 font-medium mt-1">
                  {lang === "gu" ? `${event.dayGu} બપોરે` : `${event.dayEn} Afternoon`}
                </span>
              </div>
            </div>

            {/* Time & Muhurat */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#280E13]/80 border border-[#C19A59]/30">
              <div className="p-3 rounded-xl bg-[#702C35] border border-[#C19A59]/50 text-[#DFBD7A]">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-[#DFBD7A]/80 font-sans-en">
                  {t.ceremony.timeLabel}
                </span>
                <span className="text-xl sm:text-2xl font-heading-gu font-bold text-[#F5EFE3] mt-0.5">
                  {lang === "gu" ? event.timeGu : event.timeEn}
                </span>
                <span className="text-sm font-sans-en text-[#E6D9C3]/80 font-medium mt-1">
                  {lang === "gu" ? event.auspiciousNoteGu : event.auspiciousNoteEn}
                </span>
              </div>
            </div>

            {/* Venue Location Summary */}
            <div className="md:col-span-2 flex items-start gap-4 p-5 rounded-2xl bg-[#280E13]/80 border border-[#C19A59]/30">
              <div className="p-3 rounded-xl bg-[#702C35] border border-[#C19A59]/50 text-[#DFBD7A]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[11px] uppercase tracking-wider text-[#DFBD7A]/80 font-sans-en">
                  {t.ceremony.venueLabel}
                </span>
                <span className="text-xl sm:text-2xl font-heading-gu font-bold text-[#F5EFE3] mt-0.5">
                  {lang === "gu" ? venue.nameGu : venue.nameEn}
                </span>
                <span className="text-sm font-sans-en text-[#E6D9C3]/80 mt-1">
                  {lang === "gu"
                    ? `${venue.landmarkGu}, ${venue.cityGu}, ${venue.stateGu}`
                    : `${venue.landmarkEn}, ${venue.cityEn}, ${venue.stateEn}`}
                </span>
              </div>
            </div>
          </div>

          {/* Traditional Ritual Description */}
          <div className="mt-8 pt-6 border-t border-[#C19A59]/30 text-center">
            <p className="font-serif-en italic text-xs sm:text-sm text-[#E6D9C3]/80 max-w-lg mx-auto leading-relaxed">
              {t.ceremony.traditionalNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
