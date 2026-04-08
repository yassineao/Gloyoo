import type { LocaleDictionary } from "../../../types/LocaleDictionary";

export const enDictionary: LocaleDictionary = {
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
      hero2: {
        badge: "Why Gloyoo?",
        title: "Together we create a presence that shows what your brand truly stands for.",
        description:
          "We do not build generic solutions. Every business, brand, and goal is different. That's why we work closely with you to create a custom strategy and presence that truly fits your needs.",
        subtitle: "Let's shape your digital presence together.",
        subdescription:
          "Whether it's social media, content, or web design - we make your brand shine online and ensure it becomes visible where your audience already spends time.",
        imageAlt: "Abstract 3D shapes in the background of the service hero section",
        imageUrl: "https://assets.prebuiltui.com/images/components/hero/hero-rightside-image.png",
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
};
