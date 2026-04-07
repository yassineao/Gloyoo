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
        { label: "Leistungen", href: "#services" },
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
        { label: "Services", href: "#services" },
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
