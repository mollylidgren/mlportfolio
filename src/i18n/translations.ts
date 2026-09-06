import type { RichSegment } from "./Rich";

export type Language = "sv" | "en";

/** A piece of text that exists in both languages. Use this for any new
 * content you add (project fields, experience rows, etc.) so it's
 * translatable from day one. */
export type LocalizedText = { sv: string; en: string };

/** Small helper for the sv/en switch inside components. */
export function pick(lang: Language, text: LocalizedText): string {
  return text[lang];
}

type Dict = {
  nav: {
    mainNav: string;
    links: { path: string; label: string }[];
    openMenu: string;
    closeMenu: string;
    switchLang: string;
  };
  hero: {
    eyebrow: string;
    title: readonly RichSegment[];
    copy: string;
    ctaPrimary: string;
    ctaGhost: string;
    featuredAria: string;
    locationLine1: string;
    locationLine2: string;
    openProject: (title: string) => string;
  };
  marquee: {
    aria: string;
    text: string;
  };
  sectionIntro: {
    eyebrow: string;
    stickyBefore: string;
    stickyAfter: string;
    title: readonly RichSegment[];
    text: string;
  };
  capability: {
    tagBuild: string;
    tagTell: string;
    tagShape: string;
    seeProject: string;
    cards: { title: string; text: string; chips: string[] }[];
  };
  featured: {
    eyebrow: string;
    title: readonly RichSegment[];
    allProjects: string;
    viewAllProjects: string;
  };
  process: {
    eyebrow: string;
    title: readonly RichSegment[];
    lead: string;
    steps: { num: string; title: string; text: string }[];
  };
  homeCta: {
    title: readonly RichSegment[];
    cta: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    cta: string;
    contactLabel: string;
    followLabel: string;
    navLabel: string;
    location: string;
    rights: string;
    stack: string;
    emailAria: string;
  };
  about: {
    eyebrow: string;
    title: readonly RichSegment[];
    text: string;
    portraitPlaceholder: string;
    portraitCaption: string;
    bigCopy: string;

    bigCopySections: { title: string; subtitle: string }[];
    pillars: { title: string; text: string }[];
  };
  experience: {
    eyebrow: string;
    title: readonly RichSegment[];
    text: string;
    educationLabel: string;
  };

  contact: {
    eyebrow: string;
    title: readonly RichSegment[];
    text: string;
    contactHeading: string;
    email: string;
    linkedin: string;
    name: string;
    emailField: string;
    message: string;
    send: string;
    sending: string;
    successLabel: string;
    successHeading: string;
    successText: string;
    sendAnother: string;
    error: string;
  };

  projects: {
    eyebrow: string;
    title: readonly RichSegment[];
    text: string;
    readCase: string;
    openProject: (title: string) => string;
  };
  projectDetail: {
    backLink: string;
    roleLabel: string;
    projectTypeLabel: string;
    focusLabel: string;
    challengeEyebrow: string;
    challengeHeading: string;
    processEyebrow: string;
    processHeading: string;
    resultEyebrow: string;
    resultHeading: string;
    replaceImage: string;
    nextCaseEyebrow: string;
    nextCaseTitle: string;
    allProjectsCta: string;
  };
  notFound: {
    eyebrow: string;
    title: readonly RichSegment[];
    text: string;
    toStart: string;
    toProjects: string;
  };
};

