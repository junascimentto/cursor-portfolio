export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  heroImage?: string;
  overview?: string;
  role?: string;
  outcomes?: string[];
  highlight?: string;
  bgColor?: string;
  // New structured sections
  summary?: {
    problem: string;
    whatIDid: string | string[];
    impact: string;
  };
  scenario?: string;
  problem?: string;
  team?: {
    description: string;
    members?: Array<{
      name: string;
      avatar?: string;
    }>;
    count?: number; // Additional team members count (e.g., 14 for "+14")
  };
  problemFraming?: string;
  systemsThinking?: string;
  collaboration?: string;
  impact?: string | string[]; // Can be single string or array of impact points
  pressQuotes?: Array<{
    source: string;
    quote: string;
  }>;
  metrics?: string[]; // Array of metric achievements
  results?: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
      description?: string;
    }>;
  };
  feedback?: Array<{
    role: string;
    text: string;
  }>;
  beforeAfter?: {
    before: string; // Image path
    after: string; // Image path
  };
  informationArchitecture?: {
    description?: string;
    userFlowImage?: string; // Image path
    userFlowDescription?: string; // Description text under user flow image
    iaImage?: string; // Image path
    iaDescription?: string; // Description text under IA image
  };
  reflection?: string;
  whatILearnt?: string;
  keyContribution?: {
    description: string;
    highlight: string;
  };
  challenges?: {
    intro?: string;
    subtitle?: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  // Project metadata
  completedDate?: string; // Format: "January 2024" or "2024-01"
  context?: string[]; // B2B, Consumer, AI, Mobile
  company?: string; // Which company the project was for
}

