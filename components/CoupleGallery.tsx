"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TRANSLATIONS, Language } from "@/config/translations";
import { PatolaBorderStrip, WeddingMonogram } from "./PatolaPatterns";
import { X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react";
import Image from "next/image";

interface CoupleGalleryProps {
  lang: Language;
}

const GALLERY_PHOTOS = [
  {
    id: 1,
    src: "/images/couple/photo-1.jpg",
    alt: "Harshini & Denis",
    aspect: "portrait",
    span: "col-span-1 md:col-span-1",
  },
  {
    id: 2,
    src: "/images/couple/photo-2.jpg",
    alt: "Harshini & Denis Moments",
    aspect: "portrait",
    span: "col-span-1 md:col-span-1",
  },
  {
    id: 3,
    src: "/images/couple/photo-3.jpg",
    alt: "Harshini & Denis Celebration",
    aspect: "portrait",
    span: "col-span-1 md:col-span-1",
  },
  {
    id: 4,
    src: "/images/couple/photo-4.jpg",
    alt: "Harshini & Denis Romantic Landscape",
    aspect: "landscape",
    span: "col-span-1 sm:col-span-2 md:col-span-3",
  },
  {
    id: 5,
    src: "/images/couple/photo-5.jpg",
    alt: "Harshini & Denis Joyful Smiles",
    aspect: "portrait",
    span: "col-span-1 sm:col-span-1 md:col-span-1",
  },
  {
    id: 6,
    src: "/images/couple/photo-6.jpg",
    alt: "Harshini & Denis Together",
    aspect: "portrait",
    span: "col-span-1 sm:col-span-1 md:col-span-2",
  },
];

export const CoupleGallery: React.FC<CoupleGalleryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev ?? 0) + 1) % GALLERY_PHOTOS.length);
  }, [selectedIdx]);

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) =>
      (prev ?? 0) === 0 ? GALLERY_PHOTOS.length - 1 : (prev ?? 0) - 1
    );
  }, [selectedIdx]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handleNext, handlePrev]);

  return (
    <section
      id="gallery"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#FAF6EE] overflow-hidden patola-texture"
    >
      {/* Decorative Ribbon */}
      <div className="w-full max-w-4xl mx-auto mb-12 opacity-35">
        <PatolaBorderStrip />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#C19A59] font-semibold">
            {t.gallery.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#702C35] mt-1 tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#243E35] mt-2">
            {t.gallery.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#C19A59] mx-auto mt-4" />
        </motion.div>

        {/* Curated Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-[#F5EFE3] border-2 border-[#C19A59]/40 shadow-[0_10px_30px_rgba(112,44,53,0.08)] hover:border-[#C19A59] hover:shadow-[0_15px_40px_rgba(112,44,53,0.18)] transition-all duration-500 ${photo.span}`}
              onClick={() => setSelectedIdx(index)}
            >
              {/* Image Container */}
              <div
                className={`relative w-full overflow-hidden ${
                  photo.aspect === "landscape"
                    ? "aspect-[16/9] md:aspect-[21/9]"
                    : "aspect-[4/5] sm:aspect-[3/4]"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200A0E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner Patola Accents */}
                <div className="patola-corner-tl opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="patola-corner-tr opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="patola-corner-bl opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="patola-corner-br opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Hover Reveal Card Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between text-[#DFBD7A]">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#DFBD7A]" />
                      <span className="text-xs uppercase tracking-widest font-sans-en font-medium">
                        Harshini & Denis
                      </span>
                    </div>
                    <div className="p-2 rounded-full bg-[#702C35]/80 border border-[#C19A59]">
                      <Maximize2 className="w-3.5 h-3.5 text-[#DFBD7A]" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#200A0E]/95 backdrop-blur-md p-4 select-none"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#702C35] text-[#DFBD7A] border border-[#C19A59] hover:bg-[#8A3742] transition-colors cursor-pointer"
              title={t.gallery.close}
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#702C35]/90 text-[#DFBD7A] border border-[#C19A59] hover:bg-[#8A3742] transition-all cursor-pointer shadow-lg"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#702C35]/90 text-[#DFBD7A] border border-[#C19A59] hover:bg-[#8A3742] transition-all cursor-pointer shadow-lg"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image Stage */}
            <motion.div
              key={selectedIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[#C19A59] shadow-2xl p-2 bg-[#280E13]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_PHOTOS[selectedIdx].src}
                alt={GALLERY_PHOTOS[selectedIdx].alt}
                className="max-w-full max-h-[78vh] object-contain mx-auto rounded-lg"
              />

              {/* Bottom Caption bar */}
              <div className="flex items-center justify-between px-4 py-2 mt-1 text-[#DFBD7A] text-xs font-sans-en">
                <span>Harshini & Denis • {lang === "gu" ? "મધુર પળો" : "Cherished Moments"}</span>
                <span className="text-[#C19A59]/80 font-mono">
                  {selectedIdx + 1} / {GALLERY_PHOTOS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
