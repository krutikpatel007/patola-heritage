# PATOLA HERITAGE (પાટોળા હેરિટેજ)
### A Cinematic Gujarati Wedding Invitation Website

> **"Where Gujarati Traditions Meet Modern Elegance."**  
> *પરંપરાની સુંદરતા, પ્રેમની નવી શરૂઆત.*

---

## 🌸 Overview

**PATOLA HERITAGE** is a bespoke, cinematic, mobile-first Gujarati digital wedding invitation crafted for **ચિ. હર્ષની (Chi. Harshni)** and **ચિ. ડેનિશ (Chi. Denish)** celebrating their sacred union at **Vishv Umiyadham, Ahmedabad, Gujarat** on **26 November 2026**.

The design embodies:
- **70% Contemporary Luxury**: Clean editorial typography, generous whitespace, smooth cinematic reveals, and responsive interactions.
- **20% Gujarati Heritage**: Authentic geometric Patan Patola double-ikat motifs (*Nari Kunjar*, *Chhabdi Bhat*, *Popat*), Haveli carved arch frameworks (*Jharokhas*), and Gujarati *Torans*.
- **10% Traditional Wedding Symbolism**: Auspicious Lord Ganesha line art (*॥ શ્રી ગણેશાય નમઃ ॥*), sacred *Kalash*, *Shriphal*, Vedic Shlokas, and traditional Hastamelap symbolism.

---

## 🎨 Design System & Palette

| Element | Color Name | Hex Code | Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Background** | Ivory Silk | `#F5EFE3` | Primary body background & editorial warmth |
| **Primary Accent** | Patola Wine | `#702C35` | Signature royal textile accent & titles |
| **Secondary Accent** | Heritage Green | `#243E35` | Auspicious mango leaves (*Asopalav*) & contrast |
| **Metallic Accent** | Antique Gold | `#C19A59` | Delicate border lines, highlights, and icons |
| **Supporting Dark** | Deep Wine | `#280E13` | Cinematic intro & evening celebration sections |
| **Supporting Base** | Warm Sand | `#E6D9C3` | Secondary text, badges & borders |

---

## 🖋️ Typography

- **English Headings**: *Cormorant Garamond* (Editorial, romantic serif)
- **English Body**: *Manrope* (Clean, highly legible geometric sans)
- **Gujarati Headings**: *Noto Serif Gujarati* (Authentic, regal traditional glyphs)
- **Gujarati Body**: *Noto Sans Gujarati* (Crisp, mobile-optimized readability)

---

## 🎬 Cinematic Opening Experience (3 Scenes)

1. **Scene 1 – The Heritage**: Full-screen Patola wine canvas, animated self-drawing antique gold borders, radiant Ganesha emblem with the sacred invocation:
   > ॥ શ્રી ગણેશાય નમઃ ॥
2. **Scene 2 – The Invitation**: Carved Haveli doors / royal Gujarati envelope with 3D perspective opening, revealing warm golden radiant light.
3. **Scene 3 – The Reveal**: Unveils the couple's monogram and names:
   > **ચિ. હર્ષની WITH ચિ. ડેનિશ**  
   > *26 November 2026*  
   > "Two Families. One Celebration. A Lifetime of Togetherness."  
   > Prominent **"OPEN WEDDING INVITATION"** button with gold shimmer and celebratory marigold burst.

*Visitors can also click "Skip Intro" at any time for direct access.*

---

## 🗺️ Website Sections

1. **Hero**: Full-screen centerpiece showcasing couple names, auspicious Ganesha greeting, date, time, venue badges, "Add to Calendar" `.ics` generator, and smooth scroll indicator.
2. **Section 01 – Shubh Lagna (શુભ લગ્ન)**: Royal stationery invitation card framed by Haveli cusped arches, featuring the sacred Vishnu Shloka and heartfelt Gujarati & English family blessings.
3. **Section 02 – Wedding Celebration (વિવાહ મહોત્સવ)**: Dedicated, clutter-free schedule for the single confirmed ceremony on Thursday, 26 November 2026 at 3:00 PM.
4. **Section 03 – Venue (શુભ સ્થળ)**: Vishv Umiyadham, Ahmedabad with integrated Google Maps embed, one-touch "Get Directions" navigation button, and clipboard address copy.
5. **Section 04 – Countdown (સમયગણના)**: Real-time countdown clock in Indian Standard Time (IST) showing Days, Hours, Minutes, and Seconds with dual English/Gujarati numeral representation.
6. **Section 05 – RSVP (હાજરી નોંધ)**: Functional RSVP form capturing Guest Name, Mobile Number, Attendance confirmation, Number of Guests, and Personal Blessings with direct WhatsApp messaging.
7. **Section 06 – Closing (પરંપરા • પ્રેમ • પરિવાર)**: Signature Patola closing motif, family signoff, and return-to-top button.

---

## 🎶 Ambient Audio Experience

- Built with a dual-mode audio engine:
  1. **Acoustic Web Audio API Synthesizer**: Generates a serene Indian wedding Tanpura drone and resonant Shehnai/Santoor melodic notes based on traditional auspicious scales (*Raga Bilawal / Yaman*). Works anywhere without downloading heavy audio files.
  2. **Custom Audio File Support**: Simply place an MP3 file at `public/music/wedding-shehnai.mp3`, and the player will seamlessly prioritize it!
- Floating music control with animated soundwave EQ bars.
- Strictly adheres to browser standards: sound only plays following explicit user interaction ("Open Wedding Invitation" or sound toggle click).

---

## 🌐 Central Configuration

All wedding details and bilingual translations are centralized:
- `config/wedding.ts`: Couple names, titles, ceremony date, time, venue address, GPS coordinates, and host WhatsApp number.
- `config/translations.ts`: All bilingual strings for Gujarati (`gu`) and English (`en`).

---

## 💾 Connecting a Database to RSVP

Currently, the RSVP form:
1. Validates guest inputs.
2. Formats a structured RSVP confirmation message and launches **WhatsApp** directly to the host's number (`config/wedding.ts`).
3. Saves a backup copy in the guest's browser `localStorage`.

### To connect a backend database (e.g. Supabase, Firebase, or Google Sheets):
1. Create a Next.js API route at `app/api/rsvp/route.ts`:
   ```ts
   import { NextResponse } from "next/server";

   export async function POST(req: Request) {
     const body = await req.json();
     // Insert into Supabase / PostgreSQL / Google Sheets API here
     return NextResponse.json({ success: true, data: body });
   }
   ```
2. In `components/RSVP.tsx`, uncomment or add the `fetch("/api/rsvp", { method: "POST", body: JSON.stringify(formData) })` call inside `handleSubmit`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Or build for production
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