const sv: Dict = {
  nav: {
    mainNav: "Huvudnavigation",
    links: [
      { path: "/", label: "Start" },
      { path: "/projekt", label: "Projekt" },
      { path: "/om", label: "Om mig" },
      { path: "/erfarenhet", label: "Erfarenhet" },
      { path: "/kontakt", label: "Kontakt" },
    ],
    openMenu: "Öppna meny",
    closeMenu: "Stäng meny",
    switchLang: "Byt språk",
  },
  hero: {
    eyebrow: "FRONTEND · STORYTELLING · DIGITAL DESIGN",
    title: ["Jag förvandlar ", { grad: "\nidéer till innehåll" }, "\nsom syns"],
    copy: "Rör mig obehindrat mellan kod, innehåll, design och rörlig bild. Från idé och strategi till färdigt resultat. ",
    ctaPrimary: "Utforska projekten",
    ctaGhost: "Vem jag är",
    featuredAria: "Utvalda projekt",
    locationLine1: "· Struktur + berättelse + synlighet ·",
    locationLine2: "",
    openProject: (title) => `Öppna projekt ${title}`,
  },
  marquee: {
    aria: "Kompetenser",
    text: "CONTENT STRATEGY ✦ DESIGN ✦ UX ✦ INFORMATION ARCHITECTURE ✦ VIDEO ✦ SEO ✦ WORDPRESS ✦ FRONTEND ✦ REACT ✦ PROJECT MANAGEMENT",
  },
  sectionIntro: {
    eyebrow: "MIN POSITIONERING",
    stickyBefore: "Scrolla. ",
    stickyAfter: "Jag berättar resten.",
    title: ["Jag låter ", { em: "berättande" }, " möta ", { em: "skapande" }],
    text: "Växlar mellan innehåll, design och teknik samt driver idéer hela vägen till färdigt resultat.",
  },
  capability: {
    tagBuild: "BUILD",
    tagTell: "TELL",
    tagShape: "SHAPE",
    seeProject: "Se projekt",
    cards: [
      {
        title: "Webb & CMS",
        text: "UX, design och utveckling av webbplatser i WordPress och React, med SEO som grund.",
        chips: ["Struktur", "Funktion", "Flöde"],
      },
      {
        title: "Content & video",
        text: "Koncept och produktion av foto, video och copy för innehåll som fungerar i flera kanaler.",
        chips: ["BERÄTTANDE", "RELEVANS", "ENGAGEMANG"],
      },
      {
        title: "Design & Layout",
        text: "Visuell form och identitet med fokus på layout, uttryck och helhet.",
        chips: ["FORM", "IDENTITET", "3D"],
      },
    ],
  },
  featured: {
    eyebrow: "UTVALDA PROJEKT",
    title: [
      "Inte bara ",
      { em: "fint" },
      { br: true },
      "Bra bakom  ",
      { em: "kulisserna " },
      "också",
    ],
    allProjects: "Alla projekt",
    viewAllProjects: "Visa alla projekt",
  },
  process: {
    eyebrow: "MIN METOD",
    title: [
      "Från ",
      { em: "idé" },
      { br: true },
      "till färdigt ",
      { em: "resultat" },
    ],
    lead: "Jag gillar när strategi, innehåll, design och teknik får arbeta tillsammans genom hela processen.",
    steps: [
      {
        num: "01",
        title: "Förstå",
        text: "Mål, målgrupp, kontext och problem.",
      },
      {
        num: "02",
        title: "Forma",
        text: "Struktur, innehåll och visuell riktning.",
      },
      {
        num: "03",
        title: "Producera",
        text: "Text, bild, video, webb och kod",
      },
      {
        num: "04",
        title: "Förfina",
        text: "Testa, mäta, förbättra och finjustera längs vägen.",
      },
    ],
  },
  homeCta: {
    title: [
      "Har du en ",
      { em: "idé " },
      "som behöver ",
      { em: "förverkligas?" },
    ],
    cta: "Låt oss prata",
  },
  footer: {
    eyebrow: "LÅT OSS SKAPA NÅGOT",
    title: "Har du ett projekt, en idé eller en roll där jag skulle passa?",
    cta: "Ta kontakt",
    contactLabel: "Kontakt",
    followLabel: "Följ",
    navLabel: "Navigation",
    location: "Örebro · Sverige",
    rights: "© 2026 Molly Lidgren",
    stack: "React · Tailwind · Motion · WCAG-inspirerad",
    emailAria: "E-post",
  },
  about: {
    eyebrow: "OM MIG",
    title: ["Bred erfarenhet \n ", { em: "Tydlig riktning" }],
    text: "Jag gillar att röra mig mellan det kreativa och det tekniska, och att göra idéer begripliga, användbara och levande.",
    portraitPlaceholder: "DIN BILD / PORTRÄTT",
    portraitCaption: "",
    bigCopy: "Molly Lidgren",
    bigCopySections: [
      {
        title: "Vem jag är",
        subtitle: ` Jag har alltid rört mig mellan innehåll, design och teknik. Min bakgrund spänner över informationsarkitektur, medie- och kommunikationsvetenskap och filmproduktion och har gett mig ett brett perspektiv på hur idéer kan struktureras, berättas och förverkligas.
      
      Min erfarenhet sträcker sig från frontend och webb till innehåll, design och visuell kommunikation. Jag bygger webbplatser i såväl WordPress som React, skriver texter anpassade utifrån exempelvis SEO och arbetar med redigering av bild och video för olika kanaler. Kombinationen gör att jag kan se både helheten och detaljerna och ta en idé hela vägen från tanke till färdig lösning.`,
      },
      {
        title: "Erfarenhet i praktiken",
        subtitle: `Jag har byggt och underhållit webbplatser i WordPress med ansvar för både drift och innehåll. Jag har drivit SEO- och innehållsstrategier med fokus på att öka synlighet och skapa resultat. Jag har också designat och lanserat företagswebbplatser från idé till färdig lösning och producerat samt redigerat bild- och videomaterial för marknadsföring i flera kanaler.
      
      Jag har dessutom hanterat flera webbplatser parallellt, med fokus på prestanda, användarupplevelse och en tydlig varumärkesnärvaro. Oavsett kanal ska uttrycket kännas sammanhållet, relevant och som samma varumärke.`,
      },
      {
        title: "Så arbetar jag",
        subtitle: `Jag gillar när strategi, innehåll, design och teknik får hänga ihop, och trivs med att hålla ihop helheten. Jag arbetar strukturerat utan att tappa det kreativa och kreativt utan att tappa riktningen. Först handlar det om att förstå målgrupp, behov och mål. Sedan formar, bygger och förfinar jag tills helheten fungerar.`,
      },
    ],

    pillars: [
      { title: "Berätta", text: "Idéer • berättelser • innehåll" },
      { title: "Forma", text: "Design • struktur • upplevelse" },
      { title: "Bygga", text: "Webb • frontend • funktion" },
    ],
  },
  experience: {
    eyebrow: "ERFARENHET",
    title: ["En bakgrund byggd på ", { em: "bredd" }],
    text: "Från kreativt skapande till praktiskt genomförande, med förståelse för hela vägen däremellan.",
    educationLabel: "UTBILDNING",
  },

  contact: {
    eyebrow: "KONTAKT",
    title: ["Något på gång? \n", { em: "Hör av dig" }],
    text: "Öppen för nya möjligheter, samarbeten och goda idéer.",

    contactHeading: "Ta kontakt",

    email: "E-post",
    linkedin: "LinkedIn",

    name: "Namn",
    emailField: "E-postadress",
    message: "Meddelande",

    send: "Skicka",
    sending: "Skickar...",

    successLabel: "MEDDELANDE SKICKAT",
    successHeading: "Tack!",
    successText: "Ditt meddelande är skickat. Jag återkommer så snart jag kan.",
    sendAnother: "Skicka ett nytt meddelande",

    error: "Något gick fel. Försök igen.",
  },

  projects: {
    eyebrow: "PROJEKT",
    title: ["Olika projekt \n", { em: "Samma driv" }],
    text: "Webb, film, innehåll, design och utveckling. En samling projekt som visar bredden i det jag gör.",
    readCase: "Läs case",
    openProject: (title) => `Öppna projekt ${title}`,
  },
  projectDetail: {
    backLink: "Till projekten",
    roleLabel: "Min roll",
    projectTypeLabel: "Projektform",
    focusLabel: "Fokus",
    challengeEyebrow: "UTMANING",
    challengeHeading: "Problemet först",
    processEyebrow: "PROCESS",
    processHeading: "Så tog jag mig an det",
    resultEyebrow: "RESULTAT",
    resultHeading: "Det jag vill minnas",
    replaceImage: "BYT UT MOT DIN RIKTIGA BILD / VIDEO / MOCKUP",
    nextCaseEyebrow: "NÄSTA CASE",
    nextCaseTitle: "Fortsätt utforska",
    allProjectsCta: "Till alla projekt",
  },
  notFound: {
    eyebrow: "404",
    title: ["Den sidan finns ", { em: "inte." }],
    text: "Gå tillbaka till start eller utforska projekten.",
    toStart: "Till start",
    toProjects: "Till projekten",
  },
};

