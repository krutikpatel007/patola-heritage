export interface WeddingConfig {
  couple: {
    bride: {
      titleGu: string;
      nameGu: string;
      titleEn: string;
      nameEn: string;
      initial: string;
      initialGu: string;
    };
    groom: {
      titleGu: string;
      nameGu: string;
      titleEn: string;
      nameEn: string;
      initial: string;
      initialGu: string;
    };
  };
  event: {
    date: string; // ISO date string for countdown in IST
    dateFormattedGu: string;
    dateFormattedEn: string;
    dayGu: string;
    dayEn: string;
    timeGu: string;
    timeEn: string;
    ceremonyNameGu: string;
    ceremonyNameEn: string;
    auspiciousNoteGu: string;
    auspiciousNoteEn: string;
  };
  venue: {
    nameGu: string;
    nameEn: string;
    landmarkGu: string;
    landmarkEn: string;
    cityGu: string;
    cityEn: string;
    stateGu: string;
    stateEn: string;
    googleMapsUrl: string;
    embedQuery: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    rsvpPhone: string; // international format for WhatsApp (e.g. +91 98765 43210)
    rsvpWhatsappText: {
      gu: string;
      en: string;
    };
  };
}

export const WEDDING_CONFIG: WeddingConfig = {
  couple: {
    bride: {
      titleGu: "ચિ.",
      nameGu: "હર્ષની",
      titleEn: "Chi.",
      nameEn: "Harshini",
      initial: "H",
      initialGu: "હ",
    },
    groom: {
      titleGu: "ચિ.",
      nameGu: "ડેનિશ",
      titleEn: "Chi.",
      nameEn: "Denis",
      initial: "D",
      initialGu: "ડ",
    },
  },
  event: {
    date: "2026-11-26T15:00:00+05:30", // 26 November 2026 3:00 PM IST
    dateFormattedGu: "૨૬ નવેમ્બર, ૨૦૨૬",
    dateFormattedEn: "26 November 2026",
    dayGu: "ગુરુવાર",
    dayEn: "Thursday",
    timeGu: "બપોરે ૩:૦૦ વાગ્યે",
    timeEn: "3:00 PM (IST)",
    ceremonyNameGu: "શુભ હસ્તમેળાપ અને લગ્ન સમારોહ",
    ceremonyNameEn: "Auspicious Hastamelap & Wedding Ceremony",
    auspiciousNoteGu: "ગૌધૂલી વેળા • શુભ મુહૂર્ત",
    auspiciousNoteEn: "Sacred Vivah Muhurat • Divine Union",
  },
  venue: {
    nameGu: "વિશ્વ ઉમિયાધામ",
    nameEn: "Vishv Umiyadham",
    landmarkGu: "એસ.પી. રિંગ રોડ, જાસપુર",
    landmarkEn: "S.P. Ring Road, Jaspur",
    cityGu: "અમદાવાદ",
    cityEn: "Ahmedabad",
    stateGu: "ગુજરાત",
    stateEn: "Gujarat",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Vishv+Umiyadham+Jaspur+Ahmedabad+Gujarat",
    embedQuery: "Vishv+Umiyadham,+Ahmedabad,+Gujarat",
    coordinates: {
      lat: 23.1256,
      lng: 72.5298,
    },
  },
  contact: {
    rsvpPhone: "919876543210",
    rsvpWhatsappText: {
      gu: "નમસ્તે, હું ચિ. હર્ષની અને ચિ. ડેનિશના લગ્ન મહોત્સવ માટે RSVP નોંધાવું છું.",
      en: "Namaste, I would like to RSVP for Harshini & Denis's Wedding Celebration.",
    },
  },
};
