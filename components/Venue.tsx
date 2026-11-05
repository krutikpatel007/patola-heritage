"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import { PatolaBorderStrip, HaveliArch } from "./PatolaPatterns";
import { MapPin, Navigation, Copy, Check, Car, Sparkles, Compass } from "lucide-react";

interface VenueProps {
  lang: Language;
}

export const Venue: React.FC<VenueProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { venue } = WEDDING_CONFIG;
  const [copied, setCopied] = useState(false);

  const fullAddress = `${venue.nameEn}, ${venue.landmarkEn}, ${venue.cityEn}, ${venue.stateEn}`;
  const fullAddressGu = `${venue.nameGu}, ${venue.landmarkGu}, ${venue.cityGu}, ${venue.stateGu}`;

  const handleCopyAddress = () => {
    const textToCopy = lang === "gu" ? fullAddressGu : fullAddress;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleGetDirections = () => {
    window.open(venue.googleMapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="venue"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#F5EFE3] overflow-hidden patola-texture"
    >
      {/* Decorative Ribbon */}
      <div className="w-full max-w-4xl mx-auto mb-12 opacity-35">
        <PatolaBorderStrip />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#C19A59] font-semibold">
            {t.venue.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#702C35] mt-1 tracking-tight">
            {t.venue.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#243E35] mt-2">
            {t.venue.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#C19A59] mx-auto mt-4" />
        </motion.div>

        {/* Venue Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Venue Editorial Card & Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#FAF6EE] border-2 border-[#C19A59]/40 p-6 sm:p-8 shadow-[0_10px_35px_rgba(112,44,53,0.06)] relative"
          >
            <div className="patola-corner-tl" />
            <div className="patola-corner-tr" />
            <div className="patola-corner-bl" />
            <div className="patola-corner-br" />

            <div>
              {/* Haveli Arch Top */}
              <HaveliArch>
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-sans-en text-[#C19A59] font-semibold">
                    {lang === "gu" ? "મંગલ પરિસર" : "Celebration Campus"}
                  </span>
                  <h3 className="font-heading-gu text-2xl sm:text-3xl font-bold text-[#702C35] mt-1">
                    {lang === "gu" ? venue.nameGu : venue.nameEn}
                  </h3>
                </div>
              </HaveliArch>

              {/* Address display */}
              <div className="my-6 p-4 rounded-xl bg-[#F5EFE3] border border-[#C19A59]/25">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C19A59] shrink-0 mt-0.5" />
                  <p className="font-sans-en text-sm text-[#2C2623] leading-relaxed">
                    {lang === "gu" ? fullAddressGu : fullAddress}
                  </p>
                </div>
              </div>

              {/* Venue Features */}
              <div className="space-y-3 my-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#243E35]">
                  <Sparkles className="w-4 h-4 text-[#C19A59] shrink-0" />
                  <span>{t.venue.campusNote}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#243E35]">
                  <Compass className="w-4 h-4 text-[#C19A59] shrink-0" />
                  <span>{t.venue.atmosphereNote}</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#243E35]">
                  <Car className="w-4 h-4 text-[#C19A59] shrink-0" />
                  <span>{t.venue.parkingNote}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#C19A59]/30">
              <button
                onClick={handleGetDirections}
                className="luxury-btn w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#702C35] text-[#DFBD7A] hover:bg-[#8A3742] transition-colors text-xs font-semibold tracking-wider uppercase shadow-md cursor-pointer font-sans-en"
              >
                <Navigation className="w-4 h-4 text-[#DFBD7A]" />
                <span>{t.venue.directionsBtn}</span>
              </button>

              <button
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF6EE] border border-[#C19A59] text-[#702C35] hover:bg-[#C19A59]/15 transition-colors text-xs font-semibold tracking-wider uppercase cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">{t.venue.copiedNotice}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C19A59]" />
                    <span>{t.venue.copyAddressBtn}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed & Architectural Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border-2 border-[#C19A59]/40 bg-[#FAF6EE] shadow-[0_10px_35px_rgba(112,44,53,0.06)] min-h-[400px]"
          >
            {/* Architectural Banner Header */}
            <div className="bg-[#280E13] text-[#DFBD7A] px-6 py-3 border-b border-[#C19A59] flex items-center justify-between">
              <span className="text-[11px] font-sans-en uppercase tracking-widest font-semibold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C19A59]" />
                Google Maps Navigation
              </span>
              <span className="text-[10px] text-[#E6D9C3]/70 font-sans-en">
                Ahmedabad, Gujarat
              </span>
            </div>

            {/* Google Maps Embed iframe */}
            <div className="relative w-full flex-1 min-h-[360px] bg-[#E6D9C3]/30">
              <iframe
                title="Vishv Umiyadham Location Map"
                src={`https://maps.google.com/maps?q=Vishv+Umiyadham,+Jaspur,+Ahmedabad,+Gujarat&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
              />

              {/* Floating Quick Action Overlay on Map */}
              <div className="absolute bottom-4 right-4 z-10">
                <button
                  onClick={handleGetDirections}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#702C35]/95 text-[#DFBD7A] border border-[#C19A59] text-xs font-semibold shadow-lg hover:scale-105 transition-all cursor-pointer backdrop-blur-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in App</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