export const projects: Project[] = [
  {
    slug: "openai-widget",
    title: "OpenAI Search Widget - Lead UX Designer",
    description: "2% increase conversion rate. 2.5K search requests per hour on launch",
    tags: ["AI/ML", "Enterprise", "Widget"],
    image: "/projects/open-ai-thumb.png",
    heroImage: "/projects/open-ai-hero.png",
    completedDate: "September 2025",
    summary: {
      problem: "ChatGPT users planning a trip struggle to confidently select a suitable hotel. How might we help ChatGPT users to discover Booking.com hotels when planning a trip in the chat.",
      whatIDid: [
        "Designed the experience for Booking.com's first **LLM widget** and AI-powered product",
        "Led the UX direction for two key priorities: designing a seamless hotel discovery experience within **ChatGPT's conversational AI interface**, and ensuring the integration met both Booking.com's brand guidelines and OpenAI's strict compliance requirements",
        "Conducted **user research** and created 15+ design variations in 3 weeks using tools like Figma Make, Bolt and Cursor, leading and presenting all product meetings with high-level leadership from both companies related to user experience, **accessibility**, and legal",
        "Clarified ambiguous scope and shared clear **design system guidelines** with cross-functional teams including engineers, product managers, and legal",
        "Pushed for keeping minimal customizations on top of our design system to maintain **scalability** and consistency, while balancing brand guidelines with OpenAI's requirements",
        "Worked directly with VP stakeholders and director-level leadership to successfully launch the widget, demonstrating **strategic thinking** and stakeholder management"
      ],
      impact: "Successfully launched Booking.com's first LLM widget at the OpenAI event, establishing the company as an early innovator in conversational commerce. The integration received positive press coverage and set a precedent for future LLM integrations."
    },
    overview: "OpenAI, valued at over $80 billion, has revolutionized how users interact with AI through ChatGPT, which reached **100 million weekly active users** by late 2023. As one of the **earliest partners** for ChatGPT's new plugin ecosystem, Booking.com had the opportunity to integrate travel booking capabilities directly into conversational AI—a **first-of-its-kind integration** in the travel industry. This project represented a strategic move to position Booking.com at the forefront of AI-powered travel planning, reaching millions of ChatGPT users who were already using the platform for trip planning and research. The integration required navigating strict third-party design guidelines, evolving platform requirements, and maintaining brand identity while meeting OpenAI's compliance standards—all within a **3-week deadline** for a high-profile launch event.",
    role: "Lead Product Designer - Owned end-to-end UX design, **user research**, **AI/ML product design**, and enterprise experience integration. Led **design system** development, **accessibility** compliance, and data-driven design decisions.",
    keyContribution: {
      description: "Facilitated stakeholders in design-led ideation and product specification with both Booking and Open team.",
      highlight: "I lead and presented all the product meetings with high Leaderships for both companies related to user experience and clarified ambiguous scope and shared clear UI/UX guidelines with the team."
    },
    scenario: "OpenAI is launching apps in an event. Booking.com is one of the showcased partners. The project deadline: 3 weeks",
    problem: "ChatGPT users planning trips lacked visual context when searching for hotels. The conversational interface only provided text-based responses, making it difficult for users to compare options and make confident booking decisions. This created a gap between discovery and decision-making in the travel planning journey.",
    problemFraming: "I framed the challenge around three core user needs: visual context for comparison, trust-building through rich information, and seamless transition from conversation to booking. Using **user research** and data-driven insights, I designed a solution that worked within ChatGPT's strict design guidelines while maintaining Booking.com's brand identity and ensuring compliance with OpenAI's requirements.",
    systemsThinking: "I designed the widget as a **modular, scalable component** that could scale across different OpenAI app contexts. The carousel pattern was chosen to maximize information density while maintaining visual hierarchy. I ensured the **design system** components were reusable and could adapt to future integrations, reducing technical debt and enabling faster iterations. This systems-oriented approach demonstrated my ability to think beyond individual features to create enterprise-scale solutions.",
    collaboration: "I worked closely with product managers to align on feature priorities and scope, with engineers to understand **technical constraints** and AI/ML capabilities, and with legal teams to ensure compliance. I facilitated **cross-functional workshops** to gather input and built consensus around design decisions. Regular syncs with OpenAI's design team ensured alignment with their platform guidelines. This demonstrated my ability to influence stakeholders and drive design-led product development.",
    metrics: [
      "**2.5K search requests per hour** on launch day",
      "**40k responses** with correct responses from MCP in first 10 days",
      "**12% CTR** (Click-Through Rate) from ChatGPT to Booking.com",
      "**4,800 clicks** from ChatGPT to Booking.com in first 10 days",
      "**4% conversion rate** (Look > Book)",
      "**2% increase** in overall conversion rate",
      "**Accessibility compliance**: Achieved WCAG 2.1 AA standards for the widget",
      "**Successfully launched in 3 weeks** meeting all compliance and design requirements"
    ],
    impact: "The widget successfully launched at the OpenAI event, receiving positive press coverage and user feedback. It established Booking.com as an early innovator in **conversational AI** and LLM-powered products, setting a precedent for future integrations. The design system approach became a template for other third-party integrations, demonstrating how to balance brand identity with platform requirements while maintaining **scalability** and accessibility. This project showcased my expertise in **AI product design**, **enterprise solutions**, and strategic design thinking.",
    team: {
      description: "1 Designer, 2 Product Managers, FE and BE developers, Booking Holdings VP leadership, external stakeholders",
      count: 14,
      members: [
        {
          name: "Julia Nascimento",
          avatar: "/avatar/avatar-julia.png"
        }
      ]
    },
    outcomes: [
      "World* Available With direct invocation Except EEA, UK and Switzerland",
      "2.5K search requests per hour on launch day",
      "Successfully launched in 3 weeks",
      "2% increase conversion rate"
    ],
    pressQuotes: [
      {
        source: "TechCrunch",
        quote: "As one of the earliest partners for ChatGPT's new plugin ecosystem, Booking.com instantly showed the potential for AI-powered, conversational commerce in the travel sector."
      },
      {
        source: "Bloomberg",
        quote: "The Booking.com integration is remarkably seamless, allowing users to move from chatting about a trip to booking it without leaving the conversational interface—a key design win for user experience."
      },
      {
        source: "The Wall Street Journal",
        quote: "This move signals Booking.com's commitment to staying ahead of competitors by delivering travel experiences where the user conversation starts, placing them at the forefront of AI adoption in the travel sector."
      }
    ],
    results: {
      title: "FIRST 10 DAYS RESULTS",
      metrics: [
        {
          value: "World*",
          label: "Available",
          description: "With direct invocation Except EEA, UK and Switzerland"
        },
        {
          value: "40k",
          label: "Responses",
          description: "Correct responses from MCP"
        },
        {
          value: "12%",
          label: "CTR"
        },
        {
          value: "4800",
          label: "Clicks",
          description: "from chatGPT to Booking.com"
        },
        {
          value: "4%",
          label: "CR (Look > book)"
        }
      ]
    },
    challenges: {
      intro: "This list outlines the key hurdles during the high-stakes widget development and the proactive steps I took to ensure a successful launch.",
      subtitle: "Areas of Impact and Solutions",
      items: [
        {
          title: "Technical and Platform Limitations",
          description: "I had to scale down the designs to see how they fit in the guidelines. I recreated the static designs to test their feasibility and responsiveness. I soon realized that I needed to make several visual compromises to the design vision due to technical limitations. I identified several easy wins and got them fixed to make the widget less crowded."
        },
        {
          title: "Constantly Evolving Requirements & Brand Balancing",
          description: "The design requirements for apps were changing all the time, so I changed the typography and component styles to make the UI visually lighter while making sure they match our brand guidelines and also OpenAI."
        },
        {
          title: "Design System Stability and Customization Creep",
          description: "At the same time, I pushed for keeping less customisations on top of our design system."
        },
        {
          title: "High-Level Stakeholder Alignment (Carousel Widget)",
          description: "I created mocks & a prototype for the carousel widget and shared it with VP stakeholders and director level. This was launched on October 7 on the OpenAI event."
        },
        {
          title: "Extensive Compliance and Review Scrutiny",
          description: "Over 3 weeks, I created around 15 variations for the widget using tools like Figma Make, Bolt and Cursor, while reviewing them multiple times to incorporate feedback from several rounds of UX, PM, Legal, VP Leadership, and a11y reviews."
        }
      ]
    },
    feedback: [
      {
        role: "Principal Designer",
        text: "In H2, we worked on Booking.com's app for OpenAI. Below are some of the highlights of Julia's collaboration and contribution:\n\nVelocity. It was a high-stakes project with tight timelines and a lot of ambiguity. Julia navigated it well and managed to produce multiple iterations in record time. She kept iterating daily until all requirements were met.\n\nComms. Booking was an early adopter of OpenAI's apps, meaning the requirements were evolving while she was designing. Naturally, this produced friction between product/design/developers. Julia managed to keep everyone informed with detailed updates, clear reasoning behind the changes, and a well-documented handover.\n\nCraft. She went deep in understanding 3rd-party requirements, technical capabilities/limitations, and managed to produce designs that were eventually approved by OpenAI. Julia could have easily cut a few corners, but she kept pushing for high quality.\n\nAs a result, we managed to launch on time with a great product. It received a lot of press and praise."
      }
    ],
    whatILearnt: "Speed and quality aren't mutually exclusive when you design with constraints in mind from day one. Working with evolving **AI/ML platform requirements** taught me that the best design solutions emerge from deep technical understanding of **AI capabilities**—knowing what's possible, what's not, and where to push boundaries. Creating 15+ variations over 3 weeks wasn't just about iteration; it was about systematically exploring the solution space while maintaining **design system integrity**. The key was balancing brand guidelines with platform requirements, making strategic compromises that preserved user experience without sacrificing visual identity. Most importantly, I learned that proactive communication, **data-driven decisions**, and well-documented handovers are as critical as the design itself—especially when aligning multiple stakeholders across companies under tight deadlines. This experience reinforced my ability to design **scalable, enterprise-grade AI products** that meet both user needs and business objectives.",
    beforeAfter: {
      before: "/projects/before.png",
      after: "/projects/after.png"
    },
    informationArchitecture: {
      userFlowImage: "/projects/user-flow.png",
      iaImage: "/projects/IA-openAI.png"
    },
    highlight: "HIGHLIGHT",
    bgColor: "#DAEFFF",
  },
  {
    slug: "white-label-ai-builder",
    title: "White Label AI Builder - Product Strategy Lead",
    description: "Strategic product vision and design for enterprise AI tools",
    tags: ["AI/ML", "Enterprise", "White Label", "Strategy"],
    image: "/projects/white-label-thumb.png",
    heroImage: "/projects/white-label-thumb.png",
    overview: "Developed product strategy and vision for a white-label AI builder platform that allows enterprise clients to customize and deploy AI solutions. Focused on creating scalable design patterns and intuitive workflows.",
    role: "Product Designer - Led product strategy, vision design, and user journey mapping",
    outcomes: [
      "Launched MVP in 3 months",
      "100% adoption rate by initial enterprise clients",
      "Scalable design system supporting 10+ white-label variations"
    ],
    highlight: "HIGHLIGHT",
    bgColor: "#DAEFFF",
  },
  {
    slug: "invoices",
    title: "Finance Tool end-to-end UX vision",
    description: "Reduced error 30%. Approval of invoices 60% faster.",
    tags: ["Finance", "Workflow", "Enterprise"],
    image: "/projects/invoices-thumb.png",
    heroImage: "/projects/invoices-thumb.png",
    overview: "Redesigned the invoice approval workflow to reduce processing time from 5 days to 1 day. Focused on automation, clear status indicators, and streamlined decision-making processes.",
    role: "Product Designer - End-to-end ownership of invoice workflow redesign",
    outcomes: [
      "80% reduction in invoice approval time (5 days → 1 day)",
      "60% decrease in pending invoices",
      "Improved user satisfaction scores by 45%"
    ],
    metrics: [
      "Support tickets about that feature dropped",
      "Customer complaints stopped.",
      "Task completion time dropped",
      "Team feedback"
    ],
    feedback: [
      {
        role: "Software Engineer",
        text: "Julia greatly improved the **Dynamic Contract Override** project by consistently operating at a **senior level of ownership and strategic execution**.\n\nShe demonstrated **proactive stakeholder management** by organizing user sessions to gather insights and leading detailed discussions to ensure full team alignment on DCO features.\n\nShe established a **strategic, multi-step iterative feedback process**, moving from collecting feedback on existing tools to observing user behavior on the new setup. This methodical approach led to crucial strategic insights, specifically identifying the difference between the **override and stack concepts** and the fundamental shift to **purpose-based contracts**—knowledge that will greatly improve user understanding.\n\nJulia took ownership of **technical clarity** by preparing a comprehensive design document that served as a valuable guide. Her commitment to **cross-functional excellence** was evident in sharing the final draft for collective review to minimize confusion.\n\nFurthermore, she provided **critical team enablement** by always being available to assist with design needs, directly helping the team move faster in UI development."
      }
    ],
    highlight: "HIGHLIGHT",
    bgColor: "#F2DCFF",
  },
  {
    slug: "user-journey",
    title: "Mobile App Onboarding - Increased Accounts 20%",
    description: "End-to-end user journey redesign",
    tags: ["Mobile", "User Journey", "Conversion"],
    image: "/projects/open-account-thumb.png",
    heroImage: "/projects/open-account-thumb.png",
    overview: "Owned the complete user journey from discovery to account creation for the mobile application. Redesigned onboarding flow, improved sign-up process, and optimized conversion funnel.",
    role: "Product Designer - End-to-end user journey ownership and optimization",
    outcomes: [
      "20% increase in new account creation",
      "35% reduction in sign-up drop-off rate",
      "Improved time-to-first-value from 15 minutes to 5 minutes"
    ],
    highlight: "OPEN",
    bgColor: "#FFFFF1",
  },
  {
    slug: "developers-tool",
    title: "Developer Sandbox Tool - 99% Faster Activation",
    description: "3 months → 3 days setup time",
    tags: ["Developer Tools", "Workflow", "Automation"],
    image: "/projects/developers-tool.jpg",
    heroImage: "/projects/developers-tool-hero.jpg",
    overview: "Redesigned the developer sandbox activation process to reduce setup time from 3 months to 3 days. Focused on automation, clear documentation, and self-service workflows.",
    role: "Product Designer - Led developer experience design and workflow optimization",
    outcomes: [
      "99% reduction in activation time (3 months → 3 days)",
      "85% of developers now self-serve activation",
      "Reduced support tickets by 70%"
    ],
    highlight: "OPEN",
    bgColor: "#ECE2D7",
  },
  {
    slug: "design-system",
    title: "Design System 0-1 - Lead Designer, React & Native",
    description: "50+ components, unified 14+ products",
    tags: ["Design System", "React", "Native", "Components"],
    image: "/projects/design-system.jpg",
    heroImage: "/projects/design-system-hero.jpg",
    overview: "Led the creation of a comprehensive design system from scratch, including component libraries for React.js and React Native. Established design tokens, component patterns, and documentation.",
    role: "Product Designer - Design system lead, component architecture, and library development",
    outcomes: [
      "Launched 0-1 design system with 50+ components",
      "Unified design across 14+ products",
      "Reduced development time by 40% for new features"
    ],
    highlight: "OPEN",
    bgColor: "#FFFFF1",
  },
  {
    slug: "salesforce-features",
    title: "Salesforce Integration - Commercial UX Designer",
    description: "Improved sales workflow efficiency 30%",
    tags: ["Salesforce", "Integration", "Enterprise"],
    image: "/projects/salesforce.jpg",
    heroImage: "/projects/salesforce-hero.jpg",
    overview: "Designed Salesforce integration features and commercial user experience for enterprise clients. Focused on seamless tooling integration and improved sales workflows.",
    role: "Product Designer - Salesforce integration design and commercial UX",
    outcomes: [
      "Successful integration with Salesforce ecosystem",
      "Improved sales workflow efficiency by 30%",
      "Increased enterprise client satisfaction"
    ],
    bgColor: "#DAEFFF",
  },
  {
    slug: "payments",
    title: "Payment Processing Workflow - Reduced Errors 30%",
    description: "99.5% payment accuracy achieved",
    tags: ["Payments", "Finance", "Workflow"],
    image: "/projects/payments.jpg",
    heroImage: "/projects/payments-hero.jpg",
    overview: "Redesigned end-to-end payment processing workflow to reduce errors and improve accuracy. Implemented validation, confirmation steps, and error prevention patterns.",
    role: "Product Designer - Payment workflow redesign and error reduction",
    outcomes: [
      "30% decrease in incorrect payments",
      "Improved payment accuracy to 99.5%",
      "Reduced payment disputes by 50%"
    ],
    bgColor: "#ECE2D7",
  },
  {
    slug: "vision-activation",
    title: "Product Activation Workflow - 93% Faster",
    description: "3 months → 1 week activation time",
    tags: ["Product Strategy", "Workflow", "Automation"],
    image: "/projects/vision.jpg",
    heroImage: "/projects/vision-hero.jpg",
    overview: "Redesigned product activation workflow to reduce time from 3 months to 1 week through automation and streamlined processes.",
    role: "Product Designer - Product activation workflow redesign",
    outcomes: [
      "93% reduction in activation time (3 months → 1 week)",
      "Automated 80% of activation steps",
      "Improved customer time-to-value"
    ],
    bgColor: "#ECE2D7",
  },
  {
    slug: "product-library",
    title: "White Label Component Library - Lead Designer",
    description: "50% faster development, 10+ clients",
    tags: ["Design System", "White Label", "Components"],
    image: "/projects/product-library.jpg",
    heroImage: "/projects/product-library-hero.jpg",
    overview: "Created a product library with white label components to accelerate development speed. Enabled faster customization and deployment for enterprise clients.",
    role: "Product Designer - Component library design and white label strategy",
    outcomes: [
      "Launched comprehensive product library",
      "50% faster development for new features",
      "Enabled white label customization for 10+ clients"
    ],
    bgColor: "#ECE2D7",
  },
  {
    slug: "a11y-training",
    title: "Accessibility Training Program - Lead A11y Designer",
    description: "100% WCAG 2.1 AA compliant, 50+ trained",
    tags: ["Accessibility", "A11y", "Compliance", "Training"],
    image: "/projects/a11y.jpg",
    heroImage: "/projects/a11y-hero.jpg",
    overview: "Led accessibility training and ensured all products meet EU Accessibility Act 2025 requirements. Conducted audits, training sessions, and design system updates.",
    role: "Product Designer - Accessibility lead and team training",
    outcomes: [
      "100% of products now WCAG 2.1 AA compliant",
      "Trained 50+ designers and developers",
      "Established accessibility guidelines and patterns"
    ],
    feedback: [
      {
        role: "Product Manager",
        text: "During H1, Julia proved instrumental in driving accessibility compliance across multiple teams.\n\nHer UX and UI accessibility expertise was critical: she organized workshops and provided detailed guidance to the Branded Landing team, enabling them to easily conduct accessibility testing and meet their compliance deadline. Julia also extended her support by assisting the App team with Fable integration.\n\nBeyond immediate project needs, Julia demonstrated foresight by creating the \"Accessibility Guide for Partnerships UX,\" establishing a valuable, permanent resource to support future compliance efforts across the entire organization."
      }
    ],
    bgColor: "#ECE2D7",
  },
  {
    slug: "partnership-awareness",
    title: "Partnership Discovery - Increased Discovery 25%",
    description: "Experimentation and UX optimization",
    tags: ["Experimentation", "Partnership", "Discovery"],
    image: "/projects/partnership.jpg",
    heroImage: "/projects/partnership-hero.jpg",
    overview: "Conducted experiments to improve partnership awareness and discovery. Tested different UI patterns, messaging, and placement strategies.",
    role: "Product Designer - Experimentation and partnership UX",
    outcomes: [
      "Improved partnership discovery by 25%",
      "Increased partnership engagement by 40%",
      "Identified optimal placement and messaging strategies"
    ],
    bgColor: "#ECD7E8",
  },
  {
    slug: "insurance-discovery",
    title: "Insurance Discovery - Increased Conversion 20%",
    description: "Product discovery and UX experimentation",
    tags: ["Experimentation", "Insurance", "Discovery"],
    image: "/projects/insurance.jpg",
    heroImage: "/projects/insurance-hero.jpg",
    overview: "Ran experiments to improve insurance product discovery and user engagement. Tested various discovery patterns and recommendation algorithms.",
    role: "Product Designer - Experimentation and insurance UX",
    outcomes: [
      "Improved insurance discovery rate by 30%",
      "Increased conversion from discovery to purchase by 20%",
      "Optimized recommendation algorithms"
    ],
    bgColor: "#ECE2D7",
  },
  {
    slug: "campaign-tool",
    title: "Dynamic Campaign Tool - Partner Experience Designer",
    description: "Reduced campaign creation time 60%",
    tags: ["Campaign", "Partners", "Tools"],
    image: "/projects/dnamic-campaign-thumb.png",
    heroImage: "/projects/dnamic-campaign-thumb.png",
    overview: "Designed a new dynamic campaign tool that allows partners to create and manage campaigns with ease. Focused on intuitive workflows and real-time preview capabilities.",
    role: "Product Designer - Campaign tool design and partner experience",
    outcomes: [
      "Launched new campaign creation tool",
      "Reduced campaign creation time by 60%",
      "Increased partner campaign adoption by 45%"
    ],
    bgColor: "#FFFFF1",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

