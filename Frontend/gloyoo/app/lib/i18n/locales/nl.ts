import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const nlDictionary: LocaleDictionary = {
    localeName: "Nederlands",
    nav: {
      ariaLabel: "Hoofdnavigatie",
      homeAriaLabel: "Ga naar Gloyoo homepage",
      items: [
        { label: "Voordelen", href: "#advantages" },
        {
          label: "Diensten",
          href: "#services",
          children: [
            {
              label: "Social Media Beheer",
              href: "/services/social-media",
            },
            {
              label: "Contentcreatie",
              href: "/services/content-creation",
            },
            {
              label: "Performance Marketing",
              href: "/services/performance-marketing",
            },
            { label: "Webdesign", href: "/services/webdesign" },
          ],
        },
        { label: "Over Ons", href: "#about-us" },
      ],
      contactLabel: "Advies Aanvragen",
      mobileMenuLabel: "Menu",
      switchLabel: "EN",
    },
    footer: {
      tagline: "Social media, content en webdesign voor meer zichtbaarheid.",
      navigationTitle: "Navigatie",
      servicesTitle: "Diensten",
      contactTitle: "Contact",
      navigationLinks: [
        { label: "Home", href: "/" },
        { label: "Voordelen", href: "#advantages" },
        { label: "Diensten", href: "#services" },
        { label: "Over Ons", href: "#about-us" },
      ],
      serviceLinks: [
        { label: "Social Media Beheer", href: "/services/social-media" },
        { label: "Contentcreatie", href: "/services/content-creation" },
        { label: "Performance Marketing", href: "/services/performance-marketing" },
        { label: "Webdesign", href: "/services/webdesign" },
      ],
      contactLinks: [
        { label: "Advies Aanvragen", href: "/form" },
        { label: "Project Starten", href: "/form" },
        { label: "Diensten Ontdekken", href: "#services" },
      ],
      rights: "Alle rechten voorbehouden.",
      legalLinks: [
        { label: "Privacy", href: "/privacy" },
        { label: "Colofon", href: "/impressum" },
      ],
    },
    home: {
      metadata: {
        title: "Social Media Bureau | Content, Advertenties & Webdesign | Gloyoo",
        description:
          "Social media bureau voor meer zichtbaarheid en klanten. Professioneel beheer, contentcreatie en performance marketing. 100% remote, overal in Nederland beschikbaar.",
        locale: "nl_NL",
        keywords: [
          "social media bureau",
          "contentcreatie bureau",
          "performance marketing",
          "webdesign bureau",
          "instagram marketing",
          "facebook advertenties",
          "social media beheer",
          "online marketing bureau",
        ],
      },
      hero: {
        eyebrow: "Social Media Bureau en Webbureau",
        titleFirst: "Meer Klanten",
        titleSecond: "door Social Media en Moderne Websites",
        description:
          "We helpen bedrijven online zichtbaar te worden, vertrouwen op te bouwen en gekwalificeerde klantaanvragen te genereren. 100% remote, flexibel en overal in Nederland beschikbaar.",
        primaryCta: "Gratis Adviesgesprek",
        secondaryCta: "Diensten Bekijken",
        videoAlt: "Video-preview van een social media campagne door Gloyoo",
        imageAlt: "Design-preview van een moderne website door Gloyoo",
      },
      advantages: {
        eyebrow: "Uw Voordelen",
        title: "Waarom Bedrijven Kiezen voor Gloyoo",
        description:
          "We combineren creatieve content met een duidelijke strategie, zodat social media niet alleen goed eruitziet, maar uw bedrijf ook echt vooruit helpt.",
        items: [
          {
            value: "Meer",
            title: "Zichtbaarheid",
            subtitle:
              "Uw merk wordt zichtbaar waar uw doelgroep elke dag actief is.",
          },
          {
            value: "Meer",
            title: "Aanvragen",
            subtitle:
              "We richten ons niet alleen op bereik, maar op gekwalificeerde klantaanvragen.",
          },
          {
            value: "Minder",
            title: "Inspanning",
            subtitle:
              "Strategie, content en beheer uit één hand, zodat u tijd bespaart.",
          },
        ],
      },
      services: {
        eyebrow: "Onze Diensten",
        title: "Social Media Diensten die Uw Bedrijf Laten Groeien",
        description:
          "We ondersteunen bedrijven met creatieve content, duidelijke strategie, performance marketing en digitale ervaringen die aandacht omzetten in echte resultaten.",
        cta: "Advies Aanvragen",
        items: [
          {
            title: "Social Media Beheer",
            description:
              "We plannen, ontwerpen en beheren uw kanalen professioneel, zodat uw merk consistent, actief en betrouwbaar overkomt.",
          },
          {
            title: "Contentcreatie",
            description:
              "Van reels en posts tot stories en advertentiemateriaal, we maken content die opvalt en blijft hangen.",
          },
          {
            title: "Performance Marketing",
            description:
              "Met gerichte campagnes op Instagram, Facebook en meer brengen we meer bereik, meer leads en meer omzet naar uw bedrijf.",
          },
        ],
      },
      about: {
        eyebrow: "Over Gloyoo",
        title: "Uw Bureau voor Social Media en Moderne Websites",
        paragraphs: [
          "Bij Gloyoo helpen we bedrijven hun digitale aanwezigheid professioneel op te bouwen en gericht te optimaliseren. Onze focus ligt op meetbare resultaten: meer bereik, meer aanvragen en meer omzet.",
          "Als remote bureau combineren we modern webdesign met effectieve social media strategieën en begeleiden we merken van positionering tot doorlopend beheer—flexibel, digitaal en overal in Nederland beschikbaar.",
        ],
        cta: "Start Uw Project Met Ons",
      },
      scrollTexts: ["Social Media", "Moderne Websites"],
      seo: {
        areaServed: ["Netherlands", "Belgium"],
        knowsAbout: [
          "Social Media Marketing",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
          "Instagram Marketing",
          "Facebook Advertenties",
          "Online Marketing",
        ],
        offerCatalogName: "Onze Diensten",
        services: [
          "Social Media Beheer",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    servicePage: {
      metadata: {
        title: "Onze Diensten | Social Media, Content & Webdesign | Gloyoo",
        description:
          "Ontdek onze diensten: strategisch social media beheer, contentcreatie, performance marketing en webdesign voor meer zichtbaarheid en aanvragen.",
        locale: "nl_NL",
        keywords: [
          "social media beheer",
          "contentcreatie bureau",
          "performance marketing",
          "webdesign",
          "instagram marketing",
          "facebook advertenties",
        ],
      },
      hero: {
        "social-media": {
          imageUrl: "/bg.jpg",
          badge: "Social Media Beheer",
          title: "Social Media Beheer dat Uw Merk Zichtbaar Maakt",
          description:
            "We plannen, ontwerpen en beheren uw kanalen zodat uw merk professioneel overkomt en regelmatig gekwalificeerde aanvragen genereert.",
          primaryCta: "Advies Aanvragen",
          secondaryCta: "Meer Informatie",
          imageAlt: "Social Media Beheer door Gloyoo",
        },
        "content-creation": {
          badge: "Contentcreatie",
          imageUrl: "/bg.jpg",
          title: "Contentcreatie die Aandacht Omzet in Vertrouwen",
          description:
            "Van reels tot brand assets, we creëren content die uw doelgroep aanspreekt, herkenbaarheid creëert en uw merk versterkt.",
          primaryCta: "Project Aanvragen",
          secondaryCta: "Portfolio Bekijken",
          imageAlt: "Contentcreatie door Gloyoo",
        },
        "performance-marketing": {
          imageUrl: "/bg.jpg",
          badge: "Performance Marketing",
          title: "Performance Marketing Gericht op Leads en Omzet",
          description:
            "Met datagedreven campagnes verhogen we bereik, conversies en meetbare resultaten op de kanalen die tellen voor uw bedrijf.",
          primaryCta: "Strategie Aanvragen",
          secondaryCta: "Potentieel Ontdekken",
          imageAlt: "Performance Marketing door Gloyoo",
        },
        webdesign: {
          imageUrl: "/bg.jpg",
          badge: "Webdesign",
          title: "Webdesign dat Overtuigt en Aanvragen Genereert",
          description:
            "We ontwikkelen moderne websites die uw merk professioneel presenteren, vertrouwen opbouwen en bezoekers omzetten in klantaanvragen.",
          primaryCta: "Website Plannen",
          secondaryCta: "Meer Informatie",
          imageAlt: "Webdesign door Gloyoo",
        },
      },
      features: {
        badge: "Onze Kerndiensten",
        title: "Elk merk heeft een duidelijke, sterke digitale uitstraling nodig.",
        description:
          "We combineren strategie, creativiteit en uitvoering, zodat uw online aanwezigheid professioneel overkomt en meetbare resultaten levert.",
        items: [
          {
            title: "Meer Bereik",
            description:
              "Vergroot zichtbaarheid, websitebezoeken en gekwalificeerde contacten via sterke content en campagnes.",
            imageAlt: "Bereikvergroting door social media",
            statLabel: "45%",
          },
          {
            title: "Structuur voor Uw Marketing",
            description:
              "Duidelijke processen, afgestemde content en een consistente merkuitstraling voor duurzame groei.",
            imageAlt: "Marketing structuur en processen",
          },
          {
            title: "Naadloze Implementatie",
            description:
              "Webdesign, content en performance marketing grijpen in elkaar en zorgen voor een samenhangend totaalbeeld.",
            imageAlt: "Geïntegreerde digitale marketing oplossingen",
          },
        ],
        sections: [
          {
            title: "Projecten strategisch aansturen",
            points: [
              "Duidelijke content- en campagneplanning voor uw doelen",
              "Afgestemde processen tussen merk, design en performance",
              "Meetbare prioriteiten voor duurzame groei",
              "Meer structuur voor interne en externe samenwerking",
              "Snellere afstemming met duidelijke goedkeuringswegen",
              "Beter overzicht van lopende activiteiten",
              "Betrouwbare uitvoering over alle kanalen heen",
              "Transparante communicatie over voortgang en resultaten",
              "Planbare acties in plaats van spontane losse initiatieven",
            ],
          },
          {
            title: "Uw website gericht doorontwikkelen",
            points: [
              "Teksten en content structureren passend bij uw doelgroep",
              "Design en gebruikerservaring optimaliseren voor meer vertrouwen",
              "Duidelijke boodschappen uitwerken voor aanbiedingen en diensten",
              "Responsieve ervaring garanderen voor mobiel en desktop",
              "Snelle aanpassingen mogelijk maken zonder onnodige complexiteit",
              "Consistente merkuitstraling bewaren over alle pagina's",
              "Conversie-sterke elementen bewust plaatsen",
              "Content flexibel uitbreiden voor campagnes en acties",
              "Technische basis versterken voor zichtbaarheid en performance",
            ],
          },
          {
            title: "Merkuitstraling consistent vormgeven",
            points: [
              "Social media, website en advertentiemateriaal visueel verbinden",
              "Herkenbare content ontwikkelen voor sterke merkimpact",
              "Designsystemen creëren die in de praktijk bruikbaar blijven",
              "Sjablonen voorbereiden voor posts, landingspagina's en campagnes",
              "Creatieve ideeën netjes in uitvoering brengen",
              "Merkwaarden vertalen naar beeldtaal en tone of voice",
              "Flexibel reageren op nieuwe formats en trends",
              "Professionele uitstraling garanderen over alle contactpunten",
              "Meer consistentie zonder individualiteit te verliezen",
            ],
          },
        ],
      },
      hero2: {
        badge: "Waarom Gloyoo?",
        title: "Samen creëren we een uitstraling die zichtbaar maakt waar uw merk voor staat.",
        description:
          "We ontwikkelen geen standaardoplossingen. Elk bedrijf, elk merk en elk doel is anders. Daarom werken we nauw met u samen om een individuele strategie en uitstraling te creëren die echt bij u past.",
        subtitle: "Laten we samen uw digitale aanwezigheid vormgeven.",
        subdescription:
          "Of het nu gaat om social media, content of webdesign—we laten uw merk online stralen en zorgen dat u zichtbaar wordt waar uw doelgroep actief is.",
        imageAlt: "Abstracte 3D-vormen op de achtergrond",
        imageUrl: "/bg.jpg",
      },
      seo: {
        areaServed: ["Netherlands", "Belgium"],
        knowsAbout: [
          "Social Media Marketing",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
          "Instagram Marketing",
          "Facebook Advertenties",
        ],
        offerCatalogName: "Onze Diensten",
        services: [
          "Social Media Beheer",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    form: {
      metadata: {
        title: "Contact & Advies | Start Uw Project met Gloyoo",
        description:
          "Start uw project met Gloyoo. Neem contact met ons op voor social media, contentcreatie, performance marketing of webdesign—we nemen snel contact met u op.",
        locale: "nl_NL",
        keywords: [
          "contact gloyoo",
          "social media advies",
          "project aanvragen",
          "social media bureau contact",
          "webdesign aanvraag",
        ],
      },
      content: {
        title: "Contact Opnemen",
        description:
          "Heeft u een vraag of al een concreet idee? Ons team kijkt ernaar uit om met u in gesprek te gaan.",
        fields: {
          companyName: "Bedrijfsnaam",
          lastName: "Achternaam",
          email: "E-mail",
          phoneNumber: "Telefoonnummer",
          message: "Bericht",
        },
        placeholders: {
          companyName: "Voorbeeld B.V.",
          lastName: "Janssen",
          email: "hallo@bedrijf.nl",
          phoneNumber: "+31 6 12345678",
          message: "Vertel ons kort over uw project",
        },
        consent: {
          prefix: "U gaat akkoord met onze",
          terms: "Voorwaarden",
          and: "en het",
          privacyPolicy: "Privacybeleid",
          suffix: ".",
        },
        submitLabel: "Bericht Versturen",
        testimonial: {
          quote:
            "We ontwikkelen geen standaardoplossingen. Samen creëren we een uitstraling die zichtbaar maakt waar uw merk voor staat.",
          author: "Gloyoo Team",
          imageAlt: "Abstracte 3D-vormen op de achtergrond van het contactformulier",
          imageUrl: "/bg.jpg",
        },
      },
      seo: {
        areaServed: ["Netherlands", "Belgium"],
        knowsAbout: [
          "Social Media Marketing",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
        ],
        offerCatalogName: "Contact en Advies",
        services: [
          "Social Media Beheer",
          "Contentcreatie",
          "Performance Marketing",
          "Webdesign",
        ],
      },
    },
    pages: {
      about: {
        metadata: {
          title: "Over Ons | Gloyoo",
          description:
            "Lees meer over Gloyoo, onze werkwijze en hoe we bedrijven ondersteunen met social media, content en webdesign.",
          locale: "nl_NL",
          keywords: [
            "over gloyoo",
            "social media bureau team",
            "webdesign bureau",
            "digitale bureau waarden",
          ],
        },
        eyebrow: "Over Gloyoo",
        title: "Uw Bureau voor Social Media en Moderne Websites",
        intro:
          "Bij Gloyoo helpen we bedrijven hun digitale aanwezigheid professioneel op te bouwen en gericht te optimaliseren. Onze focus ligt op meetbare resultaten: meer bereik, meer aanvragen en meer omzet.",
        sections: [
          {
            title: "Onze aanpak",
            paragraphs: [
              "Bij Gloyoo helpen we bedrijven hun digitale aanwezigheid professioneel op te bouwen en gericht te optimaliseren. Onze focus ligt op meetbare resultaten: meer bereik, meer aanvragen en meer omzet.",
              "Als remote bureau combineren we modern webdesign met effectieve social media strategieën en begeleiden we merken van positionering tot doorlopend beheer, flexibel, digitaal en overal in Nederland beschikbaar.",
            ],
          },
          {
            title: "Hoe wij werken",
            bullets: [
              "We werken met een duidelijke strategie in plaats van losse acties en combineren creativiteit met meetbare doelen.",
              "Onze samenwerking is remote, flexibel en gebaseerd op transparante communicatie.",
              "We begeleiden projecten van positionering tot doorlopend beheer en optimalisatie.",
            ],
          },
          {
            title: "Waar wij waarde aan hechten",
            bullets: [
              "Betrouwbare uitvoering en eerlijk advies.",
              "Design en content die vertrouwen opbouwen en kwalitatieve aanvragen stimuleren.",
              "Digitale oplossingen die passen bij uw bedrijf, aanbod en beschikbare middelen.",
            ],
          },
        ],
        ctaLabel: "Start Uw Project Met Ons",
      },
      privacy: {
        metadata: {
          title: "Privacy | Gloyoo",
          description:
            "Informatie over hoe persoonsgegevens op de website van Gloyoo worden verwerkt.",
          locale: "nl_NL",
          keywords: [
            "gloyoo privacy",
            "privacybeleid",
            "avg website",
            "contactformulier privacy",
          ],
        },
        eyebrow: "Privacy",
        title: "Privacybeleid",
        intro:
          "De bescherming van persoonsgegevens is voor ons belangrijk. Op deze pagina leggen we uit welke gegevens kunnen worden verwerkt bij het bezoeken van deze website en bij het indienen van een contactaanvraag.",
        sections: [
          {
            title: "Verwerkingsverantwoordelijke",
            paragraphs: [
              "Gloyoo",
              "Vul hier voor publicatie de volledige juridische naam of bedrijfsnaam, het volledige bedrijfsadres en een geldig contact-e-mailadres in.",
            ],
          },
          {
            title: "Welke gegevens kunnen worden verwerkt",
            bullets: [
              "Technische toegangsgegevens zoals IP-adres, browsertype, datum en tijd kunnen server-side worden verwerkt om de website veilig en stabiel aan te bieden.",
              "Wanneer u het contactformulier gebruikt, verwerken wij de gegevens die u invult, zoals naam, bedrijf, e-mailadres, telefoonnummer en bericht.",
              "Wij gebruiken deze informatie uitsluitend om aanvragen te beantwoorden, projectaanvragen te beoordelen en met potentiële klanten te communiceren.",
            ],
          },
          {
            title: "Doel en rechtsgrond",
            bullets: [
              "De verwerking vindt plaats om de website beschikbaar te stellen en contactaanvragen af te handelen.",
              "Mogelijke rechtsgronden zijn art. 6 lid 1 sub b AVG voor precontractuele communicatie en art. 6 lid 1 sub f AVG voor de veilige en technisch noodzakelijke werking van de website.",
            ],
          },
          {
            title: "Bewaartermijn",
            paragraphs: [
              "Persoonsgegevens worden alleen bewaard zolang dat nodig is voor de afhandeling van de aanvraag, wettelijke bewaarplichten of gerechtvaardigde bedrijfsbelangen.",
            ],
          },
          {
            title: "Uw rechten",
            bullets: [
              "U heeft recht op inzage, correctie, verwijdering, beperking van de verwerking en dataportabiliteit binnen de grenzen van de toepasselijke wetgeving.",
              "U kunt bezwaar maken tegen verwerking wanneer deze is gebaseerd op gerechtvaardigde belangen.",
              "Daarnaast heeft u het recht een klacht in te dienen bij een bevoegde toezichthoudende autoriteit.",
            ],
          },
          {
            title: "Opmerking over actualisering",
            paragraphs: [
              "Wanneer extra diensten worden toegevoegd, zoals analytics, externe formulierdiensten, planningstools, nieuwsbrieven of ingesloten content van derden, moet dit privacybeleid daarop worden aangepast.",
            ],
          },
        ],
        note:
          "Vervang voor publicatie de gegevens van de verwerkingsverantwoordelijke en voeg alle werkelijk gebruikte diensten van derden en hostinginformatie toe.",
      },
      impressum: {
        metadata: {
          title: "Colofon | Gloyoo",
          description:
            "Juridische kennisgeving en verplichte aanbiedergegevens voor de website van Gloyoo.",
          locale: "nl_NL",
          keywords: [
            "gloyoo colofon",
            "aanbiedergegevens website",
            "juridische kennisgeving",
            "bedrijfsinformatie website",
          ],
        },
        eyebrow: "Juridisch",
        title: "Colofon",
        intro:
          "Dit colofon dient als sjabloon voor de verplichte aanbiedergegevens. Vul voor publicatie alle werkelijke bedrijfsgegevens in.",
        sections: [
          {
            title: "Aanbiedergegevens",
            bullets: [
              "Gloyoo",
              "[Volledige juridische naam of bedrijfsnaam]",
              "[Straat en huisnummer]",
              "[Postcode en plaats]",
              "[Land]",
            ],
          },
          {
            title: "Contact",
            bullets: [
              "E-mail: [Uw zakelijke e-mailadres]",
              "Telefoon: [Uw telefoonnummer]",
            ],
          },
          {
            title: "Vertegenwoordigd door",
            paragraphs: [
              "Voeg hier indien van toepassing de bevoegde vertegenwoordiger, eigenaar of directie toe.",
            ],
          },
          {
            title: "Registratie en btw-gegevens",
            bullets: [
              "Handelsregister: [Rechtbank en registratienummer, indien van toepassing]",
              "Btw-nummer: [Btw-nummer, indien van toepassing]",
              "Aanvullende beroeps- of branchegegevens: [indien vereist voor uw bedrijf]",
            ],
          },
          {
            title: "Aansprakelijkheid voor inhoud",
            paragraphs: [
              "De inhoud van deze website is met zorg samengesteld. Er kan echter geen garantie worden gegeven voor de juistheid, volledigheid of actualiteit van de inhoud.",
            ],
          },
        ],
        note:
          "Vervang alle placeholders voor publicatie. Voor een juridisch bruikbaar colofon moeten de gegevens worden aangepast aan uw daadwerkelijke rechtsvorm en vestigingsplaats.",
      },
    },
};
