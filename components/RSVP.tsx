"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { WEDDING_CONFIG } from "@/config/wedding";
import { TRANSLATIONS, Language } from "@/config/translations";
import { PatolaBorderStrip, HaveliArch, AuspiciousKalash } from "./PatolaPatterns";
import confetti from "canvas-confetti";
import { CheckCircle2, Send, MessageCircle, Info } from "lucide-react";

interface RSVPProps {
  lang: Language;
}

export const RSVP: React.FC<RSVPProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const { contact, couple } = WEDDING_CONFIG;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "yes", // "yes" | "no"
    guests: "2",
    message: "",
  });

  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = t.rsvp.errorName;
    }
    // Simple 10-digit check
    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = t.rsvp.errorPhone;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Format WhatsApp message
    const attendanceText =
      formData.attendance === "yes"
        ? lang === "gu"
          ? "✅ હર્ષ સાથે હાજર રહીશું (Will Attend with Pleasure)"
          : "✅ Joyfully Accept, will attend"
        : lang === "gu"
        ? "❌ દિલગીરી સાથે અસમર્થ (Unable to Attend, Blessings Sent)"
        : "❌ Regretfully decline, blessings sent";

    const waTextLines = [
      `🌺 *${lang === "gu" ? "લગ્ન નિમંત્રણ - હાજરી નોંધ (RSVP)" : "WEDDING RSVP - PATOLA HERITAGE"}* 🌺`,
      `*${lang === "gu" ? "નવદંપતી" : "Couple"}*: ${couple.bride.nameGu} & ${couple.groom.nameGu}`,
      `----------------------------------------`,
      `• *${lang === "gu" ? "મહેમાનનું નામ" : "Guest Name"}*: ${formData.name}`,
      `• *${lang === "gu" ? "મોબાઇલ" : "Mobile"}*: ${formData.phone}`,
      `• *${lang === "gu" ? "ઉપસ્થિતિ" : "Attendance"}*: ${attendanceText}`,
      `• *${lang === "gu" ? "મહેમાનોની સંખ્યા" : "Guests Count"}*: ${formData.guests}`,
      formData.message.trim() ? `• *${lang === "gu" ? "આશીર્વાદ / સંદેશ" : "Blessings/Message"}*: ${formData.message.trim()}` : "",
      `----------------------------------------`,
      `_Sent via Patola Heritage Wedding Invitation Website_`,
    ].filter(Boolean);

    const fullWaText = waTextLines.join("\n");
    const waUrl = `https://wa.me/${contact.rsvpPhone}?text=${encodeURIComponent(fullWaText)}`;

    // Store in localStorage for persistence
    try {
      localStorage.setItem("patola_wedding_rsvp", JSON.stringify({ ...formData, timestamp: new Date().toISOString() }));
    } catch {
      // localStorage unavailable
    }

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.7 },
        colors: ["#C19A59", "#702C35", "#243E35", "#DFBD7A"],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Open WhatsApp directly
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 700);
  };

  return (
    <section
      id="rsvp"
      className="relative py-24 md:py-32 px-4 sm:px-6 bg-[#F5EFE3] overflow-hidden patola-texture"
    >
      {/* Decorative Ribbon */}
      <div className="w-full max-w-4xl mx-auto mb-12 opacity-35">
        <PatolaBorderStrip />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-sans-en text-[#C19A59] font-semibold">
            {t.rsvp.sectionNum}
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading-gu font-bold text-[#702C35] mt-1 tracking-tight">
            {t.rsvp.title}
          </h2>
          <p className="font-serif-en italic text-xs sm:text-sm text-[#243E35] mt-2">
            {t.rsvp.subtitle}
          </p>
          <div className="w-20 h-[1.5px] bg-[#C19A59] mx-auto mt-4" />
        </motion.div>

        {/* RSVP Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FAF6EE] rounded-3xl border-2 border-[#C19A59]/40 p-6 sm:p-10 md:p-12 shadow-[0_15px_45px_rgba(112,44,53,0.06)]"
        >
          {/* Subtle Corner Accents */}
          <div className="patola-corner-tl" />
          <div className="patola-corner-tr" />
          <div className="patola-corner-bl" />
          <div className="patola-corner-br" />

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#243E35]/10 border-2 border-[#243E35] flex items-center justify-center mx-auto text-[#243E35]">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-heading-gu text-2xl sm:text-3xl font-bold text-[#702C35]">
                {lang === "gu" ? "આપનો ખૂબ ખૂબ આભાર!" : "Thank You Sincerely!"}
              </h3>
              <p className="font-sans-en text-sm text-[#2C2623]/80 max-w-md mx-auto leading-relaxed">
                {lang === "gu"
                  ? "આપની હાજરી નોંધણી વૉટ્સએપ દ્વારા સફળતાપૂર્વક તૈયાર કરવામાં આવી છે. પરિવાર આપના આગમનની આતુરતાપૂર્વક રાહ જુએ છે."
                  : "Your RSVP message has been formatted and opened in WhatsApp. The family is delighted and eagerly looks forward to welcoming you."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-[#C19A59] text-xs font-semibold text-[#702C35] hover:bg-[#702C35] hover:text-[#DFBD7A] transition-colors"
              >
                {lang === "gu" ? "બીજી નોંધણી કરો" : "Submit Another RSVP"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#702C35] mb-2 font-sans-en">
                  {t.rsvp.fullName} <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t.rsvp.namePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFE3] border border-[#C19A59]/40 focus:border-[#702C35] focus:outline-none focus:ring-1 focus:ring-[#702C35] text-sm text-[#2C2623] transition-colors"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#702C35] mb-2 font-sans-en">
                  {t.rsvp.mobile} <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.rsvp.mobilePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFE3] border border-[#C19A59]/40 focus:border-[#702C35] focus:outline-none focus:ring-1 focus:ring-[#702C35] text-sm text-[#2C2623] transition-colors"
                />
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Attendance Radio */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#702C35] mb-2 font-sans-en">
                  {t.rsvp.attendance}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === "yes"
                        ? "bg-[#702C35] text-[#DFBD7A] border-[#702C35] shadow-sm"
                        : "bg-[#F5EFE3] text-[#2C2623] border-[#C19A59]/30 hover:border-[#C19A59]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === "yes"}
                      onChange={() => setFormData({ ...formData, attendance: "yes" })}
                      className="accent-[#DFBD7A]"
                    />
                    <span className="text-xs font-medium">{t.rsvp.attendingYes}</span>
                  </label>

                  <label
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      formData.attendance === "no"
                        ? "bg-[#702C35] text-[#DFBD7A] border-[#702C35] shadow-sm"
                        : "bg-[#F5EFE3] text-[#2C2623] border-[#C19A59]/30 hover:border-[#C19A59]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === "no"}
                      onChange={() => setFormData({ ...formData, attendance: "no" })}
                      className="accent-[#DFBD7A]"
                    />
                    <span className="text-xs font-medium">{t.rsvp.attendingNo}</span>
                  </label>
                </div>
              </div>

              {/* Guest Count */}
              {formData.attendance === "yes" && (
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#702C35] mb-2 font-sans-en">
                    {t.rsvp.guestsCount}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5EFE3] border border-[#C19A59]/40 focus:border-[#702C35] focus:outline-none focus:ring-1 focus:ring-[#702C35] text-sm text-[#2C2623] transition-colors"
                  >
                    <option value="1">{t.rsvp.guestOptions[1]}</option>
                    <option value="2">{t.rsvp.guestOptions[2]}</option>
                    <option value="3">{t.rsvp.guestOptions[3]}</option>
                    <option value="4">{t.rsvp.guestOptions[4]}</option>
                    <option value="5+">{t.rsvp.guestOptions[5]}</option>
                  </select>
                </div>
              )}

              {/* Personal Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#702C35] mb-2 font-sans-en">
                  {t.rsvp.personalMessage}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.rsvp.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5EFE3] border border-[#C19A59]/40 focus:border-[#702C35] focus:outline-none focus:ring-1 focus:ring-[#702C35] text-sm text-[#2C2623] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-btn w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#702C35] via-[#8A3742] to-[#702C35] text-[#DFBD7A] hover:shadow-lg transition-all text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer shadow-md font-sans-en"
              >
                <MessageCircle className="w-4 h-4 text-[#DFBD7A]" />
                <span>{isSubmitting ? t.rsvp.submitting : t.rsvp.submitBtn}</span>
              </button>

              {/* Clear Architecture & Storage Transparency Note */}
              <div className="pt-3 border-t border-[#C19A59]/20 flex items-start gap-2 text-[11px] text-[#6B5E55] leading-relaxed">
                <Info className="w-4 h-4 text-[#C19A59] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#702C35]">{t.rsvp.storageNote}</strong> {t.rsvp.directNote}
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
