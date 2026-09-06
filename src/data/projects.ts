import type { Project } from "./types";

// Every text field is { sv, en } — when you add a new project, just fill
// in both languages here and it will show up correctly everywhere
// (project cards, hero, the case page) no matter which language is active.
export const projects: Project[] = [
  {
    slug: "digital-reseupplevelse",
    number: "01",

    title: {
      sv: "En digital rese- upplevelse",
      en: "A Digital Travel Experience",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · KONCEPT",
      en: "UNIVERSITY PROJECT · CONCEPT",
    },

    type: {
      sv: "UX · Informationsarkitektur · Frontend",
      en: "UX · Information Architecture · Frontend",
    },

    description: {
      sv: "En komplett webbplats för ett fiktivt reseföretag, utvecklad i grupp från användarflöden och prototyper till en fungerande React-lösning.",
      en: "A complete website for a fictional travel company, developed as a group project from user flows and prototypes to a working React solution.",
    },

    longDescription: {
      sv: "Projektet gick ut på att skapa en tydlig och inspirerande bokningsupplevelse för användare som vill upptäcka och boka resor online. Arbetet omfattade informationsarkitektur, användarflöden, prototyper och visuell design i Figma, följt av utveckling av responsiva gränssnitt och interaktiva komponenter i React. Mitt huvudsakliga ansvar låg inom frontend, samtidigt som jag bidrog till projektets visuella riktning och gränssnittsdesign.",
      en: "The project focused on creating a clear and engaging booking experience for users looking to discover and book trips online. The work covered information architecture, user flows, prototyping and visual design in Figma, followed by the development of responsive interfaces and interactive components in React. My main responsibility was frontend development, while also contributing to the project’s visual direction and interface design.",
    },

    tags: ["React", "Figma", "UX", "Information Architecture"],

    image: "/images/projectA/Awebsite.png",

    caseImage: "/images/projectA/Aadator.png",

    role: {
      sv: "Frontend · UX · Visuell design",
      en: "Frontend · UX · Visual design",
    },

    projectType: {
      sv: "Grupprojekt",
      en: "Group project",
    },

    challenge: {
      sv: "Uppgiften var att skapa en inspirerande och intuitiv bokningsupplevelse för ett fiktivt reseföretag. Användaren skulle enkelt kunna upptäcka resmål, navigera mellan olika delar av webbplatsen och ta sig genom ett tydligt bokningsflöde.",
      en: "The challenge was to create an inspiring and intuitive booking experience for a fictional travel company. Users needed to be able to discover destinations, navigate the website easily and move through a clear booking flow.",
    },

    process: {
      sv: "Arbetet började med att definiera struktur och användarflöden, följt av wireframes och interaktiva prototyper i Figma. Därefter utvecklades responsiva gränssnitt och interaktiva komponenter i React. Jag arbetade främst med frontend och bidrog samtidigt till projektets visuella identitet, layout och gränssnittsdesign.",
      en: "The process began by defining the structure and user flows, followed by wireframes and interactive prototypes in Figma. We then developed responsive interfaces and interactive components in React. My main focus was frontend development, while also contributing to the project’s visual identity, layout and interface design.",
    },

    result: {
      sv: "Resultatet blev ett fungerande webbplatskoncept där struktur, användarflöden, visuell design och frontendutveckling samverkar i en sammanhängande reseupplevelse.",
      en: "The result was a working website concept where structure, user flows, visual design and frontend development come together in a cohesive travel experience.",
    },

    gallery: [
      {
        src: "/images/projectA/Ahome.png",
        caption: {
          sv: "Startsida med sökfunktion och destinationer",
          en: "Homepage featuring search function and destinations",
        },
      },
      {
        src: "/images/projectA/Aroom.png",
        caption: {
          sv: "Sida för hotellalternativ",
          en: "Hotel options page",
        },
      },
      {
        src: "/images/projectA/Aabout.png",
        caption: {
          sv: "Om oss-sida med företagsinformation",
          en: "About us page with company information",
        },
      },
      {
        src: "/images/projectA/Atransfer.png",
        caption: {
          sv: "Sida för bokning av transfer",
          en: "Transfer booking page",
        },
      },
    ],
  },

  {
    slug: "film-och-storytelling",
    number: "02",

    title: {
      sv: "Cykla mer",
      en: "Cycle More",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · KONCEPT",
      en: "UNIVERSITY PROJECT · CONCEPT",
    },

    type: {
      sv: "Film · Storytelling · Postproduktion",
      en: "Film · Storytelling · Post-production",
    },

    description: {
      sv: "En konceptbaserad reklamfilm utvecklad för Cykelfrämjandet som fiktiv kund, från idé och berättande till inspelning och visuell efterbearbetning.",
      en: "A concept-driven promotional film developed for Cykelfrämjandet as a fictional client, from concept and storytelling through filming and visual post-production.",
    },

    longDescription: {
      sv: "Projektet utvecklades inom en universitetskurs med målet att uppmuntra till mer vardagscykling genom ett engagerande visuellt berättande. Arbetet omfattade konceptutveckling, berättargrepp och inspelning, följt av redigering och visuell efterbearbetning. Mitt huvudsakliga ansvar låg inom koncept och postproduktion, där jag arbetade med visuella effekter, motion och klippning för att förstärka filmens berättande.",
      en: "The project was developed as part of a university course with the aim of encouraging everyday cycling through engaging visual storytelling. The work covered concept development, narrative direction and filming, followed by editing and visual post-production. My main responsibility was concept development and post-production, working with visual effects, motion and editing to strengthen the film’s storytelling.",
    },

    tags: ["Film", "Storytelling", "Editing", "Visual Effects"],

    image: "/images/projectF/Fomslag.png",
    caseImage: "/images/projectF/Fomslag.png",

    role: {
      sv: "Koncept · Postproduktion · Redigering",
      en: "Concept · Post-production · Editing",
    },

    projectType: {
      sv: "Grupprojekt",
      en: "Group project",
    },

    challenge: {
      sv: "Uppgiften var att skapa en engagerande reklamfilm för Cykelfrämjandet som kunde väcka intresse för vardagscykling. Utmaningen låg i att kombinera ett tydligt budskap med ett visuellt uttryck som fångade och höll kvar tittaren.",
      en: "The challenge was to create an engaging promotional film for Cykelfrämjandet that could inspire more everyday cycling. The aim was to combine a clear message with a visual approach that captured and held the viewer’s attention.",
    },

    process: {
      sv: "Arbetet började med koncept- och berättelseutveckling tillsammans med gruppen, följt av planering och inspelning. I postproduktionen arbetade jag med redigering, visuella effekter och motion för att forma filmens tempo, uttryck och berättande.",
      en: "The process began with concept and narrative development together with the team, followed by planning and filming. In post-production, I worked with editing, visual effects and motion to shape the film’s pacing, visual language and storytelling.",
    },

    result: {
      sv: "Resultatet blev en reklamfilmsprototyp som kombinerar live-action, visuella effekter och berättande för att förmedla ett inspirerande budskap om vardagscykling.",
      en: "The result was a promotional film concept combining live action, visual effects and storytelling to communicate an inspiring message around everyday cycling.",
    },

    video: {
      src: "/videos/projectF/cykelframjandet.mp4",
      caption: {
        sv: "Den färdiga animerade filmen",
        en: "The final animated film",
      },
    },
  },

  {
    slug: "hallbar-redaktionell-design",
    number: "03",

    title: {
      sv: "En visuell berättelse om hållbarhet",
      en: "A Visual Story About Sustainability",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · KONCEPT",
      en: "UNIVERSITY PROJECT · CONCEPT",
    },

    type: {
      sv: "Visuell identitet · Redaktionell design · Illustration",
      en: "Visual Identity · Editorial Design · Illustration",
    },

    description: {
      sv: "Ett redaktionellt designkoncept med fokus på hållbar konsumtion och miljömedvetenhet, utvecklat som en del av ett universitetsprojekt.",
      en: "An editorial design concept focused on conscious consumption and environmental awareness, developed as part of a university project.",
    },

    longDescription: {
      sv: "Projektet fokuserade på att skapa ett visuellt och redaktionellt koncept för en fiktiv publikation med hållbarhet som centralt tema. Arbetet omfattade konceptutveckling, moodboard och framtagning av en sammanhållen visuell identitet med färgpalett, typografi och illustrativa element. Jag utvecklade även egna illustrationer för att förstärka det redaktionella innehållet och arbetade med layout för att skapa en tydlig och engagerande läsupplevelse. Designen anpassades för både tryckt och digital presentation.",
      en: "The project focused on creating a visual and editorial concept for a fictional publication centered around sustainability. The work included concept development, moodboarding and the creation of a cohesive visual identity through color, typography and illustrative elements. I also developed original illustrations to strengthen the editorial narrative and designed the layout to create a clear and engaging reading experience. The design was adapted for both print and digital presentation.",
    },

    tags: ["Illustrator", "Photoshop", "InDesign", "Editorial Design"],

    image: "/images/projectG/Ggomslag.png",

    caseImage: "/images/projectG/Gmagasin.png",

    role: {
      sv: "Visuell design · Redaktionell design · Illustration",
      en: "Visual design · Editorial design · Illustration",
    },

    projectType: {
      sv: "Individuellt projekt",
      en: "Individual project",
    },

    challenge: {
      sv: "Utmaningen var att översätta ett komplext och samhällsaktuellt ämne som hållbarhet till ett visuellt uttryck som känns både informativt och engagerande. Publikationen behövde skapa en tydlig identitet samtidigt som layout, typografi och illustration samverkade för att göra innehållet lättillgängligt och visuellt intressant.",
      en: "The challenge was to translate a complex and relevant topic such as sustainability into a visual language that felt both informative and engaging. The publication needed a strong identity while ensuring that layout, typography and illustration worked together to make the content accessible and visually engaging.",
    },

    process: {
      sv: "Arbetet började med att definiera projektets visuella riktning genom research, konceptutveckling och ett moodboard. Därefter utvecklade jag en sammanhållen grafisk identitet med fokus på färg, typografi och illustration. Egna illustrationer togs fram för att ge publikationen ett mer personligt uttryck och förstärka det redaktionella innehållet. Slutligen arbetade jag med layout och typografisk hierarki i InDesign och anpassade materialet för både tryck och digital visning.",
      en: "The process began by defining the visual direction through research, concept development and moodboarding. I then developed a cohesive graphic identity with a focus on color, typography and illustration. Original illustrations were created to give the publication a more distinctive character and strengthen the editorial content. Finally, I developed the layout and typographic hierarchy in InDesign and adapted the material for both print and digital presentation.",
    },

    result: {
      sv: "Resultatet blev ett sammanhållet och konceptdrivet magasinuttryck där typografi, illustration och layout samverkar för att kommunicera hållbarhet på ett tydligt och visuellt engagerande sätt. Projektet resulterade i en färdig magasinsida anpassad för både digital och tryckt presentation.",
      en: "The result was a cohesive and concept-driven magazine design where typography, illustration and layout work together to communicate sustainability in a clear and visually engaging way. The project resulted in a finished magazine spread adapted for both digital and print presentation.",
    },

    gallery: [
      {
        src: "/images/projectG/Guppslag.jpg",
        caption: {
          sv: "Magasinuppslag med typografisk hierarki och illustration",
          en: "Magazine spread featuring typographic hierarchy and illustration",
        },
      },
      {
        src: "/images/projectG/Gmoodboard.png",
        caption: {
          sv: "Moodboard och visuell riktning för projektet",
          en: "Moodboard and visual direction for the project",
        },
      },
      {
        src: "/images/projectG/Ggrafiskprofil.png",
        caption: {
          sv: "Egna illustrationer utvecklade för det redaktionella innehållet",
          en: "Original illustrations developed for the editorial content",
        },
      },
    ],
  },

  {
    slug: "coffee-time",
    number: "04",

    title: {
      sv: "En animerad kaffestund",
      en: "An Animated Coffee Moment",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · ANIMERAD REKLAM",
      en: "UNIVERSITY PROJECT · ANIMATED ADVERTISEMENT",
    },

    type: {
      sv: "Grafisk design · Illustration · Animation",
      en: "Graphic Design · Illustration · Animation",
    },

    description: {
      sv: "En animerad reklamkampanj för det fiktiva kaffemärket Coffee Time, där illustration, rörelse och humor kombineras för att skapa ett lekfullt och uppmärksammande budskap.",
      en: "An animated advertisement for the fictional coffee brand Coffee Time, combining illustration, motion and humor to create a playful and attention-grabbing message.",
    },

    longDescription: {
      sv: "Projektet gick ut på att skapa en animerad banner för det fiktiva kaffemärket Coffee Time. Målet var att utveckla ett lekfullt visuellt uttryck där kaffet stod i centrum och där animationen bidrog till att fånga betraktarens uppmärksamhet. Jag utvecklade projektets grafiska uttryck med en rund och mjuk estetik, där bruna, beige och benvita nyanser för tankarna till kaffe och skapar en varm och harmonisk känsla. En illustrerad kaffekopp fungerar som projektets centrala karaktär och kombineras med sloganen ”Vill du må toppen? Ta tag i kaffekoppen” och Coffee Times logotyp. Animationen bygger på koppens rörelse, subtila övergångar och förändringar i tempo för att skapa en livfull och humoristisk reklamupplevelse.",
      en: "The project focused on creating an animated banner for the fictional coffee brand Coffee Time. The goal was to develop a playful visual expression where coffee remained at the center and animation helped capture the viewer’s attention. I developed the project’s graphic style around a soft and rounded aesthetic, using brown, beige and off-white tones to create associations with coffee while maintaining a warm and harmonious feel. An illustrated coffee cup acts as the central character, combined with the slogan “Want to feel great? Grab a cup of coffee” and the Coffee Time logo. The animation uses the cup’s movement, subtle transitions and changes in pace to create a lively and humorous advertising experience.",
    },

    tags: ["Illustration", "Animation", "Graphic Design", "Advertising"],

    image: "/images/projectC/Comslag.png",

    caseImage: "/images/projectC/Cphone.png",

    role: {
      sv: "Grafisk design · Illustration · Animation",
      en: "Graphic design · Illustration · Animation",
    },

    projectType: {
      sv: "Individuellt universitetsprojekt",
      en: "Individual university project",
    },

    challenge: {
      sv: "Utmaningen var att skapa en reklam som snabbt fångar uppmärksamheten och samtidigt förmedlar Coffee Times budskap på ett enkelt och minnesvärt sätt. Eftersom formatet var animerat behövde det visuella uttrycket fungera tillsammans med rörelsen, där kaffekoppen blev den centrala figuren och förde betraktarens blick genom kompositionen.",
      en: "The challenge was to create an advertisement that quickly captures attention while communicating Coffee Time’s message in a simple and memorable way. Since the format was animated, the visual design needed to work together with movement, using the coffee cup as the central character to guide the viewer’s attention through the composition.",
    },

    process: {
      sv: "Arbetet började med att utveckla Coffee Times visuella identitet och definiera ett uttryck som kändes varmt, lekfullt och tydligt kopplat till kaffe. Jag arbetade med färg, typografi, illustration och komposition för att skapa en sammanhållen visuell stil. Därefter utvecklade jag den illustrerade kaffekoppen som projektets huvudmotiv och planerade hur dess rörelser skulle samspela med sloganen och logotypen. Animationen byggdes upp genom horisontella och vertikala rörelser, förändringar i tempo samt in- och uttoningar av textelement. Genom att låta kaffekoppen böjas, komprimeras och sträckas innan den fortsätter sin rörelse skapades ett mer lekfullt och levande uttryck.",
      en: "The process began by developing Coffee Time’s visual identity and defining a style that felt warm, playful and clearly connected to coffee. I worked with color, typography, illustration and composition to create a cohesive visual language. I then developed the illustrated coffee cup as the main character and planned how its movements would interact with the slogan and logo. The animation was built through horizontal and vertical movement, changes in pace, and fade transitions for the text elements. By allowing the coffee cup to bend, compress and stretch before continuing its movement, I created a more playful and lively expression.",
    },

    result: {
      sv: "Resultatet blev en lekfull och karaktärsdriven animerad reklam där illustration och rörelse samverkar för att skapa ett tydligt och minnesvärt budskap. Den varma färgpaletten, den mjuka typografin och kaffekoppens animerade rörelser förstärker Coffee Times identitet och ger reklamen ett personligt uttryck.",
      en: "The result was a playful, character-driven animated advertisement where illustration and motion work together to create a clear and memorable message. The warm color palette, soft typography and animated coffee cup reinforce Coffee Time’s identity and give the advertisement a distinctive personality.",
    },

    gallery: [
      {
        src: "/images/projectC/coffeetime.gif",
        caption: {
          sv: "Animerad reklam för Coffee Time",
          en: "Animated advertisement for Coffee Time",
        },
      },
    ],
  },

  {
    slug: "cooksy",
    number: "05",

    title: {
      sv: "En mer inspirerande väg till matlagning",
      en: "A More Inspiring Way to Cook",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · GRUPPARBETE",
      en: "UNIVERSITY PROJECT · GROUP PROJECT",
    },

    type: {
      sv: "UX · UI-design · Visuell design",
      en: "UX · UI Design · Visual Design",
    },

    description: {
      sv: "En användarcentrerad matlagningsplattform utvecklad i grupp, med fokus på recept, måltidsplanering, kostpreferenser och en inspirerande digital matlagningsupplevelse.",
      en: "A user-centered cooking platform developed as a group project, focusing on recipes, meal planning, dietary preferences and an engaging digital cooking experience.",
    },

    longDescription: {
      sv: "Cooksy är en digital plattform för människor som vill upptäcka, laga och dela recept på ett enkelt och inspirerande sätt. Projektet utvecklades i grupp med fokus på att kombinera funktionalitet, användarvänlighet och ett mer lekfullt visuellt uttryck. Plattformen innehåller bland annat receptsökning, filtrering efter kostpreferenser, näringsinformation, måltidsplanering och sociala funktioner för att följa, kommentera och recensera recept. Mitt främsta bidrag låg inom den visuella designen, där jag bland annat skapade Cooksy-maskoten i form av en illustrerad kockmössa samt flera av de grafiska illustrationerna och dekorativa elementen i Adobe Illustrator. Jag bidrog även till gränssnittsdesign och arbetade tillsammans med gruppen genom projektets olika designiterationer.",
      en: "Cooksy is a digital platform for people who want to discover, cook and share recipes in a simple and engaging way. The project was developed as a group, focusing on combining functionality, usability and a more playful visual expression. The platform includes recipe search, dietary filtering, nutritional information, meal planning and social features for following, commenting on and reviewing recipes. My main contribution was within the visual design, where I created the Cooksy mascot in the form of an illustrated chef’s hat, along with several of the platform’s graphic illustrations and decorative elements in Adobe Illustrator. I also contributed to the interface design and worked with the group throughout the different design iterations.",
    },

    tags: ["Figma", "UX", "UI Design", "Illustration"],

    image: "/images/projectK/Komslag.png",

    caseImage: "/images/projectK/Kdator.png",

    role: {
      sv: "UX · UI · Visuell design · Illustration",
      en: "UX · UI · Visual design · Illustration",
    },

    projectType: {
      sv: "Grupprojekt",
      en: "Group project",
    },

    challenge: {
      sv: "Utmaningen var att skapa en plattform som gjorde matlagning både enklare och mer inspirerande. Användaren skulle kunna hitta recept utifrån sina egna preferenser, planera måltider och få tillgång till relevant information utan att gränssnittet upplevdes överväldigande. Samtidigt behövde designen skapa en tydlig identitet och kännas mer personlig än traditionella receptplattformar.",
      en: "The challenge was to create a platform that made cooking both easier and more inspiring. Users needed to be able to discover recipes based on their preferences, plan meals and access relevant information without feeling overwhelmed by the interface. At the same time, the design needed a clear identity and a more personal character than traditional recipe platforms.",
    },

    process: {
      sv: "Projektet genomfördes iterativt och började med målgruppsanalys, user stories och enkla lofi-skisser för att strukturera plattformens viktigaste funktioner och användarflöden. Därefter utvecklade gruppen en hifi-prototyp i Figma. Den första versionen upplevdes som för statisk och saknade en tydlig visuell identitet, vilket ledde till att designen omarbetades. I den andra iterationen arbetade vi mer aktivt med färg, kontrast, grafiska element och en tydligare visuell riktning. Mitt fokus låg särskilt på att utveckla de illustrativa delarna av identiteten. Jag skapade bland annat den illustrerade kockmössan som blev Cooksys återkommande maskot, samt köksredskap och dekorativa gröna former i Adobe Illustrator. Dessa element användes för att ge gränssnittet mer personlighet, dynamik och en lekfull känsla.",
      en: "The project followed an iterative process, beginning with target audience analysis, user stories and low-fidelity sketches to structure the platform’s key features and user flows. The group then developed a high-fidelity prototype in Figma. The first version felt too static and lacked a distinctive visual identity, which led us to rethink the design. In the second iteration, we worked more intentionally with color, contrast, graphic elements and a stronger visual direction. My particular focus was on developing the illustrative parts of the identity. I created the illustrated chef’s hat that became Cooksy’s recurring mascot, along with kitchen utensils and decorative green shapes in Adobe Illustrator. These elements helped give the interface more personality, movement and a playful character.",
    },

    result: {
      sv: "Resultatet blev en användarvänlig och visuellt lekfull matlagningsplattform där funktionalitet och personlig design kombineras. Genom recept, filtrering, måltidsplanering och social interaktion skapar Cooksy en sammanhängande upplevelse för att upptäcka och dela mat. De egenproducerade illustrationerna och Cooksy-maskoten bidrar samtidigt till en tydlig visuell identitet och gör plattformen mer personlig och inbjudande.",
      en: "The result was a user-friendly and visually playful cooking platform where functionality and distinctive design come together. Through recipes, filtering, meal planning and social interaction, Cooksy creates a cohesive experience for discovering and sharing food. The original illustrations and Cooksy mascot also contribute to a strong visual identity, making the platform feel more personal and inviting.",
    },

    gallery: [
      {
        src: "/images/projectK/Kmoodboard.jpg",
        caption: {
          sv: "Moodboard och visuell riktning för Cooksy",
          en: "Moodboard and visual direction for Cooksy",
        },
      },
      {
        src: "/images/projectK/KgrafiskProfil.png",
        caption: {
          sv: "Egna illustrationer och grafiska element skapade i Adobe Illustrator",
          en: "Original illustrations and graphic elements created in Adobe Illustrator",
        },
      },
      {
        src: "/images/project4/mascot.png",
        caption: {
          sv: "Cooksy-maskoten, en illustrerad kockmössa utvecklad för plattformens visuella identitet",
          en: "The Cooksy mascot, an illustrated chef’s hat developed for the platform’s visual identity",
        },
      },
      {
        src: "/images/project4/interface.png",
        caption: {
          sv: "Exempel på gränssnitt och receptpresentation",
          en: "Example of the interface and recipe presentation",
        },
      },
      {
        src: "/images/project4/mealplanner.png",
        caption: {
          sv: "Interaktiv måltidsplanerare för att organisera veckans recept",
          en: "Interactive meal planner for organizing weekly recipes",
        },
      },
    ],
  },

  {
    slug: "spooky-town",
    number: "06",

    title: {
      sv: "En animerad berättelse i 3D",
      en: "An Animated Story in 3D",
    },

    kicker: {
      sv: "UNIVERSITETSPROJEKT · 3D-ANIMATION",
      en: "UNIVERSITY PROJECT · 3D ANIMATION",
    },

    type: {
      sv: "3D-modellering · Animation · Rendering",
      en: "3D Modelling · Animation · Rendering",
    },

    description: {
      sv: "Ett individuellt 3D-projekt där jag skapade en kort animerad film från grunden, med fokus på modellering, riggning, animation, ljussättning och rendering.",
      en: "An individual 3D project where I created a short animated film from scratch, focusing on modelling, rigging, animation, lighting and rendering.",
    },

    longDescription: {
      sv: "Projektet var ett individuellt universitetsarbete där jag utvecklade en kort animerad film i Blender från idé till färdig rendering. Jag modellerade bland annat en bil, en spindel och filmens miljö, och arbetade med både icke-destruktiv modellering och strukturerad datastruktur. Spindeln riggades med armatur och inverse kinematics för att skapa en animerad gångcykel, medan bilen animerades längs en modellerad väg med hjälp av en Follow Path-constraint. Jag arbetade även med kamerarörelser, animerad ljussättning, UV-mappade och procedurala material samt compositing och renderpass för att skapa filmens slutliga uttryck.",
      en: "The project was an individual university assignment where I developed a short animated film in Blender from concept to final render. I modelled elements including a car, a spider and the surrounding environment, working with both non-destructive modelling and a structured data setup. The spider was rigged using an armature and inverse kinematics to create a walking cycle, while the car was animated along a custom road using a Follow Path constraint. I also worked with camera movement, animated lighting, UV-mapped and procedural materials, as well as compositing and render passes to create the final visual result.",
    },

    tags: ["Blender", "3D Modelling", "Animation", "Rigging", "Rendering"],

    image: "/images/projectS/Somslag.png",

    caseImage: "/images/projectS/Somslag.png",

    role: {
      sv: "3D-modellering · Animation · Riggning · Rendering",
      en: "3D modelling · Animation · Rigging · Rendering",
    },

    projectType: {
      sv: "Individuellt universitetsprojekt",
      en: "Individual university project",
    },

    challenge: {
      sv: "Utmaningen var att skapa en komplett animerad 3D-film där modellering, animation, kamera, ljus och rendering fungerade som en sammanhängande helhet. Projektet krävde att jag självständigt byggde upp flera modeller och en miljö, skapade en fungerande rigg för spindeln och utvecklade animationer som kunde kommunicera rörelse och skapa en tydlig filmisk sekvens.",
      en: "The challenge was to create a complete animated 3D film where modelling, animation, camera work, lighting and rendering worked together as a cohesive whole. The project required me to independently build several models and an environment, create a functional rig for the spider, and develop animations that communicated movement while creating a clear cinematic sequence.",
    },

    process: {
      sv: "Arbetet började med att bygga upp filmens olika objekt från primitiva former. Genom loop cuts, extruderingar, insets och modifiers utvecklade jag modellerna och arbetade med quad-baserad topologi för att möjliggöra vidare detaljering och animation. Därefter byggde jag upp scenen och arbetade med riggning och animation, där spindeln fick en egen IK-baserad rigg och gångcykel medan bilen animerades längs vägen. I nästa steg arbetade jag med kameror, ljussättning och material för att skapa filmens stämning. Slutligen använde jag olika renderpass och compositing för att bearbeta och sammanställa det slutliga visuella resultatet.",
      en: "The process began by building the film's individual objects from primitive shapes. Using loop cuts, extrusions, insets and modifiers, I developed the models while working with quad-based topology to support further detailing and animation. I then built the scene and worked on rigging and animation, creating an IK-based rig and walking cycle for the spider while animating the car along the road. The next stage focused on cameras, lighting and materials to establish the atmosphere of the film. Finally, I used multiple render passes and compositing to refine and assemble the final visual result.",
    },

    result: {
      sv: "Resultatet blev en kort animerad 3D-film där en bil färdas genom en mörk miljö och möter oväntade element längs vägen. Genom animation, kamerarörelser, ljussättning och ljudeffekter skapades en lekfull och stämningsfull filmsekvens. Projektet resulterade i en färdig animerad film och bedömdes på högsta nivå inom projektets områden för modellering, animation och rendering.",
      en: "The result was a short animated 3D film in which a car travels through a dark environment and encounters unexpected elements along the way. Animation, camera movement, lighting and sound effects were combined to create a playful and atmospheric sequence. The project resulted in a finished animated film and was graded at the highest level across the project's modelling, animation and rendering components.",
    },

    video: {
      src: "/videos/projectS/spookyTown.mp4",
      caption: {
        sv: "Den färdiga animerade filmen",
        en: "The final animated film",
      },
    },
  },
];
