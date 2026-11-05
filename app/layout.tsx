import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PATOLA HERITAGE | શુભ વિવાહ - ચિ. હર્ષની & ચિ. ડેનિશ",
  description:
    "A cinematic Gujarati wedding invitation for Chi. Harshini and Chi. Denis. 26 November 2026, Vishv Umiyadham, Ahmedabad, Gujarat.",
  keywords: [
    "Patola Heritage",
    "Gujarati Wedding",
    "Harshini and Denis",
    "Wedding Invitation",
    "Ahmedabad",
    "Vishv Umiyadham",
  ],
  authors: [{ name: "Harshini & Denis Families" }],
  openGraph: {
    title: "PATOLA HERITAGE | ચિ. હર્ષની સંગે ચિ. ડેનિશ",
    description:
      "બે પરિવારોનું મિલન. એક ભવ્ય મહોત્સવ. ૨૬ નવેમ્બર, ૨૦૨૬ • વિશ્વ ઉમિયાધામ, અમદાવાદ.",
    url: "https://patolaheritage.wedding",
    siteName: "Patola Heritage",
    locale: "gu_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#702C35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="gu" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F5EFE3] text-[#2C2623] antialiased min-h-screen selection:bg-[#702C35] selection:text-[#DFBD7A]">
        {children}
      </body>
    </html>
  );
}
