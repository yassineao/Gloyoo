import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const deDictionary: LocaleDictionary = {
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
        { label: "Über uns", href: "#about-us" },
      ],
      contactLabel: "Beratung anfragen",
      mobileMenuLabel: "Menü",
      switchLabel: "EN",
    },
    footer: {
      tagline: "Social Media, Content und Webdesign für mehr Sichtbarkeit.",
      navigationTitle: "Navigation",
      servicesTitle: "Leistungen",
      contactTitle: "Kontakt",
      navigationLinks: [
        { label: "Startseite", href: "/" }, // ✅ Fixed: was "#home"
        { label: "Vorteile", href: "#advantages" },
        { label: "Leistungen", href: "#services" },
        { label: "Über uns", href: "#about-us" },
      ],
      serviceLinks: [
        { label: "Social Media Betreuung", href: "/services/social-media" }, // ✅ Fixed
        { label: "Content Creation", href: "/services/content-creation" }, // ✅ Fixed
        { label: "Performance Marketing", href: "/services/performance-marketing" }, // ✅ Fixed
        { label: "Webdesign", href: "/services/webdesign" }, // ✅ Fixed
      ],
      contactLinks: [
        { label: "Beratung anfragen", href: "/form" }, // ✅ Fixed
        { label: "Projekt starten", href: "/form" }, // ✅ Fixed
        { label: "Leistungen entdecken", href: "#services" },
      ],
      rights: "Alle Rechte vorbehalten.",
      legalLinks: [
        { label: "Datenschutz", href: "/privacy" }, // ✅ Fixed: was "#about-us"
        { label: "Impressum", href: "/impressum" }, // ✅ Fixed: was "#about-us"
      ],
    },
    home: {
      metadata: {
        // ✅ IMPROVED: More specific, keyword-rich title
        title: "Social Media Agentur | Content, Ads & Webdesign | Gloyoo",
        
        // ✅ IMPROVED: Removed "aus Deutschland", added remote positioning, more compelling
        description:
          "Social Media Agentur für mehr Sichtbarkeit und Kunden. Professionelle Betreuung, Content Creation und Performance Marketing. 100% remote, deutschlandweit verfügbar.",
        
        locale: "de_DE",
        
        // ✅ IMPROVED: Updated keywords (removed generic ones, added specific services)
        keywords: [
          "social media agentur",
          "content creation agentur",
          "performance marketing",
          "webdesign agentur",
          "instagram marketing",
          "facebook werbung",
          "social media betreuung",
          "online marketing agentur",
        ],
      },
      hero: {
        // ✅ IMPROVED: Removed "aus Deutschland" - focus on value
        eyebrow: "Social Media Agentur und Webagentur",
        
        titleFirst: "Mehr Kunden",
        titleSecond: "durch Social Media und moderne Webseiten",
        
        // ✅ IMPROVED: Removed location, added remote benefit
        description:
          "Wir helfen Unternehmen dabei, online sichtbar zu werden, Vertrauen aufzubauen und qualifizierte Kundenanfragen zu gewinnen. 100% remote, flexibel und deutschlandweit verfügbar.",
        
        primaryCta: "Kostenloses Beratungsgespräch",
        secondaryCta: "Leistungen ansehen",
        videoAlt: "Video-Vorschau einer Social-Media-Kampagne von Gloyoo",
        imageAlt: "Design-Vorschau einer modernen Website von Gloyoo",
      },
      advantages: {
        eyebrow: "Ihre Vorteile",
        title: "Darum entscheiden sich Unternehmen für Gloyoo",
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
          "Wir unterstützen Unternehmen mit kreativen Inhalten, klarer Strategie, Performance-Marketing und digitalen Erlebnissen, damit aus Aufmerksamkeit echte Ergebnisse werden.",
        cta: "Beratung anfragen",
        items: [
          {
            title: "Social Media Betreuung",
            description:
              "Wir planen, gestalten und betreuen Ihre Kanäle professionell, damit Ihre Marke einheitlich, aktiv und vertrauenswürdig auftritt.",
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
        eyebrow: "Über Gloyoo",
        title: "Ihre Agentur für Social Media und moderne Webseiten",
        
        // ✅ IMPROVED: Added remote positioning, removed generic filler
        paragraphs: [
          "Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
          "Als Remote-Agentur kombinieren wir modernes Webdesign mit effektiven Social Media Strategien und begleiten Marken von der Positionierung bis zur laufenden Betreuung – flexibel, digital und deutschlandweit verfügbar.",
        ],
        
        cta: "Projekt mit uns starten",
      },
      scrollTexts: ["Social Media", "Moderne Webseiten"],
      seo: {
        // ✅ IMPROVED: Updated for schema (consistent with metadata)
        areaServed: ["Germany", "Austria", "Switzerland"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
          "Instagram Marketing",
          "Facebook Advertising",
          "Digital Marketing",
        ],
        offerCatalogName: "Unsere Leistungen",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    servicePage: {
      metadata: {
        // ✅ IMPROVED: More specific, keyword-rich
        title: "Unsere Leistungen | Social Media, Content & Webdesign | Gloyoo",
        
        // ✅ IMPROVED: Better flow, removed "fuer" typo
        description:
          "Entdecken Sie unsere Leistungen: strategische Social-Media-Betreuung, Content Creation, Performance Marketing und Webdesign für mehr Sichtbarkeit und Anfragen.",
        
        locale: "de_DE",
        
        keywords: [
          "social media betreuung",
          "content creation agentur",
          "performance marketing",
          "webdesign",
          "instagram marketing",
          "facebook ads",
        ],
      },
      hero: {
        "social-media": {
          imageUrl: "/bg.jpg",
          badge: "Social Media Betreuung",
          title: "Social Media Betreuung, die Ihre Marke sichtbar macht",
          
          // ✅ IMPROVED: Fixed typo "Kanaele" → "Kanäle", "regelmaessig" → "regelmäßig"
          description:
            "Wir planen, gestalten und betreuen Ihre Kanäle so, dass Ihre Marke professionell auftritt und regelmäßig qualifizierte Anfragen gewinnt.",
          
          primaryCta: "Beratung anfragen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Social Media Betreuung von Gloyoo",
        },
        "content-creation": {
          badge: "Content Creation",
          imageUrl: "/bg.jpg",
          title: "Content Creation, die Aufmerksamkeit in Vertrauen verwandelt",
          
          // ✅ IMPROVED: Fixed typo "staerken" → "stärken"
          description:
            "Von Reels bis Brand Assets erstellen wir Inhalte, die Ihre Zielgruppe ansprechen, Wiedererkennung schaffen und Ihre Marke stärken.",
          
          primaryCta: "Projekt anfragen",
          secondaryCta: "Referenzen ansehen",
          imageAlt: "Content Creation von Gloyoo",
        },
        "performance-marketing": {
          imageUrl: "/bg.jpg",
          badge: "Performance Marketing",
          title: "Performance Marketing mit Fokus auf Leads und Umsatz",
          
          // ✅ IMPROVED: Fixed typo "Kanaelen" → "Kanälen", "zaehlen" → "zählen"
          description:
            "Mit datenbasierten Kampagnen steigern wir Reichweite, Conversions und messbare Ergebnisse auf den Kanälen, die für Ihr Unternehmen zählen.",
          
          primaryCta: "Strategie anfragen",
          secondaryCta: "Potenzial entdecken",
          imageAlt: "Performance Marketing von Gloyoo",
        },
        webdesign: {
          imageUrl: "/bg.jpg",
          badge: "Webdesign",
          
          // ✅ IMPROVED: Fixed typo "ueberzeugt" → "überzeugt"
          title: "Webdesign, das überzeugt und Anfragen erzeugt",
          
          // ✅ IMPROVED: Fixed typos "praesentieren" → "präsentieren"
          description:
            "Wir entwickeln moderne Websites, die Ihre Marke professionell präsentieren, Vertrauen aufbauen und Besucher in Kundenanfragen verwandeln.",
          
          primaryCta: "Website planen",
          secondaryCta: "Mehr erfahren",
          imageAlt: "Webdesign von Gloyoo",
        },
      },
      features: {
        badge: "Unsere Kernleistungen",
        title: "Jede Marke braucht einen klaren, starken digitalen Auftritt.",
        
        // ✅ IMPROVED: Fixed typos throughout
        description:
          "Wir kombinieren Strategie, Kreativität und Umsetzung, damit Ihre Online-Präsenz professionell wirkt und messbare Ergebnisse liefert.",
        
        items: [
          {
            title: "Mehr Reichweite",
            description:
              "Steigern Sie Sichtbarkeit, Website-Besuche und qualifizierte Kontakte über starke Inhalte und Kampagnen.",
            imageAlt: "Reichweitensteigerung durch Social Media",
            statLabel: "45%",
          },
          {
            title: "Struktur für Ihr Marketing",
            description:
              "Klare Prozesse, abgestimmte Inhalte und ein konsistenter Markenauftritt für nachhaltiges Wachstum.",
            imageAlt: "Marketing-Struktur und Prozesse",
          },
          {
            title: "Nahtlose Umsetzung",
            description:
              "Webdesign, Content und Performance Marketing greifen ineinander und sorgen für ein stimmiges Gesamterlebnis.",
            imageAlt: "Integrierte digitale Marketing-Lösungen",
          },
        ],
        sections: [
          {
            title: "Projekte strategisch steuern",
            points: [
              "Klare Content- und Kampagnenplanung für Ihre Ziele",
              "Abgestimmte Prozesse zwischen Marke, Design und Performance",
              "Messbare Prioritäten für nachhaltiges Wachstum",
              "Mehr Struktur für interne und externe Zusammenarbeit",
              "Schnellere Abstimmungen mit klaren Freigabewegen",
              "Bessere Übersicht über laufende Maßnahmen",
              "Verlässliche Umsetzung über alle Kanäle hinweg",
              "Transparente Kommunikation zu Fortschritt und Ergebnissen",
              "Planbare Maßnahmen statt spontaner Einzelaktionen",
            ],
          },
          {
            title: "Ihre Website gezielt weiterentwickeln",
            points: [
              "Texte und Inhalte passend zu Ihrer Zielgruppe strukturieren",
              "Design und Nutzerführung für mehr Vertrauen optimieren",
              "Klare Botschaften für Angebote und Leistungen ausarbeiten",
              "Responsives Erlebnis für Mobile und Desktop sicherstellen",
              "Schnelle Anpassungen ohne unnötige Komplexität ermöglichen",
              "Einheitlichen Markenauftritt über alle Seiten halten",
              "Conversion-starke Elemente bewusst platzieren",
              "Inhalte flexibel für Kampagnen und Aktionen erweitern",
              "Technische Basis für Sichtbarkeit und Performance stärken",
            ],
          },
          {
            title: "Markenauftritt konsistent gestalten",
            points: [
              "Social Media, Website und Werbemittel visuell verbinden",
              "Wiedererkennbare Inhalte für eine starke Markenwirkung entwickeln",
              "Designsysteme schaffen, die im Alltag nutzbar bleiben",
              "Vorlagen für Posts, Landingpages und Kampagnen vorbereiten",
              "Kreative Ideen sauber in die Umsetzung bringen",
              "Markenwerte in Bildsprache und Tonalität übersetzen",
              "Flexibel auf neue Formate und Trends reagieren",
              "Professionellen Auftritt über alle Kontaktpunkte sichern",
              "Mehr Konsistenz ohne an Individualität zu verlieren",
            ],
          },
        ],
      },
      hero2: {
        badge: "Warum Gloyoo?",
        title: "Gemeinsam schaffen wir einen Auftritt, der sichtbar macht, wofür Ihre Marke steht.",
        description:
          "Wir entwickeln keine Standardlösungen. Jedes Unternehmen, jede Marke und jedes Ziel ist anders. Deshalb arbeiten wir eng mit Ihnen zusammen, um eine individuelle Strategie und einen Auftritt zu schaffen, der wirklich zu Ihnen passt.",
        subtitle: "Lassen Sie uns gemeinsam Ihre digitale Präsenz gestalten.",
        subdescription:
          "Ob Social Media, Content oder Webdesign – wir bringen Ihre Marke online zum Strahlen und sorgen dafür, dass Sie dort sichtbar wird, wo Ihre Zielgruppe unterwegs ist.",
        imageAlt: "Abstrakte 3D-Formen im Hintergrund",
        imageUrl: "/bg.jpg",
      },
      seo: {
        areaServed: ["Germany", "Austria", "Switzerland"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
          "Instagram Marketing",
          "Facebook Advertising",
        ],
        offerCatalogName: "Unsere Leistungen",
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
        // ✅ IMPROVED: More action-oriented title
        title: "Kontakt & Beratung | Projekt mit Gloyoo starten",
        
        description:
          "Starten Sie Ihr Projekt mit Gloyoo. Kontaktieren Sie uns für Social Media, Content Creation, Performance Marketing oder Webdesign – wir melden uns zeitnah bei Ihnen.",
        
        locale: "de_DE",
        
        keywords: [
          "kontakt gloyoo",
          "beratung social media",
          "projekt anfragen",
          "social media agentur kontakt",
          "webdesign anfrage",
        ],
      },
      content: {
        title: "Kontakt aufnehmen",
        
        // ✅ IMPROVED: Fixed typo "Gespraech" → "Gespräch"
        description:
          "Sie haben eine Frage oder schon eine konkrete Idee? Unser Team freut sich darauf, mit Ihnen ins Gespräch zu kommen.",
        
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
          
          // ✅ IMPROVED: Fixed typo "Erzaehlen" → "Erzählen"
          message: "Erzählen Sie uns kurz von Ihrem Projekt",
        },
        consent: {
          prefix: "Sie stimmen unseren",
          terms: "Bedingungen",
          and: "und der",
          
          // ✅ IMPROVED: Fixed typo "Datenschutzerklaerung" → "Datenschutzerklärung"
          privacyPolicy: "Datenschutzerklärung",
          suffix: "zu.",
        },
        submitLabel: "Nachricht senden",
        testimonial: {
          quote:
            "Wir entwickeln keine Standardlösungen. Gemeinsam schaffen wir einen Auftritt, der sichtbar macht, wofür Ihre Marke steht.",
          author: "Gloyoo Team",
          imageAlt: "Abstrakte 3D-Formen im Hintergrund des Kontaktformulars",
          imageUrl: "/bg.jpg",
        },
      },
      seo: {
        areaServed: ["Germany", "Austria", "Switzerland"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Kontakt und Beratung",
        services: [
          "Social Media Betreuung",
          "Content Creation",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    pages: {
      about: {
        metadata: {
          title: "Über Uns | Gloyoo",
          description:
            "Erfahren Sie mehr über Gloyoo, unsere Arbeitsweise und wie wir Unternehmen mit Social Media, Content und Webdesign beim Wachstum unterstützen.",
          locale: "de_DE",
          keywords: [
            "über gloyoo",
            "social media agentur team",
            "webdesign agentur",
            "digitale agentur werte",
          ],
        },
        eyebrow: "Über Gloyoo",
        title: "Ihre Agentur für Social Media und moderne Webseiten",
        intro:
          "Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
        sections: [
          {
            title: "Unser Ansatz",
            paragraphs: [
              "Bei Gloyoo unterstützen wir Unternehmen dabei, ihre digitale Präsenz professionell aufzubauen und gezielt zu optimieren. Unser Fokus liegt auf messbaren Ergebnissen: mehr Reichweite, mehr Anfragen und mehr Umsatz.",
              "Als Remote-Agentur kombinieren wir modernes Webdesign mit effektiven Social Media Strategien und begleiten Marken von der Positionierung bis zur laufenden Betreuung, flexibel, digital und deutschlandweit verfügbar.",
            ],
          },
          {
            title: "Wie wir arbeiten",
            bullets: [
              "Wir setzen auf klare Strategien statt Aktionismus und verbinden Kreativität mit messbaren Zielen.",
              "Unsere Zusammenarbeit ist remote, flexibel und auf transparente Kommunikation ausgelegt.",
              "Wir begleiten Projekte von der Positionierung bis zur laufenden Betreuung und Optimierung.",
            ],
          },
          {
            title: "Worauf wir Wert legen",
            bullets: [
              "Verlässliche Umsetzung und ehrliche Beratung.",
              "Design und Inhalte, die Vertrauen aufbauen und Anfragen fördern.",
              "Digitale Lösungen, die zu Ihrem Unternehmen, Ihrem Angebot und Ihren Ressourcen passen.",
            ],
          },
        ],
        ctaLabel: "Projekt mit uns starten",
      },
      privacy: {
        metadata: {
          title: "Datenschutz | Gloyoo",
          description:
            "Informationen zur Verarbeitung personenbezogener Daten auf der Website von Gloyoo.",
          locale: "de_DE",
          keywords: [
            "gloyoo datenschutz",
            "datenschutzerklärung",
            "dsgvo website",
            "kontaktformular datenschutz",
          ],
        },
        eyebrow: "Datenschutz",
        title: "Datenschutzerklärung",
        intro:
          "Der Schutz personenbezogener Daten ist uns wichtig. Auf dieser Seite informieren wir darüber, welche Daten beim Besuch dieser Website und bei einer Kontaktanfrage verarbeitet werden.",
        sections: [
          {
            title: "Verantwortliche Stelle",
            paragraphs: [
              "Gloyoo",
              "Bitte ergänzen Sie hier vor Veröffentlichung den vollständigen Namen oder die juristische Firmierung, die ladungsfähige Anschrift sowie eine gültige Kontakt-E-Mail.",
            ],
          },
          {
            title: "Welche Daten verarbeitet werden",
            bullets: [
              "Technische Zugriffsdaten wie IP-Adresse, Browsertyp, Datum und Uhrzeit können serverseitig verarbeitet werden, um die Website sicher und stabil bereitzustellen.",
              "Bei Nutzung des Kontaktformulars verarbeiten wir die von Ihnen eingegebenen Angaben, zum Beispiel Name, Unternehmen, E-Mail-Adresse, Telefonnummer und Ihre Nachricht.",
              "Wir verwenden diese Daten ausschließlich, um Anfragen zu beantworten, Projekte einzuordnen und die Kommunikation mit Interessenten zu ermöglichen.",
            ],
          },
          {
            title: "Zweck und Rechtsgrundlage",
            bullets: [
              "Die Verarbeitung erfolgt zur Bereitstellung der Website und zur Bearbeitung von Kontaktanfragen.",
              "Rechtsgrundlagen können Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Kommunikation sowie Art. 6 Abs. 1 lit. f DSGVO für die sichere und technisch notwendige Bereitstellung der Website sein.",
            ],
          },
          {
            title: "Speicherdauer",
            paragraphs: [
              "Personenbezogene Daten werden nur so lange gespeichert, wie es für die Bearbeitung der Anfrage, gesetzliche Aufbewahrungspflichten oder berechtigte Interessen erforderlich ist.",
            ],
          },
          {
            title: "Ihre Rechte",
            bullets: [
              "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit im Rahmen der gesetzlichen Vorgaben.",
              "Sie können einer Verarbeitung widersprechen, sofern diese auf berechtigten Interessen beruht.",
              "Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.",
            ],
          },
          {
            title: "Hinweis zur Aktualisierung",
            paragraphs: [
              "Wenn zusätzliche Dienste wie Analytics, externe Form-Tools, Terminbuchung, Newsletter oder eingebettete Drittanbieter-Inhalte eingesetzt werden, muss diese Datenschutzerklärung entsprechend ergänzt werden.",
            ],
          },
        ],
        note:
          "Vor der Veröffentlichung sollten die Angaben zur verantwortlichen Stelle und zu eventuell eingesetzten Drittanbietern mit den tatsächlichen Unternehmens- und Hostingdaten ergänzt werden.",
      },
      impressum: {
        metadata: {
          title: "Impressum | Gloyoo",
          description:
            "Rechtliche Anbieterkennzeichnung und Pflichtangaben für die Website von Gloyoo.",
          locale: "de_DE",
          keywords: [
            "gloyoo impressum",
            "anbieterkennzeichnung",
            "pflichtangaben website",
            "rechtliche hinweise",
          ],
        },
        eyebrow: "Rechtliches",
        title: "Impressum",
        intro:
          "Dieses Impressum dient als Vorlage für die gesetzlich erforderlichen Pflichtangaben. Bitte ergänzen Sie vor der Veröffentlichung alle tatsächlichen Unternehmensdaten.",
        sections: [
          {
            title: "Angaben gemäß § 5 TMG",
            bullets: [
              "Gloyoo",
              "[Vollständiger Name oder Unternehmensbezeichnung]",
              "[Straße und Hausnummer]",
              "[PLZ und Ort]",
              "[Land]",
            ],
          },
          {
            title: "Kontakt",
            bullets: [
              "E-Mail: [Ihre geschäftliche E-Mail-Adresse]",
              "Telefon: [Ihre Telefonnummer]",
            ],
          },
          {
            title: "Vertreten durch",
            paragraphs: [
              "Falls zutreffend, ergänzen Sie hier die vertretungsberechtigte Person oder Geschäftsführung.",
            ],
          },
          {
            title: "Register und Umsatzsteuer",
            bullets: [
              "Handelsregister: [Registergericht und Registernummer, falls vorhanden]",
              "Umsatzsteuer-ID: [USt-IdNr. nach § 27a UStG, falls vorhanden]",
              "Weitere berufsrechtliche Angaben: [falls für Ihr Unternehmen erforderlich]",
            ],
          },
          {
            title: "Haftung für Inhalte",
            paragraphs: [
              "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.",
            ],
          },
        ],
        note:
          "Ersetzen Sie alle Platzhalter vor der Veröffentlichung. Für ein rechtssicheres Impressum sollten die Angaben an Ihre tatsächliche Rechtsform und Ihren Unternehmenssitz angepasst werden.",
      },
    },
};
