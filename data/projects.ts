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
  scenario?: string;
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
  metrics?: string[]; // Array of metric achievements
  results?: {
    title: string;
    metrics: Array<{
      value: string;
      label: string;
      description?: string;
    }>;
  };
  reflection?: string;
  // Project metadata
  completedDate?: string; // Format: "January 2024" or "2024-01"
  context?: string[]; // B2B, Consumer, AI, Mobile
  company?: string; // Which company the project was for
}

export const projects: Project[] = [
  {
    slug: "openai-widget",
    title: "OpenAI Search Widget - Lead UX Designer",
    description: "2.5K search requests per hour on launch",
    tags: ["AI/ML", "Enterprise", "Widget"],
    image: "/projects/open-ai-thumb.png",
    heroImage: "/projects/open-ai-hero.png",
    completedDate: "September 2025",
    overview: "Led the design and user experience for an OpenAI-powered search widget integrated into enterprise products. The widget enables users to perform intelligent searches across multiple data sources with natural language queries.",
    role: "Product Designer - Owned end-to-end UX design, user research, and design system integration",
    scenario: "OpenAI is launching apps in an event. Booking.com is one of the showcased partners. The project deadline: 4 weeks",
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
      "2.5K search requests per hour on launch day",
      "40% increase in user engagement with search functionality",
      "Reduced search time from 3 minutes to 30 seconds average"
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

