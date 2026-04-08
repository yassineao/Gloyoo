import type { LocaleDictionary } from "../types/LocaleDictionary";

export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];
export type { LocaleDictionary };

export const dictionaries: Record<Locale, LocaleDictionary> = {
  de: {
    localeName: "Deutsch",
    nav: {
      ariaLabel: "Hauptnavigation",
      homeAriaLabel: "Zur Startseite von Gloyoo",
      items: [
        { label: "Vorteile", href: "#advantages" },
        {
          label: "Leistungen",
          href: "#services",
          children: [
            {
              label: "Social Media Betreuung",
              href: "/services/social-media",
            },
            {
              label: "Content Creation",
              href: "/services/content-creation",
            },
            {
              label: "Performance Marketing",
              href: "/services/performance-marketing",
            },
            { label: "Webdesign", href: "/services/webdesign" },
          ],
        },
        { label: "Ueber uns", href: "#about-us" },
      ],
      contactLabel: "Beratung anfragen",
      mobileMenuLabel: "Menue",
      switchLabel: "EN",
    },
    footer: {
      tagline: "Social Media, Content und Webdesign fuer mehr Sichtbarkeit.",
      navigationTitle: "Navigation",
      servicesTitle: "Leistungen",
      contactTitle: "Kontakt",
      navigationLinks: [
        { label: "Startseite", href: "#home" },
        { label: "Vorteile", href: "#advantages" },
        { label: "Leistungen", href: "#services" },
        { label: "Ueber uns", href: "#about-us" },
      ],
      serviceLinks: [
        { label: "Social Media Betreuung", href: "#services-list" },
        { label: "Content Creation", href: "#services-list" },
        { label: "Performance Marketing", href: "#services-list" },
        { label: "Webdesign", href: "#about-us" },
      ],
      contactLinks: [
        { label: "Beratung anfragen", href: "#about-us" },
        { label: "Projekt starten", href: "#home" },
        { label: "Leistungen entdecken", href: "#services" },
      ],
      rights: "Alle Rechte vorbehalten.",
      legalLinks: [
        { label: "Datenschutz", href: "#about-us" },
        { label: "Impressum", href: "#about-us" },
      ],
    },
    home: {
      metadata: {
        title: "Social Media Agentur fuer mehr Sichtbarkeit und Kunden",
        description:
          "Social Media Betreuung, Content Creation, Performance Marketing und moderne Webseiten fuer Unternehmen, die online sichtbar werden und mehr Anfragen gewinnen wollen.",
        locale: "de_DE",
        keywords: [
          "Social Media Agentur",
          "Webagentur Deutschland",
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
          "Leadgenerierung",
          "Online Sichtbarkeit",
          "Gloyoo",
        ],
      },
      hero: {
        eyebrow: "Social Media Agentur und Webagentur aus Deutschland",
        titleFirst: "Mehr Kunden",
        titleSecond: "durch Social Media und moderne Webseiten",
        description:
          "Gloyoo ist Ihre Social Media und Webagentur in Deutschland. Wir helfen Unternehmen dabei, online sichtbar zu werden, Vertrauen aufzubauen und qualifizierte Kundenanfragen zu gewinnen.",
        primaryCta: "Kostenloses Beratungsgespraech",
        secondaryCta: "Leistungen ansehen",
        videoAlt: "Video-Vorschau einer Social-Media-Kampagne von Gloyoo",
        imageAlt: "Design-Vorschau einer modernen Website von Gloyoo",
      },
      advantages: {
        eyebrow: "Ihre Vorteile",
        title: "Darum entscheiden sich Unternehmen fuer Gloyoo",
        description:
          "Wir verbinden kreative Inhalte mit klarer Strategie, damit Social Media nicht nur gut aussieht, sondern Ihr Unternehmen auch wirklich voranbringt.",
        items: [
          {
            value: "Mehr",
            title: "Sichtbarkeit",
            subtitle:
              "Ihre Marke wird dort sichtbar, wo Ihre Zielgruppe jeden Tag unterwegs ist.",
          },
          {
            value: "Mehr",
            title: "Anfragen",
            subtitle:
              "Wir fokussieren uns nicht nur auf Reichweite, sondern auf qualifizierte Kundenanfragen.",
          },
          {
            value: "Weniger",
            title: "Aufwand",
            subtitle:
              "Strategie, Content und Betreuung kommen aus einer Hand, damit Sie Zeit sparen.",
          },
        ],
      },
      services: {
        eyebrow: "Unsere Services",
        title: "Social Media Leistungen, die Ihr Unternehmen wachsen lassen",
        description:
          "Wir unterstuetzen Unternehmen mit kreativen Inhalten, klarer Strategie, Performance-Marketing und digitalen Erlebnissen, damit aus Aufmerksamkeit echte Ergebnisse werden.",
        cta: "Beratung anfragen",
        items: [
          {
            title: "Social Media Betreuung",
            description:
              "Wir planen, gestalten und betreuen Ihre Kanaele professionell, damit Ihre Marke einheitlich, aktiv und vertrauenswuerdig auftritt.",
          },
          {
            title: "Content Creation",
            description:
              "Von Reels und Posts bis zu Storys und Werbemitteln erstellen wir Inhalte, die Aufmerksamkeit erzeugen und im Kopf bleiben.",
          },
          {
            title: "Performance Marketing",
            description:
              "Mit gezielten Kampagnen auf Instagram, Facebook und Co. bringen wir mehr Reichweite, mehr Leads und mehr Umsatz in Ihr Unternehmen.",
          },
        ],
      },
      about: {
        eyebrow: "Ueber Gloyoo",
        title: "Ihre Agentur fuer Social Media und moderne Webseiten",
        paragraphs: [
          "Bei Gloyoo unterstuetzen wir Unternehmen dabei, ihre digitale Praesenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
          "Wir kombinieren modernes Webdesign mit effektiven Social Media Strategien und begleiten Marken von der Positionierung bis zur laufenden Betreuung - alles aus einer Hand.",
        ],
        cta: "Projekt mit uns starten",
      },
      scrollTexts: ["Social Media", "Moderne Webseiten"],
      seo: {
        areaServed: "Deutschland",
        knowsAbout: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Leistungen von Gloyoo",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
        ],
      },
    },
    servicePage: {
      metadata: {
        title: "Leistungen von Gloyoo | Social Media, Content und Webdesign",
        description:
          "Entdecken Sie die Leistungen von Gloyoo: strategische Social-Media-Betreuung, Content Creation, Performance Marketing und Webdesign fuer mehr Sichtbarkeit und Anfragen.",
        locale: "de_DE",
        keywords: [
          "Gloyoo Leistungen",
          "Social Media Betreuung",
          "Content Creation Agentur",
          "Performance Marketing",
          "Webdesign Deutschland",
        ],
      },
      hero: {
        "social-media": {
                    imageUrl: "https://imgs.search.brave.com/k2Mb30Q2GikWc_eQ-lCn9Ra7fIm3d-Lm-8ePAocKomI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tLzBlNmZi/OTMwLTI2NGItNGRl/Ny1iNzRjLTM5ZTMw/MzMzNzcwNy9oZWFk/ZXJwaW50ZXJlc3Qu/cG5n",

          badge: "Social Media Betreuung",
          title: "Social Media Betreuung, die Ihre Marke sichtbar macht",
          description:
            "Wir planen, gestalten und betreuen Ihre Kanaele so, dass Ihre Marke professionell auftritt und regelmaessig qualifizierte Anfragen gewinnt.",
          primaryCta: "Beratung anfragen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Visual fuer Social Media Betreuung von Gloyoo",
        },
        "content-creation": {
          badge: "Content Creation",
                    imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",

          title: "Content Creation, die Aufmerksamkeit in Vertrauen verwandelt",
          description:
            "Von Reels bis Brand Assets erstellen wir Inhalte, die Ihre Zielgruppe ansprechen, Wiedererkennung schaffen und Ihre Marke staerken.",
          primaryCta: "Projekt anfragen",
          secondaryCta: "Referenzen ansehen",
          imageAlt: "Visual fuer Content Creation von Gloyoo",
        },
        "performance-marketing": {
                    imageUrl: "https://imgs.search.brave.com/k2Mb30Q2GikWc_eQ-lCn9Ra7fIm3d-Lm-8ePAocKomI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tLzBlNmZi/OTMwLTI2NGItNGRl/Ny1iNzRjLTM5ZTMw/MzMzNzcwNy9oZWFk/ZXJwaW50ZXJlc3Qu/cG5n",

          badge: "Performance Marketing",
          title: "Performance Marketing mit Fokus auf Leads und Umsatz",
          description:
            "Mit datenbasierten Kampagnen steigern wir Reichweite, Conversions und messbare Ergebnisse auf den Kanaelen, die fuer Ihr Unternehmen zaehlen.",
          primaryCta: "Strategie anfragen",
          secondaryCta: "Potenzial entdecken",
          imageAlt: "Visual fuer Performance Marketing von Gloyoo",
        },
        webdesign: {
                    imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",

          badge: "Webdesign",
          title: "Webdesign, das ueberzeugt und Anfragen erzeugt",
          description:
            "Wir entwickeln moderne Websites, die Ihre Marke professionell praesentieren, Vertrauen aufbauen und Besucher in Kundenanfragen verwandeln.",
          primaryCta: "Website planen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Visual fuer Webdesign von Gloyoo",
        },
      },
      features: {
        badge: "Unsere Kernleistungen",
        title: "Jede Marke braucht einen klaren, starken digitalen Auftritt.",
        description:
          "Wir kombinieren Strategie, Kreativitaet und Umsetzung, damit Ihre Online-Praesenz professionell wirkt und messbare Ergebnisse liefert.",
        items: [
          {
            title: "Mehr Reichweite",
            description:
              "Steigern Sie Sichtbarkeit, Website-Besuche und qualifizierte Kontakte ueber starke Inhalte und Kampagnen.",
            imageAlt: "Diagramm zur Reichweitensteigerung",
            statLabel: "45%",
          },
          {
            title: "Struktur fuer Ihr Marketing",
            description:
              "Klare Prozesse, abgestimmte Inhalte und ein konsistenter Markenauftritt fuer nachhaltiges Wachstum.",
            imageAlt: "Dashboard zur Marketingstruktur",
          },
          {
            title: "Nahtlose Umsetzung",
            description:
              "Webdesign, Content und Performance Marketing greifen ineinander und sorgen fuer ein stimmiges Gesamterlebnis.",
            imageAlt: "Illustration zur digitalen Integration",
          },
        ],
        sections: [
          {
            title: "Projekte strategisch steuern",
            points: [
              "Klare Content- und Kampagnenplanung fuer Ihre Ziele",
              "Abgestimmte Prozesse zwischen Marke, Design und Performance",
              "Messbare Prioritaeten fuer nachhaltiges Wachstum",
              "Mehr Struktur fuer interne und externe Zusammenarbeit",
              "Schnellere Abstimmungen mit klaren Freigabewegen",
              "Bessere Uebersicht ueber laufende Massnahmen",
              "Verlaessliche Umsetzung ueber alle Kanaele hinweg",
              "Transparente Kommunikation zu Fortschritt und Ergebnissen",
              "Planbare Massnahmen statt spontaner Einzelaktionen",
            ],
          },
          {
            title: "Ihre Website gezielt weiterentwickeln",
            points: [
              "Texte und Inhalte passend zu Ihrer Zielgruppe strukturieren",
              "Design und Nutzerfuehrung fuer mehr Vertrauen optimieren",
              "Klare Botschaften fuer Angebote und Leistungen ausarbeiten",
              "Responsives Erlebnis fuer Mobile und Desktop sicherstellen",
              "Schnelle Anpassungen ohne unnoetige Komplexitaet ermoeglichen",
              "Einheitlichen Markenauftritt ueber alle Seiten halten",
              "Conversion-starke Elemente bewusst platzieren",
              "Inhalte flexibel fuer Kampagnen und Aktionen erweitern",
              "Technische Basis fuer Sichtbarkeit und Performance staerken",
            ],
          },
          {
            title: "Markenauftritt konsistent gestalten",
            points: [
              "Social Media, Website und Werbemittel visuell verbinden",
              "Wiedererkennbare Inhalte fuer eine starke Markenwirkung entwickeln",
              "Designsysteme schaffen, die im Alltag nutzbar bleiben",
              "Vorlagen fuer Posts, Landingpages und Kampagnen vorbereiten",
              "Kreative Ideen sauber in die Umsetzung bringen",
              "Markenwerte in Bildsprache und Tonalitaet uebersetzen",
              "Flexibel auf neue Formate und Trends reagieren",
              "Professionellen Auftritt ueber alle Kontaktpunkte sichern",
              "Mehr Konsistenz ohne an Individualitaet zu verlieren",
            ],
          },
        ],
      },
      seo: {
        areaServed: "Deutschland",
        knowsAbout: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Leistungen von Gloyoo",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    form: {
      metadata: {
        title: "Kontaktformular fuer Ihre Anfrage an Gloyoo",
        description:
          "Senden Sie Gloyoo Ihre Anfrage zu Social Media, Content Creation, Performance Marketing oder Webdesign und wir melden uns zeitnah bei Ihnen.",
        locale: "de_DE",
        keywords: [
          "Kontakt Gloyoo",
          "Anfrage Social Media Agentur",
          "Kontaktformular Webagentur",
          "Beratung Social Media",
          "Webdesign Anfrage",
        ],
      },
      content: {
        title: "Kontakt aufnehmen",
        description:
          "Sie haben eine Frage oder schon eine konkrete Idee? Unser Team freut sich darauf, mit Ihnen ins Gespraech zu kommen.",
        fields: {
          companyName: "Firmenname",
          lastName: "Nachname",
          email: "E-Mail",
          phoneNumber: "Telefonnummer",
          message: "Nachricht",
        },
        placeholders: {
          companyName: "Muster GmbH",
          lastName: "Mustermann",
          email: "hallo@unternehmen.de",
          phoneNumber: "+49 123 456789",
          message: "Erzaehlen Sie uns kurz von Ihrem Projekt",
        },
        consent: {
          prefix: "Sie stimmen unseren",
          terms: "Bedingungen",
          and: "und der",
          privacyPolicy: "Datenschutzerklaerung",
        },
        submitLabel: "Nachricht senden",
        testimonial: {
          quote:
            "Wir entwickeln keine Standardloesungen. Gemeinsam schaffen wir einen Auftritt, der sichtbar macht, wofuer Ihre Marke steht.",
          author: "Gloyoo Team",
          imageAlt: "Abstrakte 3D-Formen im Hintergrund des Kontaktformulars",
          imageUrl: "https://assets.prebuiltui.com/images/components/form/form-rightside-image.png",
        },
      },
      seo: {
        areaServed: "Deutschland",
        knowsAbout: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Kontakt und Beratung von Gloyoo",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
  },
  en: {
    localeName: "English",
    nav: {
      ariaLabel: "Main navigation",
      homeAriaLabel: "Go to the Gloyoo homepage",
      items: [
        { label: "Benefits", href: "#advantages" },
        {
          label: "Services",
          href: "#services",
          children: [
            {
              label: "Social Media Management",
              href: "/services/social-media",
            },
            {
              label: "Content Creation",
              href: "/services/content-creation",
            },
            {
              label: "Performance Marketing",
              href: "/services/performance-marketing",
            },
            { label: "Web Design", href: "/services/webdesign" },
          ],
        },
        { label: "About", href: "#about-us" },
      ],
      contactLabel: "Book a consultation",
      mobileMenuLabel: "Menu",
      switchLabel: "DE",
    },
    footer: {
      tagline: "Social media, content, and web design for stronger visibility.",
      navigationTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      navigationLinks: [
        { label: "Home", href: "#home" },
        { label: "Benefits", href: "#advantages" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about-us" },
      ],
      serviceLinks: [
        { label: "Social Media Management", href: "#services-list" },
        { label: "Content Creation", href: "#services-list" },
        { label: "Performance Marketing", href: "#services-list" },
        { label: "Web Design", href: "#about-us" },
      ],
      contactLinks: [
        { label: "Book a consultation", href: "#about-us" },
        { label: "Start a project", href: "#home" },
        { label: "Explore services", href: "#services" },
      ],
      rights: "All rights reserved.",
      legalLinks: [
        { label: "Privacy", href: "#about-us" },
        { label: "Legal notice", href: "#about-us" },
      ],
    },
    home: {
      metadata: {
        title: "Social Media Agency for More Visibility and Customers",
        description:
          "Social media management, content creation, performance marketing, and modern websites for companies that want to grow online visibility and generate more qualified leads.",
        locale: "en_US",
        keywords: [
          "social media agency",
          "web agency Germany",
          "social media management",
          "content creation",
          "performance marketing",
          "web design",
          "lead generation",
          "online visibility",
          "Gloyoo",
        ],
      },
      hero: {
        eyebrow: "Social media and web agency based in Germany",
        titleFirst: "More Customers through",
        titleSecond: " social media and modern websites",
        description:
          "Gloyoo is your social media and web agency in Germany. We help companies build visibility online, strengthen trust, and turn attention into qualified customer inquiries.",
        primaryCta: "Free consultation",
        secondaryCta: "Explore services",
        videoAlt: "Video preview of a Gloyoo social media campaign",
        imageAlt: "Design preview of a modern Gloyoo website",
      },
      advantages: {
        eyebrow: "Your benefits",
        title: "Why companies choose Gloyoo",
        description:
          "We combine creative content with a clear strategy so your social media presence does more than look good. It helps your business grow.",
        items: [
          {
            value: "More",
            title: "Visibility",
            subtitle:
              "Your brand becomes visible where your target audience already spends time every day.",
          },
          {
            value: "More",
            title: "Leads",
            subtitle:
              "We focus on qualified inquiries, not just reach, so your marketing turns into real opportunities.",
          },
          {
            value: "Less",
            title: "Effort",
            subtitle:
              "Strategy, content, and ongoing support come from one team so you can save time.",
          },
        ],
      },
      services: {
        eyebrow: "Our services",
        title: "Social media services that help your business grow",
        description:
          "We support companies with creative content, clear strategy, performance marketing, and digital experiences that turn attention into measurable results.",
        cta: "Book a consultation",
        items: [
          {
            title: "Social Media Management",
            description:
              "We plan, design, and manage your channels professionally so your brand stays consistent, active, and trustworthy.",
          },
          {
            title: "Content Creation",
            description:
              "From reels and posts to stories and campaign assets, we create content that captures attention and stays memorable.",
          },
          {
            title: "Performance Marketing",
            description:
              "With targeted campaigns across Instagram, Facebook, and more, we drive more reach, more leads, and more revenue for your business.",
          },
        ],
      },
      about: {
        eyebrow: "About Gloyoo",
        title: "Your agency for social media and modern websites",
        paragraphs: [
          "At Gloyoo, we help companies build and improve a professional digital presence with a focus on measurable outcomes: more reach, more inquiries, and more revenue.",
          "We combine modern web design with effective social media strategies and support brands from positioning to long-term execution in one place.",
        ],
        cta: "Start your project with us",
      },
      scrollTexts: ["Social Media", "Modern Websites"],
      seo: {
        areaServed: "Germany",
        knowsAbout: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
        offerCatalogName: "Gloyoo services",
        services: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
        ],
      },
    },
    servicePage: {
      metadata: {
        title: "Gloyoo Services | Social Media, Content and Web Design",
        description:
          "Explore Gloyoo services including strategic social media management, content creation, performance marketing, and web design for stronger visibility and more qualified inquiries.",
        locale: "en_US",
        keywords: [
          "Gloyoo services",
          "social media management",
          "content creation agency",
          "performance marketing",
          "web design Germany",
        ],
      },
      hero: {
        "social-media": {
          badge: "Social Media Management",
          imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",
          title: "Social media management that makes your brand visible",
          description:
            "We plan, design, and manage your channels so your brand shows up professionally and consistently generates qualified inquiries.",
          primaryCta: "Book a consultation",
          secondaryCta: "Learn more",
          imageAlt: "Visual for Gloyoo social media management",
        },
        "content-creation": {
          badge: "Content Creation",
                    imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",

          title: "Content creation that turns attention into trust",
          description:
            "From reels to brand assets, we create content that speaks to your audience, builds recognition, and strengthens your brand.",
          primaryCta: "Start your project",
          secondaryCta: "View examples",
          imageAlt: "Visual for Gloyoo content creation",
        },
        "performance-marketing": {
                    imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",

          badge: "Performance Marketing",
          title: "Performance marketing focused on leads and revenue",
          description:
            "With data-driven campaigns, we increase reach, conversions, and measurable results on the channels that matter most to your business.",
          primaryCta: "Request a strategy",
          secondaryCta: "See the potential",
          imageAlt: "Visual for Gloyoo performance marketing",
        },
        webdesign: {
          badge: "Web Design",
                    imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",

          title: "Web design that convinces and drives inquiries",
          description:
            "We build modern websites that present your brand professionally, build trust, and turn visitors into real customer inquiries.",
          primaryCta: "Plan your website",
          secondaryCta: "Learn more",
          imageAlt: "Visual for Gloyoo web design",
        },
      },
      features: {
        badge: "Our core features",
        title: "Every brand needs a clear and consistent digital presence.",
        description:
          "We combine strategy, creativity, and execution so your online presence feels professional and delivers measurable results.",
        items: [
          {
            title: "More reach",
            description:
              "Increase visibility, website visits, and qualified leads through strong content and focused campaigns.",
            imageAlt: "Graph showing audience growth",
            statLabel: "45%",
          },
          {
            title: "Marketing structure for teams",
            description:
              "Build clear processes, aligned content, and a consistent brand presence that supports sustainable growth.",
            imageAlt: "Dashboard showing marketing structure",
          },
          {
            title: "Seamless execution",
            description:
              "Web design, content, and performance marketing work together to create one strong digital experience.",
            imageAlt: "Illustration of seamless digital integration",
          },
        ],
        sections: [
          {
            title: "Manage your projects strategically",
            points: [
              "Clear content and campaign planning around your goals",
              "Aligned processes across brand, design, and performance",
              "Measurable priorities that support sustainable growth",
              "More structure for internal and external collaboration",
              "Faster approvals with a clearer review flow",
              "Better visibility into active initiatives",
              "Reliable execution across every channel",
              "Transparent communication around progress and results",
              "Planned action instead of disconnected one-off efforts",
            ],
          },
          {
            title: "Improve your website with purpose",
            points: [
              "Structure copy and content around your target audience",
              "Refine design and user flow to build more trust",
              "Clarify the value of your offers and services",
              "Create a smooth experience across mobile and desktop",
              "Make updates quickly without unnecessary complexity",
              "Keep your brand presence consistent across pages",
              "Place conversion-focused elements more intentionally",
              "Expand content flexibly for campaigns and launches",
              "Strengthen the technical foundation for visibility and performance",
            ],
          },
          {
            title: "Shape a more consistent brand presence",
            points: [
              "Connect social media, website, and campaign assets visually",
              "Create recognizable content that strengthens your brand",
              "Build design systems your team can actually use",
              "Prepare templates for posts, landing pages, and campaigns",
              "Turn creative ideas into polished execution",
              "Translate brand values into visuals and tone of voice",
              "Adapt to new formats and trends with more flexibility",
              "Maintain a professional presence across touchpoints",
              "Increase consistency without losing individuality",
            ],
          },
        ],
      },
      seo: {
        areaServed: "Germany",
        knowsAbout: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
        offerCatalogName: "Gloyoo services",
        services: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
      },
    },
    form: {
      metadata: {
        title: "Contact Form for Your Gloyoo Inquiry",
        description:
          "Send Gloyoo your inquiry about social media management, content creation, performance marketing, or web design and we will get back to you soon.",
        locale: "en_US",
        keywords: [
          "contact Gloyoo",
          "social media agency inquiry",
          "web agency contact form",
          "social media consultation",
          "web design inquiry",
        ],
      },
      content: {
        title: "Get in touch",
        description:
          "Have a question or idea? Our approachable team would love to connect and support you.",
        fields: {
          companyName: "Company name",
          lastName: "Last name",
          email: "Email",
          phoneNumber: "Phone number",
          message: "Message",
        },
        placeholders: {
          companyName: "Acme Inc.",
          lastName: "Anderson",
          email: "hello@company.com",
          phoneNumber: "+1 342 123-456",
          message: "Tell us a bit about your project",
        },
        consent: {
          prefix: "You agree to our",
          terms: "terms",
          and: "and",
          privacyPolicy: "privacy policy",
        },
        submitLabel: "Send message",
        testimonial: {
          quote:
            "We do not build generic solutions. Together, we create a presence that shows what your brand truly stands for.",
          author: "Gloyoo Team",
          imageAlt: "Abstract 3D shapes in the contact form background",
          imageUrl:
            "https://assets.prebuiltui.com/images/components/form/form-rightside-image.png",
        },
      },
      seo: {
        areaServed: "Germany",
        knowsAbout: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
        offerCatalogName: "Gloyoo contact and consultation",
        services: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
      },
    },
  },
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "de" ? "en" : "de";
}
