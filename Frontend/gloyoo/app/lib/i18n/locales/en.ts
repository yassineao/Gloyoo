import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const enDictionary: LocaleDictionary = {
    localeName: "English",
    nav: {
      ariaLabel: "Main navigation",
      homeAriaLabel: "Go to Gloyoo homepage",
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
        { label: "About Us", href: "#about-us" },
      ],
      contactLabel: "Request Consultation",
      mobileMenuLabel: "Menu",
      switchLabel: "DE",
    },
    footer: {
      tagline: "Social media, content, and web design for more visibility.",
      navigationTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      navigationLinks: [
        { label: "Home", href: "/" },
        { label: "Benefits", href: "#advantages" },
        { label: "Services", href: "#services" },
        { label: "About Us", href: "#about-us" },
      ],
      serviceLinks: [
        { label: "Social Media Management", href: "/services/social-media" },
        { label: "Content Creation", href: "/services/content-creation" },
        { label: "Performance Marketing", href: "/services/performance-marketing" },
        { label: "Web Design", href: "/services/webdesign" },
      ],
      contactLinks: [
        { label: "Request Consultation", href: "/form" },
        { label: "Start Project", href: "/form" },
        { label: "Explore Services", href: "#services" },
      ],
      rights: "All rights reserved.",
      legalLinks: [
        { label: "Privacy", href: "/privacy" },
        { label: "Legal Notice", href: "/legal" },
      ],
    },
    home: {
      metadata: {
        title: "Social Media Agency | Content, Ads & Web Design | Gloyoo",
        description:
          "Social media agency for more visibility and customers. Professional management, content creation, and performance marketing. 100% remote, available across Europe.",
        locale: "en_US",
        keywords: [
          "social media agency",
          "content creation agency",
          "performance marketing",
          "web design agency",
          "instagram marketing",
          "facebook ads",
          "social media management",
          "online marketing agency",
        ],
      },
      hero: {
        eyebrow: "Social Media Agency and Web Agency",
        titleFirst: "More Customers",
        titleSecond: "through Social Media and Modern Websites",
        description:
          "We help businesses become visible online, build trust, and generate qualified customer inquiries. 100% remote, flexible, and available across Europe.",
        primaryCta: "Free Consultation",
        secondaryCta: "View Services",
        videoAlt: "Video preview of a social media campaign by Gloyoo",
        imageAlt: "Design preview of a modern website by Gloyoo",
      },
      advantages: {
        eyebrow: "Your Benefits",
        title: "Why Companies Choose Gloyoo",
        description:
          "We combine creative content with clear strategy, so social media not only looks good but also truly drives your business forward.",
        items: [
          {
            value: "More",
            title: "Visibility",
            subtitle:
              "Your brand becomes visible where your target audience spends their time every day.",
          },
          {
            value: "More",
            title: "Inquiries",
            subtitle:
              "We focus not just on reach, but on qualified customer inquiries.",
          },
          {
            value: "Less",
            title: "Effort",
            subtitle:
              "Strategy, content, and management from one source, saving you time.",
          },
        ],
      },
      services: {
        eyebrow: "Our Services",
        title: "Social Media Services That Grow Your Business",
        description:
          "We support businesses with creative content, clear strategy, performance marketing, and digital experiences that turn attention into real results.",
        cta: "Request Consultation",
        items: [
          {
            title: "Social Media Management",
            description:
              "We plan, design, and manage your channels professionally so your brand appears consistent, active, and trustworthy.",
          },
          {
            title: "Content Creation",
            description:
              "From reels and posts to stories and advertising materials, we create content that grabs attention and sticks in minds.",
          },
          {
            title: "Performance Marketing",
            description:
              "With targeted campaigns on Instagram, Facebook, and more, we bring more reach, more leads, and more revenue to your business.",
          },
        ],
      },
      about: {
        eyebrow: "About Gloyoo",
        title: "Your Agency for Social Media and Modern Websites",
        paragraphs: [
          "At Gloyoo, we help businesses build and optimize their digital presence professionally. Our focus is on measurable results: more reach, more inquiries, and more revenue.",
          "As a remote agency, we combine modern web design with effective social media strategies and support brands from positioning to ongoing management—flexible, digital, and available across Europe.",
        ],
        cta: "Start Your Project With Us",
      },
      scrollTexts: ["Social Media", "Modern Websites"],
      seo: {
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
          "Instagram Marketing",
          "Facebook Advertising",
          "Digital Marketing",
        ],
        offerCatalogName: "Our Services",
        services: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
      },
    },
    servicePage: {
      metadata: {
        title: "Our Services | Social Media, Content & Web Design | Gloyoo",
        description:
          "Discover our services: strategic social media management, content creation, performance marketing, and web design for more visibility and inquiries.",
        locale: "en_US",
        keywords: [
          "social media management",
          "content creation agency",
          "performance marketing",
          "web design",
          "instagram marketing",
          "facebook ads",
        ],
      },
      hero: {
        "social-media": {
          imageUrl: "https://imgs.search.brave.com/k2Mb30Q2GikWc_eQ-lCn9Ra7fIm3d-Lm-8ePAocKomI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tLzBlNmZi/OTMwLTI2NGItNGRl/Ny1iNzRjLTM5ZTMw/MzMzNzcwNy9oZWFk/ZXJwaW50ZXJlc3Qu/cG5n",
          badge: "Social Media Management",
          title: "Social Media Management That Makes Your Brand Visible",
          description:
            "We plan, design, and manage your channels so your brand appears professional and regularly generates qualified inquiries.",
          primaryCta: "Request Consultation",
          secondaryCta: "Learn More",
          imageAlt: "Social Media Management by Gloyoo",
        },
        "content-creation": {
          badge: "Content Creation",
          imageUrl: "/test.png",
          title: "Content Creation That Turns Attention Into Trust",
          description:
            "From reels to brand assets, we create content that appeals to your target audience, creates recognition, and strengthens your brand.",
          primaryCta: "Request Project",
          secondaryCta: "View Portfolio",
          imageAlt: "Content Creation by Gloyoo",
        },
        "performance-marketing": {
          imageUrl: "https://imgs.search.brave.com/k2Mb30Q2GikWc_eQ-lCn9Ra7fIm3d-Lm-8ePAocKomI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LW1hbmFnZW1l/bnQtZmlsZXMuY2Fu/dmEuY29tLzBlNmZi/OTMwLTI2NGItNGRl/Ny1iNzRjLTM5ZTMw/MzMzNzcwNy9oZWFk/ZXJwaW50ZXJlc3Qu/cG5n",
          badge: "Performance Marketing",
          title: "Performance Marketing Focused on Leads and Revenue",
          description:
            "With data-driven campaigns, we increase reach, conversions, and measurable results on the channels that matter for your business.",
          primaryCta: "Request Strategy",
          secondaryCta: "Discover Potential",
          imageAlt: "Performance Marketing by Gloyoo",
        },
        webdesign: {
          imageUrl: "/test.png",
          badge: "Web Design",
          title: "Web Design That Convinces and Generates Inquiries",
          description:
            "We develop modern websites that professionally present your brand, build trust, and turn visitors into customer inquiries.",
          primaryCta: "Plan Website",
          secondaryCta: "Learn More",
          imageAlt: "Web Design by Gloyoo",
        },
      },
      features: {
        badge: "Our Core Services",
        title: "Every brand needs a clear, strong digital presence.",
        description:
          "We combine strategy, creativity, and execution so your online presence looks professional and delivers measurable results.",
        items: [
          {
            title: "More Reach",
            description:
              "Increase visibility, website visits, and qualified contacts through strong content and campaigns.",
            imageAlt: "Reach increase through social media",
            statLabel: "45%",
          },
          {
            title: "Structure for Your Marketing",
            description:
              "Clear processes, coordinated content, and a consistent brand presence for sustainable growth.",
            imageAlt: "Marketing structure and processes",
          },
          {
            title: "Seamless Implementation",
            description:
              "Web design, content, and performance marketing work together to create a coherent overall experience.",
            imageAlt: "Integrated digital marketing solutions",
          },
        ],
        sections: [
          {
            title: "Manage projects strategically",
            points: [
              "Clear content and campaign planning for your goals",
              "Coordinated processes between brand, design, and performance",
              "Measurable priorities for sustainable growth",
              "More structure for internal and external collaboration",
              "Faster coordination with clear approval processes",
              "Better overview of ongoing activities",
              "Reliable implementation across all channels",
              "Transparent communication about progress and results",
              "Planned activities instead of spontaneous individual actions",
            ],
          },
          {
            title: "Develop your website strategically",
            points: [
              "Structure texts and content appropriate to your target audience",
              "Optimize design and user guidance for more trust",
              "Develop clear messages for offers and services",
              "Ensure responsive experience for mobile and desktop",
              "Enable quick adjustments without unnecessary complexity",
              "Maintain consistent brand presence across all pages",
              "Strategically place conversion-strong elements",
              "Flexibly expand content for campaigns and promotions",
              "Strengthen technical foundation for visibility and performance",
            ],
          },
          {
            title: "Design brand presence consistently",
            points: [
              "Visually connect social media, website, and advertising materials",
              "Develop recognizable content for strong brand impact",
              "Create design systems that remain usable in everyday life",
              "Prepare templates for posts, landing pages, and campaigns",
              "Cleanly implement creative ideas",
              "Translate brand values into visual language and tone",
              "Flexibly respond to new formats and trends",
              "Ensure professional presence across all touchpoints",
              "More consistency without losing individuality",
            ],
          },
        ],
      },
      hero2: {
        badge: "Why Gloyoo?",
        title: "Together we create a presence that makes visible what your brand stands for.",
        description:
          "We don't develop standard solutions. Every business, every brand, and every goal is different. That's why we work closely with you to create an individual strategy and presence that truly fits you.",
        subtitle: "Let's shape your digital presence together.",
        subdescription:
          "Whether social media, content, or web design—we make your brand shine online and ensure it becomes visible where your target audience is.",
        imageAlt: "Abstract 3D shapes in the background",
        imageUrl: "/test.png",
      },
      seo: {
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
          "Instagram Marketing",
          "Facebook Advertising",
        ],
        offerCatalogName: "Our Services",
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
        title: "Contact & Consultation | Start Your Project with Gloyoo",
        description:
          "Start your project with Gloyoo. Contact us for social media, content creation, performance marketing, or web design—we'll get back to you promptly.",
        locale: "en_US",
        keywords: [
          "contact gloyoo",
          "social media consultation",
          "request project",
          "social media agency contact",
          "web design inquiry",
        ],
      },
      content: {
        title: "Get in Touch",
        description:
          "Have a question or a concrete idea? Our team looks forward to talking with you.",
        fields: {
          companyName: "Company Name",
          lastName: "Last Name",
          email: "Email",
          phoneNumber: "Phone Number",
          message: "Message",
        },
        placeholders: {
          companyName: "Example Ltd",
          lastName: "Smith",
          email: "hello@company.com",
          phoneNumber: "+1 123 456789",
          message: "Tell us briefly about your project",
        },
        consent: {
          prefix: "You agree to our",
          terms: "Terms",
          and: "and",
          privacyPolicy: "Privacy Policy",
          suffix: ".",
        },
        submitLabel: "Send Message",
        testimonial: {
          quote:
            "We don't develop standard solutions. Together we create a presence that makes visible what your brand stands for.",
          author: "Gloyoo Team",
          imageAlt: "Abstract 3D shapes in the background of the contact form",
          imageUrl: "/test.png",
        },
      },
      seo: {
        areaServed: ["Germany", "Europe", "International"],
        knowsAbout: [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
        offerCatalogName: "Contact and Consultation",
        services: [
          "Social Media Management",
          "Content Creation",
          "Performance Marketing",
          "Web Design",
        ],
      },
    },
};