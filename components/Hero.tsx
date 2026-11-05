"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SacredGanesha, WeddingMonogram, PatolaBorderStrip, PatolaMandala } from "./PatolaPatterns";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import { Calendar, Clock, MapPin, ChevronDown, Check } from "lucide-react";

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { couple, event, venue } = WEDDING_CONFIG;
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Generate dynamic .ics calendar file for guests
  const handleAddToCalendar = () => {
    const title = `${couple.bride.nameGu} & ${couple.groom.nameGu} - શુભ વિવાહ (Wedding Celebration)`;
    const description = `With the blessings of our elders and the love of our families, we warmly invite you to celebrate the auspicious wedding ceremony of Harshini & Denis.\nVenue: ${venue.nameGu}, ${venue.cityGu}`;
    const location = `${venue.nameEn}, ${venue.landmarkEn}, ${venue.cityEn}, ${venue.stateEn}`;
    // 26 Nov 2026 15:00 IST is 09:30 UTC
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Patola Heritage//Wedding Invitation//EN",
      "BEGIN:VEVENT",
      "UID:patola-wedding-20261126@patolaheritage.com",
      "DTSTAMP:20261101T000000Z",
      "DTSTART:20261126T093000Z",
      "DTEND:20261126T143000Z",
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Harshini_Denis_Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3500);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center pt-28 pb-12 px-4 sm:px-6 overflow-hidden bg-[#F5EFE3] patola-texture"
    >
      {/* Top Patola Border */}
      <div className="w-full absolute top-16 left-0 right-0 opacity-40">
        <PatolaBorderStrip />
      </div>

      {/* Decorative Corner Patola Mandalas */}
      <div className="absolute top-24 left-4 md:left-12 text-[#C19A59]/35 pointer-events-none hidden sm:block">
        <PatolaMandala className="w-16 h-16 md:w-24 md:h-24" />
      </div>
      <div className="absolute top-24 right-4 md:right-12 text-[#C19A59]/35 pointer-events-none hidden sm:block">
        <PatolaMandala className="w-16 h-16 md:w-24 md:h-24" />
      </div>

      {/* Main Hero Card Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto my-auto flex flex-col items-center text-center">
        {/* Lord Ganesha Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-2 mb-4"
        >
          <SacredGanesha className="w-12 h-12 md:w-14 md:h-14 text-[#C19A59] filter drop-shadow-sm" />
          <div className="flex items-center gap-3">
            <span className="w-8 md:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C19A59]" />
            <span className="font-heading-gu text-base md:text-xl font-semibold text-[#702C35] tracking-wider">
              {t.hero.ganeshGreeting}
            </span>
            <span className="w-8 md:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C19A59]" />
          </div>
          <span className="text-[10px] md:text-xs font-sans-en uppercase tracking-[0.3em] text-[#C19A59] font-medium">
            {t.hero.topBadge}
          </span>
        </motion.div>

        {/* Wedding Monogram */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="my-3"
        >
          <WeddingMonogram size="md" lang={lang} />
        </motion.div>

        {/* Couple Names: The Master Centrepiece */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="space-y-2 my-2 w-full"
        >
          <h1 className="flex flex-col items-center justify-center">
            {/* Bride */}
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading-gu font-bold text-[#702C35] tracking-tight drop-shadow-sm">
              {lang === "gu" ? `${couple.bride.titleGu} ${couple.bride.nameGu}` : `${couple.bride.titleEn} ${couple.bride.nameEn}`}
            </span>

            {/* WITH ornament */}
            <span className="flex items-center gap-4 my-2 text-xs md:text-sm font-serif-en italic uppercase tracking-[0.35em] text-[#C19A59]">
              <span className="w-12 md:w-20 h-[1px] bg-[#C19A59]/60" />
              <span>{t.hero.withText}</span>
              <span className="w-12 md:w-20 h-[1px] bg-[#C19A59]/60" />
            </span>

            {/* Groom */}
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading-gu font-bold text-[#702C35] tracking-tight drop-shadow-sm">
              {lang === "gu" ? `${couple.groom.titleGu} ${couple.groom.nameGu}` : `${couple.groom.titleEn} ${couple.groom.nameEn}`}
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="font-serif-en italic text-base md:text-xl text-[#243E35] max-w-xl mx-auto pt-2">
            &ldquo;{t.hero.tagline}&rdquo;
          </p>
        </motion.div>

        {/* Date, Time, Venue Pills in Luxury Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 mb-8 w-full max-w-2xl px-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-[#FAF6EE]/90 border border-[#C19A59]/35 shadow-[0_10px_30px_rgba(112,44,53,0.04)] relative">
            {/* Subtle corner ticks */}
            <div className="patola-corner-tl" />
            <div className="patola-corner-tr" />
            <div className="patola-corner-bl" />
            <div className="patola-corner-br" />

            {/* Date Pill */}
            <div className="flex flex-col items-center p-2">
              <Calendar className="w-4 h-4 text-[#C19A59] mb-1.5" />
              <span className="text-[10px] uppercase tracking-wider text-[#6B5E55] font-sans-en">
                {lang === "gu" ? "તારીખ" : "Date"}
              </span>
              <span className="font-heading-gu font-bold text-sm md:text-base text-[#702C35]">
                {lang === "gu" ? event.dateFormattedGu : event.dateFormattedEn}
              </span>
              <span className="text-xs text-[#243E35] font-medium">
                {lang === "gu" ? event.dayGu : event.dayEn}
              </span>
            </div>

            {/* Time Pill */}
            <div className="flex flex-col items-center p-2 border-y sm:border-y-0 sm:border-x border-[#C19A59]/20">
              <Clock className="w-4 h-4 text-[#C19A59] mb-1.5" />
              <span className="text-[10px] uppercase tracking-wider text-[#6B5E55] font-sans-en">
                {lang === "gu" ? "સમય" : "Auspicious Time"}
              </span>
              <span className="font-heading-gu font-bold text-sm md:text-base text-[#702C35]">
                {lang === "gu" ? event.timeGu : event.timeEn}
              </span>
              <span className="text-xs text-[#243E35] font-medium">
                {lang === "gu" ? event.auspiciousNoteGu : event.auspiciousNoteEn}
              </span>
            </div>

            {/* Venue Pill */}
            <div className="flex flex-col items-center p-2">
              <MapPin className="w-4 h-4 text-[#C19A59] mb-1.5" />
              <span className="text-[10px] uppercase tracking-wider text-[#6B5E55] font-sans-en">
                {lang === "gu" ? "સ્થળ" : "Venue"}
              </span>
              <span className="font-heading-gu font-bold text-sm md:text-base text-[#702C35] line-clamp-1">
                {lang === "gu" ? venue.nameGu : venue.nameEn}
              </span>
              <span className="text-xs text-[#243E35] font-medium">
                {lang === "gu" ? `${venue.cityGu}, ${venue.stateGu}` : `${venue.cityEn}, ${venue.stateEn}`}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Add to Calendar Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FAF6EE] border border-[#C19A59] text-[#702C35] hover:bg-[#702C35] hover:text-[#DFBD7A] transition-all text-xs font-semibold tracking-wider uppercase shadow-sm cursor-pointer group"
          >
            {calendarAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.hero.calendarSuccess}</span>
              </>
            ) : (
              <>
                <Calendar className="w-3.5 h-3.5 text-[#C19A59] group-hover:text-[#DFBD7A]" />
                <span>{t.hero.addToCalendar}</span>
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center pt-6 text-[#702C35]/80 hover:text-[#702C35] transition-colors cursor-pointer"
        onClick={() => {
          document.getElementById("shubh-lagna")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-sans-en uppercase tracking-[0.2em] text-[#C19A59] mb-1">
          {t.hero.scrollDown}
        </span>
        <ChevronDown className="w-4 h-4 text-[#C19A59]" />
      </motion.div>
    </section>
  );
};
