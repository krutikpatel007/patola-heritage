export type Language = "gu" | "en";

export interface Translations {
  intro: {
    ganeshGreeting: string;
    subGreeting: string;
    enterPrompt: string;
    envelopeSub: string;
    withText: string;
    twoFamiliesQuote: string;
    openInvitationBtn: string;
    skipBtn: string;
  };
  nav: {
    invitation: string;
    ceremony: string;
    venue: string;
    countdown: string;
    rsvp: string;
    musicOn: string;
    musicOff: string;
    langToggle: string;
  };
  hero: {
    topBadge: string;
    ganeshGreeting: string;
    withText: string;
    tagline: string;
    addToCalendar: string;
    calendarSuccess: string;
    scrollDown: string;
  };
  invitation: {
    sectionNum: string;
    title: string;
    subtitle: string;
    sanskritShloka: string;
    invitationText: string;
    cordialInvite: string;
    parentsBlessing: string;
  };
  ceremony: {
    sectionNum: string;
    title: string;
    subtitle: string;
    badge: string;
    dateLabel: string;
    dayLabel: string;
    timeLabel: string;
    venueLabel: string;
    traditionalNote: string;
  };
  venue: {
    sectionNum: string;
    title: string;
    subtitle: string;
    directionsBtn: string;
    copyAddressBtn: string;
    copiedNotice: string;
    campusNote: string;
    atmosphereNote: string;
    parkingNote: string;
  };
  countdown: {
    sectionNum: string;
    title: string;
    subtitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    celebratingNow: string;
  };
  rsvp: {
    sectionNum: string;
    title: string;
    subtitle: string;
    fullName: string;
    namePlaceholder: string;
    mobile: string;
    mobilePlaceholder: string;
    attendance: string;
    attendingYes: string;
    attendingNo: string;
    guestsCount: string;
    guestOptions: { [key: number]: string };
    personalMessage: string;
    messagePlaceholder: string;
    submitBtn: string;
    submitting: string;
    directNote: string;
    storageNote: string;
    errorName: string;
    errorPhone: string;
  };
  closing: {
    threePillars: string;
    farewellMessage: string;
    warmRegards: string;
    familySignoff: string;
    patolaHeritageCrafted: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  gu: {
    intro: {
      ganeshGreeting: "॥ શ્રી ગણેશાય નમઃ ॥",
      subGreeting: "વક્રતુંડ મહાકાય સૂર્યકોટિ સમપ્રભ | નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥",
      enterPrompt: "શુભ વિવાહ નિમંત્રણ પત્રિકા ખોલો",
      envelopeSub: "પાટણના ઐતિહાસિક પટોળાની કળા અને ગુર્જર પરંપરાનો પવિત્ર સંગમ",
      withText: "સંગે",
      twoFamiliesQuote: "બે પરિવારોનું મિલન • એક ભવ્ય મહોત્સવ • જીવનભરનો સાથ",
      openInvitationBtn: "શુભ નિમંત્રણ પત્રિકા જુઓ",
      skipBtn: "સીધા આગળ વધો",
    },
    nav: {
      invitation: "શુભ લગ્ન",
      ceremony: "વિવાહ મહોત્સવ",
      venue: "સ્થળ દર્શન",
      countdown: "સમયગણના",
      rsvp: "હાજરી નોંધ (RSVP)",
      musicOn: "સંગીત ચાલુ",
      musicOff: "સંગીત બંધ",
      langToggle: "English",
    },
    hero: {
      topBadge: "શુભ વિવાહ • મંગલ મહોત્સવ",
      ganeshGreeting: "॥ શ્રી ગણેશાય નમઃ ॥",
      withText: "સંગે",
      tagline: "પરંપરાની સુંદરતા, પ્રેમની નવી શરૂઆત.",
      addToCalendar: "કૅલેન્ડરમાં નોંધો",
      calendarSuccess: "કૅલેન્ડરમાં ઉમેરાયું!",
      scrollDown: "શુભ નિમંત્રણ પત્રિકા વાચવા નીચે સ્ક્રોલ કરો",
    },
    invitation: {
      sectionNum: "ભાગ ૦૧",
      title: "શુભ લગ્ન",
      subtitle: "પ્રેમ, સમર્પણ અને વડીલોના પાવન આશીર્વાદ",
      sanskritShloka: "મંગલમ્ ભગવાન વિષ્ણુઃ મંગલમ્ ગરુડધ્વજઃ | મંગલમ્ પુણ્ડરીકાક્ષો મંગલાય તનો હરિઃ ||",
      invitationText:
        "પ્રેમ, લાગણી અને પરિવારના આશીર્વાદ સાથે અમારા જીવનના આ શુભ પ્રસંગે આપની ઉપસ્થિતિ અમારે માટે આનંદ અને ગૌરવની વાત રહેશે.",
      cordialInvite:
        "આપ સહકુટુંબ પધારી નવદંપતીને આપના અમૂલ્ય આશીર્વાદ અને સ્નેહથી અભિભૂત કરશો એ જ અમારી નમ્ર અભ્યર્થના.",
      parentsBlessing: "બે પરિવારોના સંસ્કારોનું પાવન મિલન",
    },
    ceremony: {
      sectionNum: "ભાગ ૦૨",
      title: "વિવાહ મહોત્સવ",
      subtitle: "શુભ હસ્તમેળાપ અને મંગલ ફેરા",
      badge: "નિર્ધારિત વિવાહ વિધિ",
      dateLabel: "શુભ તારીખ",
      dayLabel: "શુભ વાર",
      timeLabel: "શુભ મુહૂર્ત",
      venueLabel: "મંગલ સ્થળ",
      traditionalNote:
        "વેદિક મંત્રોચ્ચાર, મંગલ શરણાઈના સૂર અને પાટોળાની ભવ્ય સંસ્કૃતિ સાથે સંપન્ન થતો પવિત્ર વિવાહ સંસ્કાર.",
    },
    venue: {
      sectionNum: "ભાગ ૦૩",
      title: "શુભ સ્થળ",
      subtitle: "વિશ્વ ઉમિયાધામ પરિસર • અમદાવાદ",
      directionsBtn: "ગૂગલ મેપ્સ પર દિશા જુઓ",
      copyAddressBtn: "સરનામું કૉપિ કરો",
      copiedNotice: "સરનામું સફળતાપૂર્વક કૉપિ થયું!",
      campusNote: "આધ્યાત્મિક, વિશાળ અને ભવ્ય પરિસર",
      atmosphereNote: "પારંપરિક અને સુવિધાજનક વ્યવસ્થા",
      parkingNote: "વિશાળ વાહન પાર્કિંગ વ્યવસ્થા ઉપલબ્ધ",
    },
    countdown: {
      sectionNum: "ભાગ ૦૪",
      title: "શુભ ઘડીની પ્રતીક્ષા",
      subtitle: "નવા જીવનના સોનેરી પ્રારંભ સુધીની સમયગણના",
      days: "દિવસ",
      hours: "કલાક",
      minutes: "મિનિટ",
      seconds: "સેકન્ડ",
      celebratingNow: "આજનો દિવસ પરમ પવિત્ર મંગલ મહોત્સવનો છે!",
    },
    rsvp: {
      sectionNum: "ભાગ ૦૫",
      title: "સ્નેહ નિમંત્રણ & હાજરી (RSVP)",
      subtitle: "આપની પધરામણીથી અમારો આનંદ સાર્થક બનશે",
      fullName: "આપનું શુભ નામ",
      namePlaceholder: "આપનું પૂરું નામ લખો (દા.ત. શ્રી રમેશભાઈ પટેલ)",
      mobile: "મોબાઇલ નંબર",
      mobilePlaceholder: "૧૦ અંકનો વોટ્સએપ / સંપર્ક નંબર",
      attendance: "આપની ઉપસ્થિતિ",
      attendingYes: "હર્ષ સાથે હાજર રહીશું (Will Attend with Joy)",
      attendingNo: "દિલગીરીપૂર્વક અસમર્થ (Unable to Attend, Blessings Sent)",
      guestsCount: "મહેમાનોની કુલ સંખ્યા",
      guestOptions: {
        1: "૧ મહેમાન",
        2: "૨ મહેમાનો",
        3: "૩ મહેમાનો",
        4: "૪ મહેમાનો",
        5: "૫ કે તેથી વધુ મહેમાનો (પરિવાર સહ)",
      },
      personalMessage: "નવદંપતી માટે આપના આશીર્વાદ / શુભેચ્છા",
      messagePlaceholder: "નવદંપતીને આપના પ્રેમભર્યા શુભાશિષ લખો...",
      submitBtn: "હાજરી નોંધાવો (WhatsApp દ્વારા)",
      submitting: "નોંધણી તૈયાર થઈ રહી છે...",
      directNote:
        "આ ફોર્મ સીધું પરિવારના WhatsApp નંબર પર સંદેશ મોકલશે, જેથી આપની વ્યવસ્થા સુચારુ રૂપે થઈ શકે.",
      storageNote:
        "તમારા પ્રતિભાવ સુરક્ષિત રીતે સીધા પરિવાર સુધી પહોંચાડવામાં આવે છે.",
      errorName: "કૃપા કરીને આપનું નામ દાખલ કરો",
      errorPhone: "કૃપા કરીને માન્ય મોબાઇલ નંબર દાખલ કરો",
    },
    closing: {
      threePillars: "પરંપરા • પ્રેમ • પરિવાર",
      farewellMessage:
        "આપની સ્નેહભરી ઉપસ્થિતિ અમારા આ મહોત્સવને ચિરસ્મરણીય અને અલૌકિક બનાવશે.",
      warmRegards: "સ્નેહાધીન,",
      familySignoff: "હર્ષની અને ડેનિશ પરિવાર",
      patolaHeritageCrafted: "પાટણ પટોળા અને ગુર્જર કલાવારસાથી પ્રેરિત ડિજિટલ મહોત્સવ",
      backToTop: "ટોચ પર જાઓ",
    },
  },
  en: {
    intro: {
      ganeshGreeting: "॥ Shree Ganeshay Namah ॥",
      subGreeting: "May Lord Ganesha remove all obstacles and bestow auspicious beginnings",
      enterPrompt: "Enter the Sacred Wedding Invitation",
      envelopeSub: "Where centuries-old Patan Patola craftsmanship meets modern royal elegance",
      withText: "WITH",
      twoFamiliesQuote: "Two Families. One Celebration. A Lifetime of Togetherness.",
      openInvitationBtn: "OPEN WEDDING INVITATION",
      skipBtn: "Skip Intro",
    },
    nav: {
      invitation: "Invitation",
      ceremony: "Ceremony",
      venue: "Venue",
      countdown: "Countdown",
      rsvp: "RSVP",
      musicOn: "Sound On",
      musicOff: "Sound Off",
      langToggle: "ગુજરાતી",
    },
    hero: {
      topBadge: "Auspicious Wedding Union",
      ganeshGreeting: "॥ Shree Ganeshay Namah ॥",
      withText: "WITH",
      tagline: "Where Gujarati Traditions Meet Modern Elegance.",
      addToCalendar: "Add to Calendar",
      calendarSuccess: "Added to Calendar!",
      scrollDown: "Scroll to unveil the sacred celebration",
    },
    invitation: {
      sectionNum: "SECTION 01",
      title: "Shubh Lagna",
      subtitle: "Sacred Union, Love & Ancestral Blessings",
      sanskritShloka: "Mangalam Bhagavan Vishnuh Mangalam Garudadhvajah | Mangalam Pundarikaksho Mangalaya Tano Harih ||",
      invitationText:
        "With the blessings of our elders and the love of our families, we warmly invite you to join us as we celebrate this beautiful beginning.",
      cordialInvite:
        "We cordially invite you and your family to grace this auspicious occasion and shower the couple with your unconditional love and blessings.",
      parentsBlessing: "A harmonious union of two families, bound by heritage and devotion.",
    },
    ceremony: {
      sectionNum: "SECTION 02",
      title: "Wedding Celebration",
      subtitle: "The Sacred Vows & Hastamelap",
      badge: "Confirmed Ceremony",
      dateLabel: "Sacred Date",
      dayLabel: "Auspicious Day",
      timeLabel: "Sacred Time",
      venueLabel: "Celebration Venue",
      traditionalNote:
        "An auspicious union solemnized amidst Vedic chants, soulful shehnai melodies, and the royal heritage of Patola textiles.",
    },
    venue: {
      sectionNum: "SECTION 03",
      title: "The Venue",
      subtitle: "Vishv Umiyadham • Ahmedabad, Gujarat",
      directionsBtn: "Get Directions on Google Maps",
      copyAddressBtn: "Copy Full Address",
      copiedNotice: "Address copied to clipboard!",
      campusNote: "Majestic, serene & sacred campus grounds",
      atmosphereNote: "Heritage-inspired architecture & hospitality",
      parkingNote: "Extensive guest parking & convenient access",
    },
    countdown: {
      sectionNum: "SECTION 04",
      title: "The Auspicious Countdown",
      subtitle: "Counting down every sacred moment until the divine celebration",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      celebratingNow: "Today is the Auspicious Wedding Day!",
    },
    rsvp: {
      sectionNum: "SECTION 05",
      title: "RSVP & Blessings",
      subtitle: "Your presence will make our celebration unforgettable",
      fullName: "Full Name",
      namePlaceholder: "Enter your full name (e.g. Mr. & Mrs. Patel)",
      mobile: "Mobile Number",
      mobilePlaceholder: "10-digit WhatsApp or contact number",
      attendance: "Attendance Confirmation",
      attendingYes: "Joyfully accept, will attend",
      attendingNo: "Regretfully decline, warmest blessings",
      guestsCount: "Number of Guests",
      guestOptions: {
        1: "1 Guest",
        2: "2 Guests",
        3: "3 Guests",
        4: "4 Guests",
        5: "5 or more Guests (Family)",
      },
      personalMessage: "Personal Message & Blessings",
      messagePlaceholder: "Write your heartfelt wishes for the couple...",
      submitBtn: "Confirm RSVP via WhatsApp",
      submitting: "Preparing your confirmation...",
      directNote:
        "This RSVP directly formats a confirmation to the host family via WhatsApp for seamless coordination.",
      storageNote:
        "Your response is directly and securely communicated to the family.",
      errorName: "Please enter your name",
      errorPhone: "Please enter a valid mobile number",
    },
    closing: {
      threePillars: "Tradition • Love • Family",
      farewellMessage:
        "Your presence will make our celebration truly complete and unforgettable.",
      warmRegards: "With Warmest Regards,",
      familySignoff: "Harshini & Denis Families",
      patolaHeritageCrafted: "Inspired by the Royal Double-Ikat Patola Heritage of Gujarat",
      backToTop: "Return to Top",
    },
  },
};
