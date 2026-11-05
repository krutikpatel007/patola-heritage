"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import { PatolaBorderStrip, PatolaMandala } from "./PatolaPatterns";
import { Clock, Sparkles } from "lucide-react";

interface CountdownProps {
  lang: Language;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

// Convert English digits to Gujarati digits if requested
const toGujaratiDigits = (num: number): string => {
  const gujaratiDigits = ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"];
  return num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((char) => {
      const parsed = parseInt(char, 10);
      return isNaN(parsed) ? char : gujaratiDigits[parsed];
    })
    .join("");
};

export const Countdown: React.FC<CountdownProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const targetTime = new Date(WEDDING_CONFIG.event.date).getTime();

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isComplete: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const units = [
    { label: t.countdown.days, value: timeLeft.days },
    { label: t.countdown.hours, value: timeLeft.hours },
    { label: t.countdown.minutes, value: timeLeft.minutes },
    { label: t.countdown.seconds, value: timeLeft.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#243E35] text-[#F5EFE3] overflow-hidden"
    >
      {/* Decorative Background Texture */}
      <div className="absolute inset-0 opacity-15 patola-dark-texture pointer-events-none" />

      {/* Subtle Patola Mandala Watermarks */}
      <div className="absolute -top-12 -left-12 text-[#DFBD7A]/15 pointer-events-none">
        <PatolaMandala className="w-56 h-56" />
      </div>
      <div className="absolute -bottom-12 -right-12 text-[#DFBD7A]/15 pointer-events-none">
        <PatolaMandala className="w-56 h-56" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#DFBD7A] font-semibold">
            {t.countdown.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#DFBD7A] mt-1 tracking-tight">
            {t.countdown.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#E6D9C3]/80 mt-2">
            {t.countdown.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#DFBD7A] mx-auto mt-4" />
        </motion.div>

        {/* Real-time Countdown Grid */}
        {timeLeft.isComplete ? (
          <div className="text-center p-8 rounded-3xl bg-[#1A2D27] border-2 border-[#C19A59] shadow-2xl">
            <Sparkles className="w-12 h-12 text-[#DFBD7A] mx-auto mb-3 animate-spin" />
            <h3 className="text-2xl sm:text-3xl font-heading-gu font-bold text-[#DFBD7A]">
              {t.countdown.celebratingNow}
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#172923]/90 border border-[#C19A59]/40 shadow-[0_10px_30px_rgba(0,0,0,0.3)] group hover:border-[#DFBD7A] transition-colors"
              >
                {/* Stepped corner accents */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#C19A59]" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#C19A59]" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#C19A59]" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#C19A59]" />

                {/* Primary Number */}
                <div className="text-4xl sm:text-6xl font-heading-en font-bold text-[#DFBD7A] tracking-wider leading-none">
                  {unit.value.toString().padStart(2, "0")}
                </div>

                {/* Gujarati numeral subtitle if Gujarati is selected */}
                {lang === "gu" && (
                  <span className="font-heading-gu text-base sm:text-lg text-[#C19A59]/80 font-semibold mt-1">
                    ({toGujaratiDigits(unit.value)})
                  </span>
                )}

                {/* Unit Label */}
                <span className="mt-3 text-xs uppercase tracking-[0.2em] font-sans-en text-[#E6D9C3]/80 font-medium">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Auspicious Time Tag */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-[#DFBD7A]/90 font-serif-en italic">
          <Clock className="w-4 h-4 text-[#C19A59]" />
          <span>
            {lang === "gu"
              ? "૨૬ નવેમ્બર, ૨૦૨૬ • બપોરે ૩:૦૦ વાગ્યે (ભારતીય માનક સમય - IST)"
              : "26 November 2026 • 3:00 PM (Indian Standard Time - IST)"}
          </span>
        </div>
      </div>
    </section>
  );
};
