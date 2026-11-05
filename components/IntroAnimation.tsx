"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SacredGanesha, PatolaMandala, WeddingMonogram } from "./PatolaPatterns";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import confetti from "canvas-confetti";
import { Sparkles, ArrowRight } from "lucide-react";

interface IntroAnimationProps {
  onComplete: () => void;
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onStartAudio: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({
  onComplete,
  lang,
  onLanguageChange,
  onStartAudio,
}) => {
  // Scene progression: 1 (Ganesh & Heritage) -> 2 (Carved Haveli Doors/Envelope) -> 3 (The Reveal)
  const [scene, setScene] = useState<1 | 2 | 3>(1);
  const [isOpeningDoors, setIsOpeningDoors] = useState(false);

  const t = TRANSLATIONS[lang];
  const { couple, event } = WEDDING_CONFIG;

  // Auto-advance scenes smoothly if user doesn't interact immediately
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setScene(2);
    }, 2800);

    const timer2 = setTimeout(() => {
      setScene(3);
    }, 5400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpeningDoors(true);
    onStartAudio();

    // Trigger subtle golden marigold celebratory burst
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C19A59", "#DFBD7A", "#702C35", "#E6D9C3"],
      });
    } catch {
      // ignore in environments without canvas
    }

    setTimeout(() => {
      onComplete();
    }, 1100);
  };

  const handleSkip = () => {
    onStartAudio();
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpeningDoors ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#280E13] text-[#F5EFE3] overflow-hidden select-none"
    >
      {/* Background Animated Patola Texture */}
      <div className="absolute inset-0 patola-dark-texture opacity-30 pointer-events-none" />

      {/* Radiant Golden Glow in Center */}
      <motion.div
        animate={{
          scale: scene === 3 ? [1, 1.25, 1.1] : [0.8, 1.05, 0.9],
          opacity: scene === 3 ? 0.35 : 0.2,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[340px] h-[340px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-radial from-[#C19A59]/40 via-[#702C35]/30 to-transparent blur-3xl pointer-events-none"
      />

      {/* Self-drawing delicate antique-gold outer border */}
      <svg
        className="absolute inset-4 md:inset-8 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] h-[calc(100%-2rem)] md:h-[calc(100%-4rem)] pointer-events-none"
        fill="none"
      >
        <motion.rect
          x="1"
          y="1"
          width="99.5%"
          height="99.5%"
          rx="4"
          stroke="#C19A59"
          strokeWidth="1.2"
          strokeDasharray="8 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        {/* Inner thin border */}
        <motion.rect
          x="7"
          y="7"
          width="98.5%"
          height="98.5%"
          rx="2"
          stroke="#DFBD7A"
          strokeWidth="0.6"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Corner Patola Accents */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-[#C19A59]/70 pointer-events-none">
        <PatolaMandala className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[#C19A59]/70 pointer-events-none">
        <PatolaMandala className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[#C19A59]/70 pointer-events-none">
        <PatolaMandala className="w-10 h-10 md:w-14 md:h-14" />
      </div>
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-[#C19A59]/70 pointer-events-none">
        <PatolaMandala className="w-10 h-10 md:w-14 md:h-14" />
      </div>

      {/* Top Bar: Language Switch & Skip Action */}
      <div className="absolute top-8 right-8 z-30 flex items-center gap-3">
        <button
          onClick={() => onLanguageChange(lang === "gu" ? "en" : "gu")}
          className="text-xs px-3 py-1.5 rounded-full border border-[#C19A59]/50 text-[#DFBD7A] hover:bg-[#C19A59]/20 transition-colors uppercase tracking-widest cursor-pointer"
        >
          {lang === "gu" ? "English" : "ગુજરાતી"}
        </button>
        <button
          onClick={handleSkip}
          className="text-xs px-3 py-1.5 rounded-full bg-[#702C35]/60 border border-[#C19A59]/30 text-[#E6D9C3] hover:text-[#DFBD7A] hover:border-[#C19A59] transition-all tracking-wider cursor-pointer"
        >
          {t.intro.skipBtn}
        </button>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-2xl px-6 py-8 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {/* SCENE 1: THE HERITAGE & GANESHA */}
          {scene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center space-y-5"
            >
              {/* Sacred Ganesha Motif with Halo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <SacredGanesha className="w-20 h-20 md:w-24 md:h-24 text-[#DFBD7A] filter drop-shadow-[0_0_12px_rgba(193,154,89,0.5)]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-3"
              >
                <h1 className="font-heading-gu text-2xl md:text-4xl text-[#DFBD7A] tracking-wider font-semibold">
                  {t.intro.ganeshGreeting}
                </h1>
                <p className="font-serif-en italic text-xs md:text-sm text-[#C19A59]/90 max-w-md mx-auto px-4">
                  {t.intro.subGreeting}
                </p>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C19A59] to-transparent mx-auto mt-4" />
                <p className="text-[10px] md:text-xs font-sans-en uppercase tracking-[0.25em] text-[#E6D9C3]/60 pt-2">
                  PATOLA HERITAGE • GUJARATI VIVAH
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* SCENE 2: THE INVITATION ENVELOPE / CARVED HAVELI DOORS */}
          {scene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center w-full"
            >
              {/* Carved Heritage Haveli Doors / Envelope Composition */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-lg bg-gradient-to-b from-[#3E161C] to-[#200A0E] border-2 border-[#C19A59] shadow-2xl p-4 flex flex-col items-center justify-between overflow-hidden">
                {/* Traditional Door Carving Header */}
                <div className="w-full flex items-center justify-between border-b border-[#C19A59]/40 pb-2">
                  <div className="w-3 h-3 border border-[#C19A59] rotate-45 bg-[#702C35]" />
                  <span className="text-[11px] font-heading-gu text-[#DFBD7A] tracking-widest font-medium">
                    શુભ મંગલમ્
                  </span>
                  <div className="w-3 h-3 border border-[#C19A59] rotate-45 bg-[#702C35]" />
                </div>

                {/* Left & Right Heritage Carved Door Panels */}
                <div className="relative w-full flex-1 my-3 flex items-center justify-center">
                  {/* Left Door */}
                  <motion.div
                    animate={{ rotateY: [0, -15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/2 h-full border-r border-[#C19A59]/60 bg-gradient-to-r from-[#321016] to-[#4A1B22] flex flex-col items-center justify-center p-2 relative shadow-inner"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#C19A59]/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#DFBD7A]" />
                    </div>
                    {/* Antique Brass Studs */}
                    <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-[#DFBD7A]" />
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#DFBD7A]" />
                    <span className="mt-4 text-[10px] tracking-widest text-[#E6D9C3]/70 font-serif-en">
                      {couple.bride.nameGu}
                    </span>
                  </motion.div>

                  {/* Right Door */}
                  <motion.div
                    animate={{ rotateY: [0, 15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1/2 h-full border-l border-[#C19A59]/60 bg-gradient-to-l from-[#321016] to-[#4A1B22] flex flex-col items-center justify-center p-2 relative shadow-inner"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#C19A59]/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#DFBD7A]" />
                    </div>
                    {/* Antique Brass Studs */}
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#DFBD7A]" />
                    <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-[#DFBD7A]" />
                    <span className="mt-4 text-[10px] tracking-widest text-[#E6D9C3]/70 font-serif-en">
                      {couple.groom.nameGu}
                    </span>
                  </motion.div>

                  {/* Center Golden Seal / Radiant Core */}
                  <div className="absolute z-10 w-14 h-14 rounded-full bg-[#702C35] border-2 border-[#DFBD7A] shadow-[0_0_20px_rgba(223,189,122,0.6)] flex items-center justify-center">
                    <WeddingMonogram size="sm" lang={lang} />
                  </div>
                </div>

                {/* Footer text */}
                <p className="text-[11px] font-heading-gu text-[#E6D9C3]/90 pt-1">
                  {t.intro.enterPrompt}
                </p>
              </div>

              {/* Tap button to advance immediately to reveal */}
              <button
                onClick={() => setScene(3)}
                className="mt-6 inline-flex items-center gap-2 text-xs text-[#DFBD7A] hover:text-white transition-colors cursor-pointer group"
              >
                <span>{lang === "gu" ? "આગળ વધો" : "Proceed to Reveal"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {/* SCENE 3: THE REVEAL & INVITATION CALL TO ACTION */}
          {scene === 3 && (
            <motion.div
              key="scene-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center space-y-6 w-full"
            >
              {/* Monogram */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <WeddingMonogram size="md" lang={lang} />
              </motion.div>

              {/* Couple's Names: The Visual Centrepiece */}
              <div className="space-y-2">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="space-y-1"
                >
                  <div className="text-3xl md:text-5xl font-heading-gu text-[#DFBD7A] font-bold tracking-wide drop-shadow-md">
                    {lang === "gu" ? `${couple.bride.titleGu} ${couple.bride.nameGu}` : `${couple.bride.titleEn} ${couple.bride.nameEn}`}
                  </div>
                  <div className="text-xs md:text-sm font-serif-en italic tracking-[0.3em] text-[#C19A59] uppercase py-1">
                    {t.intro.withText}
                  </div>
                  <div className="text-3xl md:text-5xl font-heading-gu text-[#DFBD7A] font-bold tracking-wide drop-shadow-md">
                    {lang === "gu" ? `${couple.groom.titleGu} ${couple.groom.nameGu}` : `${couple.groom.titleEn} ${couple.groom.nameEn}`}
                  </div>
                </motion.div>
              </div>

              {/* Wedding Date */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-3 text-xs md:text-sm tracking-widest text-[#E6D9C3] font-sans-en uppercase"
              >
                <span className="w-8 h-[1px] bg-[#C19A59]/60" />
                <span className="font-semibold text-[#DFBD7A]">
                  {lang === "gu" ? event.dateFormattedGu : event.dateFormattedEn}
                </span>
                <span className="w-8 h-[1px] bg-[#C19A59]/60" />
              </motion.div>

              {/* Two Families Quote */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="text-xs md:text-sm font-serif-en italic text-[#E6D9C3]/80 max-w-md px-4 leading-relaxed"
              >
                &ldquo;{t.intro.twoFamiliesQuote}&rdquo;
              </motion.p>

              {/* OPEN WEDDING INVITATION Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="pt-3"
              >
                <button
                  onClick={handleOpenInvitation}
                  disabled={isOpeningDoors}
                  className="luxury-btn relative group px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#C19A59] via-[#DFBD7A] to-[#C19A59] text-[#280E13] font-medium tracking-widest text-xs md:text-sm uppercase shadow-[0_4px_25px_rgba(193,154,89,0.45)] hover:shadow-[0_6px_35px_rgba(223,189,122,0.6)] active:scale-95 transition-all cursor-pointer flex items-center gap-3 font-sans-en font-bold"
                >
                  <Sparkles className="w-4 h-4 text-[#702C35] animate-spin" style={{ animationDuration: "6s" }} />
                  <span>{t.intro.openInvitationBtn}</span>
                  <ArrowRight className="w-4 h-4 text-[#702C35] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Door Opening Transition Curtain */}
      {isOpeningDoors && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-[#F5EFE3] z-40 pointer-events-none"
        />
      )}
    </motion.div>
  );
};