const en: Dict = {
  nav: {
    mainNav: "Main navigation",
    links: [
      { path: "/", label: "Home" },
      { path: "/projekt", label: "Projects" },
      { path: "/om", label: "About" },
      { path: "/erfarenhet", label: "Experience" },
      { path: "/kontakt", label: "Contact" },
    ],
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Switch language",
  },
  hero: {
    eyebrow: "FRONTEND · STORYTELLING · DIGITAL DESIGN",
    title: ["I turn ", { grad: "ideas\n into content" }, "\nthat gets \nseen"],
    copy: "I move seamlessly between code, content, design and motion. From idea and strategy to finished results.",
    ctaPrimary: "Explore the projects",
    ctaGhost: "Who I am",
    featuredAria: "Featured projects",
    locationLine1: "· Structure + story + visibility · ",
    locationLine2: "",
    openProject: (title) => `Open project ${title}`,
  },
  marquee: {
    aria: "Skills",
    text: "CONTENT STRATEGY ✦ DESIGN ✦ UX ✦ INFORMATION ARCHITECTURE ✦ VIDEO ✦ SEO ✦ WORDPRESS ✦ FRONTEND ✦ REACT ✦ PROJECT MANAGEMENT",
  },
  sectionIntro: {
    eyebrow: "MY POSITIONING",
    stickyBefore: "Scroll. ",
    stickyAfter: "I'll tell the rest.",
    title: [
      "I bring ",
      { em: "storytelling" },
      " and ",
      { em: "making" },
      " together",
    ],
    text: "Moving between content, design and technology, turning ideas into finished work.",
  },
  capability: {
    tagBuild: "BUILD",
    tagTell: "TELL",
    tagShape: "SHAPE",
    seeProject: "See project",
    cards: [
      {
        title: "Web & CMS",
        text: "UX, design and development of websites using WordPress and React, with SEO at the core.",
        chips: ["React", "IA", "SEO"],
      },
      {
        title: "Content & video",
        text: "Concept and production of photo, video and copy for content that works across channels.",
        chips: ["STORYTELLING", "RELEVANCE", "ENGAGEMENT"],
      },
      {
        title: "Design & Layout",
        text: "Visual form and identity with a focus on layout, visual language and cohesion.",
        chips: ["FORM", "IDENTITY", "3D"],
      },
    ],
  },
  featured: {
    eyebrow: "FEATURED PROJECTS",
    title: [
      "Not just ",
      { em: "pretty" },
      { br: true },
      "Solid behind the ",
      { em: "scenes" },
      " too",
    ],
    allProjects: "All projects",
    viewAllProjects: "View all projects",
  },
  process: {
    eyebrow: "MY METHOD",
    title: [
      "From ",
      { em: "idea" },
      { br: true },
      "to delivered ",
      { em: "content" },
    ],
    lead: "I like bringing strategy, content, design and technology together throughout the process.",
    steps: [
      {
        num: "01",
        title: "Understand",
        text: "Goals, audience, context and the problem to solve.",
      },
      {
        num: "02",
        title: "Shape",
        text: "Structure, content and visual direction.",
      },
      {
        num: "03",
        title: "Create",
        text: "Text, imagery, video, web and code.",
      },
      {
        num: "04",
        title: "Refine",
        text: "Test, measure, improve and fine-tune along the way.",
      },
    ],
  },
  homeCta: {
    title: [
      "Do you have an ",
      { em: "idea " },
      "that needs to come to ",
      { em: "life? " },
    ],
    cta: "Let's talk",
  },
  footer: {
    eyebrow: "LET'S MAKE SOMETHING",
    title: "Got a project, an idea, or a role where I would fit in?",
    cta: "Get in touch",
    contactLabel: "Contact",
    followLabel: "Follow",
    navLabel: "Navigation",
    location: "Örebro · Sweden",
    rights: "© 2026 YOUR NAME",
    stack: "React · Tailwind · Motion · WCAG-inspired",
    emailAria: "Email",
  },
  about: {
    eyebrow: "ABOUT ME",
    title: ["Broad experience \n", { em: "Clear direction" }],
    text: "I like moving between the creative and the technical, turning ideas into something clear, useful and engaging.",
    portraitPlaceholder: "YOUR IMAGE / PORTRAIT",
    portraitCaption: "",
    bigCopy: "Molly Lidgren",
    bigCopySections: [
      {
        title: "Who I am",
        subtitle: `I’ve always moved between content, design and technology. My background spans information architecture, media and communication studies, and film production, giving me a broad perspective on how ideas can be structured, communicated and brought to life.
    
    My experience ranges from frontend and web to content, design and visual communication. I build websites using both WordPress and React, write content tailored to areas such as SEO, and work with image and video editing for different channels. This combination allows me to see both the bigger picture and the details, taking an idea all the way from concept to finished solution.`,
      },
      {
        title: "Experience in practice",
        subtitle: `I’ve built and maintained WordPress websites with responsibility for both their operation and content. I’ve led SEO and content strategies with a focus on increasing visibility and creating results. I’ve also designed and launched company websites from concept to finished solution, as well as produced and edited photo and video content for marketing across multiple channels.
    
    I’ve also managed several websites in parallel, with a focus on performance, user experience and a consistent brand presence. Wherever people encounter a brand, the experience should feel cohesive, relevant and unmistakably connected.`,
      },
      {
        title: "How I work",
        subtitle: `I like bringing strategy, content, design and technology together, and I enjoy keeping the bigger picture in focus. I work in a structured way without losing the creative side, and creatively without losing direction. It always starts with understanding the audience, needs and goals. From there, I shape, build and refine until everything works as it should.`,
      },
    ],

    pillars: [
      { title: "TELL", text: "Ideas • stories • content" },
      { title: "SHAPE", text: "Design • structure • experience" },
      { title: "BUILD", text: "Web • frontend • functionality" },
    ],
  },
  experience: {
    eyebrow: "EXPERIENCE",
    title: ["A background shaped by ", { em: "breadth" }],
    text: "From creative ideas to practical execution, with an understanding of the entire process in between.",
    educationLabel: "EDUCATION",
  },

  contact: {
    eyebrow: "CONTACT",
    title: ["Got something in mind? ", { em: "Get in touch" }],
    text: "Open to new opportunities, collaborations and good ideas.",

    contactHeading: "Get in touch",

    email: "Email",
    linkedin: "LinkedIn",

    name: "Name",
    emailField: "Email address",
    message: "Message",

    send: "Send",
    sending: "Sending...",

    successLabel: "MESSAGE SENT",
    successHeading: "Thank you!",
    successText:
      "Your message has been sent. I’ll get back to you as soon as I can.",
    sendAnother: "Send another message",

    error: "Something went wrong. Please try again.",
  },

  projects: {
    eyebrow: "PROJECTS",
    title: ["Different projects \n", { em: "Same drive" }],
    text: "Web, film, content, design and development. A selection of projects that reflect the breadth of my work.",
    readCase: "Read case",
    openProject: (title) => `Open project ${title}`,
  },
  projectDetail: {
    backLink: "Back to projects",
    roleLabel: "My role",
    projectTypeLabel: "Project type",
    focusLabel: "Focus",
    challengeEyebrow: "CHALLENGE",
    challengeHeading: "The problem, first",
    processEyebrow: "PROCESS",
    processHeading: "How I approached it",
    resultEyebrow: "RESULT",
    resultHeading: "What's worth remembering",
    replaceImage: "REPLACE WITH YOUR REAL IMAGE / VIDEO / MOCKUP",
    nextCaseEyebrow: "NEXT CASE",
    nextCaseTitle: "Keep exploring",
    allProjectsCta: "To all projects",
  },
  notFound: {
    eyebrow: "404",
    title: ["That page doesn't ", { em: "exist." }],
    text: "Head back to the start or explore the projects.",
    toStart: "To start",
    toProjects: "To the projects",
  },
};

export const translations: Record<Language, Dict> = { sv, en };
