import React from "react";

interface PatternProps {
  className?: string;
  color?: string;
  size?: number | string;
}

/**
 * Lord Ganesha - Elegant Minimalist Gold Sacred Line Art
 */
export const SacredGanesha: React.FC<PatternProps> = ({
  className = "w-16 h-16 text-[#C19A59]",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Lord Ganesha Motif"
  >
    {/* Halo ring */}
    <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
    <circle cx="50" cy="50" r="41" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
    
    {/* Crown / Mukut */}
    <path
      d="M40 22 L50 14 L60 22 L55 28 L45 28 Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="20" r="1.5" fill="currentColor" />

    {/* Tilak */}
    <path d="M48 30 H52 V36 H48 Z" fill="currentColor" />
    <path d="M45 32 Q50 35 55 32" stroke="currentColor" strokeWidth="1" />

    {/* Ears */}
    {/* Left ear */}
    <path
      d="M42 34 C30 32 25 42 32 50 C36 54 40 54 42 52"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Right ear */}
    <path
      d="M58 34 C70 32 75 42 68 50 C64 54 60 54 58 52"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Trunk (Sondh) turning right (auspicious Valampuri style) */}
    <path
      d="M46 38 C46 48 45 58 50 64 C53 68 59 69 62 65 C64 62 62 57 58 58 C55 58 55 61 57 62"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    {/* Tusk */}
    <path d="M43 49 L39 49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

    {/* Modak in hand */}
    <circle cx="68" cy="58" r="2.5" fill="currentColor" />

    {/* Base petals */}
    <path
      d="M34 76 C42 72 46 76 50 78 C54 76 58 72 66 76"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Patola Chhabdi Bhat (Stepped Floral Ikat Diamond Mandala)
 */
export const PatolaMandala: React.FC<PatternProps> = ({
  className = "w-24 h-24 text-[#C19A59]",
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Patola Geometric Mandala"
  >
    {/* Outer diamond */}
    <rect
      x="60"
      y="12"
      width="68"
      height="68"
      transform="rotate(45 60 12)"
      stroke="currentColor"
      strokeWidth="1.2"
      opacity="0.85"
    />
    <rect
      x="60"
      y="18"
      width="59.5"
      height="59.5"
      transform="rotate(45 60 18)"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
      opacity="0.6"
    />

    {/* Inner stepped diamond */}
    <rect
      x="60"
      y="28"
      width="45"
      height="45"
      transform="rotate(45 60 28)"
      stroke="currentColor"
      strokeWidth="1.2"
    />

    {/* Center 8-petal Patola rosette */}
    <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="3" fill="currentColor" />

    {/* North, South, East, West floral petals */}
    <path d="M60 42 L64 52 L60 54 L56 52 Z" fill="currentColor" opacity="0.9" />
    <path d="M60 78 L64 68 L60 66 L56 68 Z" fill="currentColor" opacity="0.9" />
    <path d="M42 60 L52 64 L54 60 L52 56 Z" fill="currentColor" opacity="0.9" />
    <path d="M78 60 L68 64 L66 60 L68 56 Z" fill="currentColor" opacity="0.9" />

    {/* Diagonal stepped cross elements */}
    <circle cx="42" cy="42" r="2.5" fill="currentColor" />
    <circle cx="78" cy="42" r="2.5" fill="currentColor" />
    <circle cx="42" cy="78" r="2.5" fill="currentColor" />
    <circle cx="78" cy="78" r="2.5" fill="currentColor" />

    {/* Stepped corner accents */}
    <path d="M12 60 L24 60 M60 12 L60 24 M108 60 L96 60 M60 108 L60 96" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/**
 * Patola Kunjar (Auspicious Royal Elephant) Geometric Ikat Motif
 */
export const PatolaElephant: React.FC<PatternProps> = ({
  className = "w-16 h-16 text-[#C19A59]",
}) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Patola Kunjar Motif"
  >
    {/* Body - geometric stepped silhouette typical of Patola ikat */}
    <path
      d="M24 55 V35 H32 V26 H46 V22 H62 V26 H70 V32 H76 V42 H82 V36 H86 V52 H80 V48 H76 V64 H68 V52 H60 V64 H52 V52 H40 V64 H32 V52 H24 Z"
      fill="currentColor"
      opacity="0.88"
    />
    {/* Raised trunk detail */}
    <path
      d="M82 36 V24 H76 V28"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <rect x="73" y="24" width="4" height="4" fill="currentColor" />
    {/* Eye */}
    <circle cx="66" cy="30" r="1.5" fill="#F5EFE3" />
    {/* Royal Howdah / Saddle geometric ornamentation */}
    <rect x="42" y="28" width="16" height="12" fill="#F5EFE3" opacity="0.8" />
    <rect x="46" y="32" width="8" height="4" fill="currentColor" />
    {/* Tusk */}
    <path d="M72 40 L78 40" stroke="#F5EFE3" strokeWidth="1.5" />
  </svg>
);

/**
 * Patola Popat (Auspicious Royal Parrot) Geometric Ikat Motif
 */
export const PatolaParrot: React.FC<PatternProps> = ({
  className = "w-14 h-14 text-[#C19A59]",
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Patola Popat Motif"
  >
    {/* Beak & Head */}
    <path
      d="M48 24 L56 28 L48 32 Z"
      fill="currentColor"
    />
    <rect x="40" y="24" width="10" height="10" fill="currentColor" />
    {/* Eye */}
    <circle cx="44" cy="27" r="1.2" fill="#F5EFE3" />
    {/* Body */}
    <path
      d="M34 32 H48 V46 H40 V54 H32 V44 H26 V36 H34 Z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Tail feathers stepped */}
    <path
      d="M26 44 L16 56 H22 L30 48 Z"
      fill="currentColor"
      opacity="0.8"
    />
    {/* Perch branch */}
    <line x1="20" y1="58" x2="52" y2="58" stroke="currentColor" strokeWidth="2" />
    <circle cx="48" cy="58" r="2" fill="currentColor" />
  </svg>
);

/**
 * Patola Traditional Border Strip (Repeatable Ikat Ribbon)
 */
export const PatolaBorderStrip: React.FC<{
  className?: string;
  variant?: "horizontal" | "vertical";
}> = ({ className = "w-full h-6 text-[#C19A59]", variant = "horizontal" }) => {
  return (
    <div
      className={`overflow-hidden select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 800 24"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="patolaBorderPat"
          width="48"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          {/* Top line */}
          <line x1="0" y1="2" x2="48" y2="2" stroke="currentColor" strokeWidth="1" opacity="0.6" />
          <line x1="0" y1="4" x2="48" y2="4" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

          {/* Stepped chevron teeth */}
          <polygon points="0,6 6,12 12,6 18,12 24,6 30,12 36,6 42,12 48,6 48,9 42,15 36,9 30,15 24,9 18,15 12,9 6,15 0,9" fill="currentColor" opacity="0.4" />

          {/* Center stepped diamond */}
          <rect x="24" y="6" width="10" height="10" transform="rotate(45 24 6)" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="24" cy="12" r="1.5" fill="currentColor" />
          <circle cx="0" cy="12" r="1.5" fill="currentColor" />
          <circle cx="48" cy="12" r="1.5" fill="currentColor" />

          {/* Bottom line */}
          <line x1="0" y1="20" x2="48" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="0" y1="22" x2="48" y2="22" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </pattern>
        <rect width="100%" height="24" fill="url(#patolaBorderPat)" />
      </svg>
    </div>
  );
};

/**
 * Traditional Gujarati Toran (Marigold and Mango Leaf Eaves with Brass Bells)
 */
export const GujaratiToran: React.FC<{ className?: string }> = ({
  className = "w-full h-12 text-[#C19A59]",
}) => (
  <div className={`overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
    <svg
      className="w-full h-full"
      viewBox="0 0 1000 48"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern id="toranPattern" width="100" height="48" patternUnits="userSpaceOnUse">
        {/* Main rope */}
        <line x1="0" y1="4" x2="100" y2="4" stroke="#C19A59" strokeWidth="2.5" />
        <line x1="0" y1="7" x2="100" y2="7" stroke="#702C35" strokeWidth="1" strokeDasharray="4 2" />

        {/* Mango Leaf / Asopalav shape */}
        <path
          d="M20 7 C20 22 28 32 30 36 C32 32 40 22 40 7 Z"
          fill="#243E35"
          opacity="0.85"
        />
        <path d="M30 7 V35" stroke="#C19A59" strokeWidth="0.8" opacity="0.6" />

        {/* Second Leaf */}
        <path
          d="M60 7 C60 22 68 32 70 36 C72 32 80 22 80 7 Z"
          fill="#243E35"
          opacity="0.85"
        />
        <path d="M70 7 V35" stroke="#C19A59" strokeWidth="0.8" opacity="0.6" />

        {/* Marigold / Genda Flower (Antique Gold / Saffron) */}
        <circle cx="50" cy="14" r="6" fill="#C19A59" />
        <circle cx="50" cy="14" r="3" fill="#702C35" />

        {/* Brass Ghunghroo / Bell hanging */}
        <line x1="50" y1="20" x2="50" y2="38" stroke="#C19A59" strokeWidth="1" />
        <path d="M47 38 C47 43 53 43 53 38 Z" fill="#DFBD7A" stroke="#8F6E36" strokeWidth="0.5" />
        <circle cx="50" cy="44" r="1.5" fill="#8F6E36" />

        <circle cx="100" cy="14" r="6" fill="#C19A59" />
        <circle cx="0" cy="14" r="6" fill="#C19A59" />
      </pattern>
      <rect width="100%" height="48" fill="url(#toranPattern)" />
    </svg>
  </div>
);

/**
 * Auspicious Kalash Motif with Coconut and Mango Leaves
 */
export const AuspiciousKalash: React.FC<PatternProps> = ({
  className = "w-16 h-16 text-[#C19A59]",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Auspicious Kalash"
  >
    {/* Base ring */}
    <rect x="36" y="86" width="28" height="4" rx="2" fill="currentColor" />
    <line x1="38" y1="84" x2="62" y2="84" stroke="currentColor" strokeWidth="1.5" />

    {/* Pot (Ghata) */}
    <path
      d="M34 84 C30 76 26 62 34 52 C38 47 44 46 44 44 H56 C56 46 62 47 66 52 C74 62 70 76 66 84 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.08"
    />

    {/* Swastika / Auspicious symbol on pot */}
    <g transform="translate(50,66) scale(0.6)" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
      <line x1="-12" y1="0" x2="12" y2="0" />
      <line x1="0" y1="-12" x2="0" y2="12" />
      <line x1="12" y1="0" x2="12" y2="8" />
      <line x1="-12" y1="0" x2="-12" y2="-8" />
      <line x1="0" y1="12" x2="-8" y2="12" />
      <line x1="0" y1="-12" x2="8" y2="-12" />
      <circle cx="-5" cy="-5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="-5" r="1.5" fill="currentColor" />
      <circle cx="-5" cy="5" r="1.5" fill="currentColor" />
      <circle cx="5" cy="5" r="1.5" fill="currentColor" />
    </g>

    {/* Pot rim */}
    <rect x="40" y="42" width="20" height="4" rx="1" fill="currentColor" />

    {/* Mango Leaves emerging from pot */}
    <path d="M42 42 C36 32 30 24 24 22 C30 28 38 34 44 42" stroke="#243E35" strokeWidth="2" fill="#243E35" fillOpacity="0.6" />
    <path d="M58 42 C64 32 70 24 76 22 C70 28 62 34 56 42" stroke="#243E35" strokeWidth="2" fill="#243E35" fillOpacity="0.6" />
    <path d="M46 42 C44 28 42 18 38 14 C44 20 47 28 48 42" stroke="#243E35" strokeWidth="2" fill="#243E35" fillOpacity="0.6" />
    <path d="M54 42 C56 28 58 18 62 14 C56 20 53 28 52 42" stroke="#243E35" strokeWidth="2" fill="#243E35" fillOpacity="0.6" />

    {/* Coconut (Shriphal) on top */}
    <path
      d="M44 40 C44 32 46 22 50 18 C54 22 56 32 56 40 Z"
      fill="#C19A59"
      stroke="#8F6E36"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Bespoke Wedding Monogram: Harshni & Denish (હ & ડ / H & D)
 */
export const WeddingMonogram: React.FC<{
  className?: string;
  size?: "sm" | "md" | "lg";
  lang?: "gu" | "en";
}> = ({ className = "", size = "md", lang = "gu" }) => {
  const dims = size === "sm" ? "w-16 h-16" : size === "lg" ? "w-36 h-36 md:w-44 md:h-44" : "w-24 h-24 md:w-28 md:h-28";

  return (
    <div
      className={`relative flex items-center justify-center select-none ${dims} ${className}`}
      aria-label="Harshni and Denish Wedding Monogram"
    >
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full text-[#C19A59]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer decorative octagonal diamond frame */}
        <rect
          x="80"
          y="15"
          width="92"
          height="92"
          transform="rotate(45 80 15)"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.8"
        />
        <rect
          x="80"
          y="23"
          width="80.6"
          height="80.6"
          transform="rotate(45 80 23)"
          stroke="#702C35"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Corner florets */}
        <circle cx="80" cy="15" r="3" fill="currentColor" />
        <circle cx="145" cy="80" r="3" fill="currentColor" />
        <circle cx="80" cy="145" r="3" fill="currentColor" />
        <circle cx="15" cy="80" r="3" fill="currentColor" />

        {/* Center circle */}
        <circle cx="80" cy="80" r="44" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="41" stroke="#C19A59" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.6" />

        {/* Inner initials */}
        {lang === "gu" ? (
          <g className="font-heading-gu font-bold" fill="currentColor" textAnchor="middle">
            <text x="64" y="88" fontSize="28" fill="#702C35" fontFamily="'Noto Serif Gujarati', serif">
              હ
            </text>
            <text x="80" y="86" fontSize="16" fill="#C19A59" fontFamily="serif" opacity="0.85">
              •
            </text>
            <text x="96" y="88" fontSize="28" fill="#702C35" fontFamily="'Noto Serif Gujarati', serif">
              ડ
            </text>
          </g>
        ) : (
          <g fill="currentColor" textAnchor="middle">
            <text x="62" y="90" fontSize="30" fill="#702C35" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600">
              H
            </text>
            <text x="80" y="86" fontSize="18" fill="#C19A59" fontFamily="'Cormorant Garamond', serif" fontStyle="italic">
              &
            </text>
            <text x="98" y="90" fontSize="30" fill="#702C35" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="600">
              D
            </text>
          </g>
        )}

        {/* Top small crown / star accent */}
        <path d="M80 43 L83 49 L89 49 L84 53 L86 59 L80 55 L74 59 L76 53 L71 49 L77 49 Z" fill="#C19A59" opacity="0.75" />

        {/* Bottom tiny auspicious knot */}
        <path d="M72 114 C76 110 84 110 88 114 C84 118 76 118 72 114 Z" fill="#702C35" opacity="0.6" />
      </svg>
    </div>
  );
};

/**
 * Haveli Jharokha Carved Arch Framework
 */
export const HaveliArch: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className = "", children }) => (
  <div className={`relative ${className}`}>
    {/* Architectural cusped arch top SVG */}
    <div className="w-full flex justify-center mb-2" aria-hidden="true">
      <svg
        viewBox="0 0 320 60"
        className="w-full max-w-sm text-[#C19A59]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Traditional 5-cusped arch profile */}
        <path
          d="M20 60 C20 40 40 32 70 32 C90 32 100 24 120 18 C140 12 150 4 160 2 C170 4 180 12 200 18 C220 24 230 32 250 32 C280 32 300 40 300 60"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M26 60 C26 44 44 37 72 37 C92 37 102 29 122 23 C141 17 151 9 160 7 C169 9 179 17 198 23 C218 29 228 37 248 37 C276 37 294 44 294 60"
          stroke="#702C35"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* Kalasa / finial on crest */}
        <circle cx="160" cy="2" r="3" fill="currentColor" />
        <circle cx="160" cy="2" r="1.5" fill="#702C35" />
      </svg>
    </div>
    {children}
  </div>
);
