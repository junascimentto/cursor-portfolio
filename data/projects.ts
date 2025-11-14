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
    role: "Lead Product Designer - Owned end-to-end UX design, user research, AI/ML product design, and enterprise experience integration. Contribute to design system for AI, accessibility compliance, and data-driven design decisions.",
    keyContribution: {
      description: "Facilitated stakeholders in design-led ideation and product specification with both Booking and Open team.",
      highlight: "One of my main contributions was speed—using AI tools to prototype faster and get early and constant feedback, bringing clarity to the team. This helped the team ship 3× faster. I also lead and presented all the product meetings with high Leaderships for both companies related to user experience and clarified ambiguous scope and shared clear UI/UX guidelines with the team."
    },
    scenario: "OpenAI is launching apps in an event. Booking.com is one of the showcased partners. The project deadline: 3 weeks",
    problem: "ChatGPT users planning trips lacked visual context when searching for hotels. The conversational interface only provided text-based responses, making it difficult for users to compare options and make confident booking decisions. This created a gap between discovery and decision-making in the travel planning journey.",
    problemFraming: "I framed the challenge around three core user needs: visual context for comparison, trust-building through rich information, and seamless transition from conversation to booking. Using **user research** and data-driven insights, I designed a solution that worked within ChatGPT's strict design guidelines while maintaining Booking.com's brand identity and ensuring compliance with OpenAI's requirements.",
    systemsThinking: "I designed the widget as a **modular, scalable component** that could scale across different OpenAI app contexts. The carousel pattern was chosen to maximize information density while maintaining visual hierarchy. I ensured the **design system** components were reusable and could adapt to future integrations, reducing technical debt and enabling faster iterations. This systems-oriented approach demonstrated my ability to think beyond individual features to create enterprise-scale solutions.",
    collaboration: "I worked closely with product managers to align on feature priorities and scope, with engineers to understand **technical constraints** and AI/ML capabilities, and with legal teams to ensure compliance. I facilitated **cross-functional workshops** to gather input and built consensus around design decisions. Regular syncs with OpenAI's design team ensured alignment with their platform guidelines. This demonstrated my ability to influence stakeholders and drive design-led product development.",
    metrics: [
      "**2.5K search requests per hour** on launch day",
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
      "Successfully launched in 3 weeks",
      "World* Available With direct invocation Except EEA, UK and Switzerland",
      "2.5K search requests per hour on launch day",
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
    title: "Enterprise AI White Label Platform - Product Strategy Lead",
    description: "Strategic product vision for scalable B2B2C white label travel platform",
    tags: ["AI/ML", "Enterprise", "White Label", "Strategy", "B2B2C"],
    image: "/projects/white-label-thumb.png",
    heroImage: "/projects/whitelabel-hero.png",
    overview: "Booking.com's Enterprise White Label platform serves major enterprise partners including airlines, banks, and loyalty programs—a **$2.2B TTV opportunity** with 15 main prospects and 7 lost/at-risk deals. The Partnerships department needed to compete in the B2B2C white label market against established players like Expedia, Rocket Travel by Agoda, and Travel Payouts. However, the existing solution was only **70% complete**—a half-baked platform requiring high maintenance with 1,797 custom hybrid pages for 557 partners that weren't connected to the main platform. With infrastructure deprecation looming, the department needed a strategic vision for a scalable Enterprise White Label platform that could enable full customization while maintaining operational efficiency—all within a competitive market where partners demanded brand continuity across the entire customer journey.",
    role: "Product Designer - Led product strategy, vision design, and user journey mapping for Enterprise White Label",
    summary: {
      problem: "Enterprise partners (airlines, banks, loyalty programs) needed fully branded travel platforms with brand continuity across the entire customer journey, but Booking.com's existing solution was only 70% complete—a half-baked solution that didn't meet partner needs while still requiring high maintenance. Partners wanted custom styling, messaging, supply customization, mobile app support, and seamless loyalty integration. How might we create a scalable Enterprise White Label platform that enables full customization while maintaining operational efficiency?",
      whatIDid: [
        "Led **product strategy** and vision design for Enterprise White Label platform, defining three-horizon roadmap (Profitability 24-25, Customization at Scale 26-27, Branded Platform as a Service 28+)",
        "Conducted **competitive analysis** benchmarking against Expedia, Rocket Travel by Agoda, Travel Payouts, and others to identify must-have features and differentiators",
        "Designed **AI custom site generator** as key differentiator—enabling partners to launch branded travel stores with a few prompts, reducing engineering time and time-to-market",
        "Created **scalable customization architecture** supporting full funnel customization: custom styling, messaging, supply ranking, preferred supply, content integration, and mobile app support",
        "Designed **brand continuity** across entire customer journey—from traffic generators through landing platforms, loyalty & redemption, to customer service",
        "Established **design system and component architecture** that enabled 100% customization while maintaining scalability and reducing maintenance overhead",
        "Conducted **partner research** and account manager interviews to validate demand, prioritize features, and understand partner needs"
      ],
      impact: "Defined product strategy for Enterprise White Label platform addressing $2.2B TTV opportunity (750.6K GBTR) across 15 main prospects and 7 lost/at-risk deals. The three-horizon roadmap and AI-powered customization approach positioned Booking.com to compete effectively in the B2B2C white label market while maintaining scalability."
    },
    scenario: "Booking.com needed to compete in the Enterprise White Label market, with competitors like Expedia, Rocket Travel by Agoda, and Travel Payouts already offering mature solutions. Enterprise partners (airlines, banks, loyalty programs) wanted fully branded travel platforms, but our existing solution was only 70% complete—a half-baked solution requiring high support and maintenance. We needed a strategic vision for a scalable Enterprise White Label platform.",
    problem: "The existing white label solution was only 70% complete, creating a half-baked solution that didn't meet partner needs while still requiring high design support and maintenance. Custom hybrid pages (1,797 pages for 557 partners) were not connected to the main platform, and infrastructure deprecation would make current code obsolete. Partners needed full customization—custom styling, messaging, supply ranking, mobile app support, loyalty integration—but the current solution had limitations that prevented scalability.",
    problemFraming: "I framed the challenge around three core needs: **scalability** through unified architecture that reduces maintenance, **customization** through flexible design system supporting 100% partner customization, and **differentiation** through AI-powered tools and seamless brand continuity. Using **competitive analysis** and **partner research**, I identified that the key was creating a platform that enabled full customization at scale while reducing operational overhead through automation and unified infrastructure.",
    systemsThinking: "I designed the Enterprise White Label platform as a **three-horizon system** where Horizon 1 (Profitability) focused on unified hybrid migration and infrastructure efficiency, Horizon 2 (Customization at Scale) enabled self-serve customization and inventory control, and Horizon 3 (Branded Platform as a Service) provided AI-powered site generation and full platform customization. The design used **modular architecture** where core booking functionality remained consistent while visual, messaging, and supply layers could be fully customized per partner. This systems-oriented approach enabled the platform to scale from current 70% solution to 100% customizable while maintaining code quality and reducing maintenance.",
    collaboration: "I worked closely with product managers to define the three-horizon roadmap and prioritize features, with engineering teams to understand technical constraints and infrastructure dependencies, with account managers to gather partner requirements, and with leadership to secure buy-in and funding. I facilitated **competitive analysis** benchmarking against Expedia, Rocket Travel, and Travel Payouts, and conducted **partner research** to validate demand. Regular syncs with stakeholders across Strategic Partnerships, Platforms, and Engineering ensured alignment on the vision and roadmap.",
    keyContribution: {
      description: "Led product strategy and vision design for Enterprise White Label platform, defining three-horizon roadmap and AI-powered customization approach to address $2.2B TTV opportunity.",
      highlight: "I led the product strategy for Enterprise White Label, defining a three-horizon roadmap (Profitability, Customization at Scale, Branded Platform as a Service) and designing AI custom site generator as a key differentiator. Through competitive analysis and partner research, I created a strategic vision that addressed the $2.2B TTV opportunity while enabling 100% customization at scale through unified architecture and automation."
    },
    metrics: [
      "**$2.2B TTV opportunity** identified (750.6K GBTR) across 15 main prospects and 7 lost/at-risk deals",
      "**Three-horizon roadmap** defined: Profitability (24-25), Customization at Scale (26-27), Branded Platform as a Service (28+)",
      "**70% solution** analyzed with clear path to 100% customizable platform",
      "**Competitive analysis** completed benchmarking against Expedia, Rocket Travel, Travel Payouts",
      "**AI custom site generator** designed as key differentiator reducing time-to-market"
    ],
    impact: "The Enterprise White Label product strategy positioned Booking.com to compete effectively in the B2B2C white label market, addressing a $2.2B TTV opportunity. The three-horizon roadmap and AI-powered customization approach demonstrated how **strategic design thinking** and **systems architecture** can enable business growth while maintaining scalability. The vision addressed partner needs for full brand continuity and customization while reducing operational overhead through unified infrastructure and automation.",
    challenges: {
      intro: "This project required balancing full customization with scalability, addressing infrastructure deprecation, and competing in a mature market.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Half-Baked Solution with High Maintenance",
          description: "The existing solution was only 70% complete but still required high design support and maintenance. I designed a unified hybrid architecture that would migrate existing custom solutions into a scalable platform, reducing maintenance while enabling full customization."
        },
        {
          title: "Infrastructure Deprecation and Customization Limitations",
          description: "Infrastructure changes would make current custom code obsolete, and new infrastructure would limit customization requests. I designed a modular architecture with design tokens and component system that enabled customization without hard-coding, ensuring future infrastructure changes wouldn't break partner customizations."
        },
        {
          title: "Competing in Mature Market",
          description: "Competitors like Expedia and Rocket Travel already had mature white label solutions. I identified AI custom site generator as a key differentiator—enabling partners to launch branded stores with a few prompts, reducing engineering time and time-to-market compared to legacy custom website building approaches."
        },
        {
          title: "Balancing 100% Customization with Scalability",
          description: "Partners needed full customization (styling, messaging, supply, content), but we needed to maintain scalable architecture. I designed a flexible design system with customization points for all partner needs while keeping core booking functionality consistent, enabling brand customization without code duplication."
        }
      ]
    },
    whatILearnt: "Leading the Enterprise White Label product strategy taught me that **strategic design thinking requires both outside-in and inside-out perspectives**. By conducting competitive analysis and partner research, I understood what partners needed and how competitors were solving it. By analyzing our existing 70% solution, I identified what we had and what was missing. The key was creating a vision that addressed partner needs while leveraging our strengths (like AI capabilities) and solving our weaknesses (infrastructure deprecation, maintenance overhead). This experience reinforced the importance of **competitive intelligence** and **partner research** in product strategy, where understanding the market and customer needs is crucial for creating winning strategies.",
    outcomes: [
      "Product strategy and three-horizon roadmap defined",
      "$2.2B TTV opportunity identified and validated",
      "Competitive analysis completed with differentiation strategy",
      "AI custom site generator designed as key differentiator"
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
    heroImage: "/projects/invoices-hero.png",
    overview: "The Finance department at Booking.com processes thousands of invoices monthly across multiple teams and approval chains. Finance teams were spending **5 days on average** to approve invoices, with high error rates and frequent support tickets creating operational bottlenecks. The existing workflow lacked automation, clear status visibility, and efficient decision-making tools, leading to delays in vendor payments and increased manual work. In a fast-paced environment where timely invoice processing directly impacts vendor relationships and cash flow, the department needed a redesigned workflow that could handle high volume while reducing errors and processing time.",
    role: "Product Designer - End-to-end ownership of invoice workflow redesign",
    summary: {
      problem: "Finance teams were spending 5 days on average to approve invoices, with high error rates and frequent support tickets. The existing workflow lacked automation, clear status visibility, and efficient decision-making tools. How might we redesign the invoice approval process to reduce processing time while improving accuracy?",
      whatIDid: [
        "Redesigned the **end-to-end invoice workflow** from submission to approval, reducing processing time from 5 days to 1 day",
        "Implemented **automated validation** and smart routing that reduced manual review time by 60%",
        "Designed **clear status indicators** and progress tracking that improved visibility across the approval chain",
        "Created **streamlined decision-making interfaces** with contextual information and one-click approval actions",
        "Established **error prevention patterns** including validation checks, confirmation steps, and audit trails",
        "Conducted **user research** with finance teams to understand pain points and optimize workflows"
      ],
      impact: "Achieved 80% reduction in invoice approval time (5 days → 1 day), 30% reduction in errors, and 60% decrease in pending invoices. Support tickets dropped significantly and user satisfaction scores improved by 45%."
    },
    scenario: "Finance teams were overwhelmed with invoice processing, taking 5 days on average to approve invoices. High error rates and lack of visibility were causing delays and frustration. We needed to redesign the workflow to be faster, more accurate, and easier to use.",
    problem: "The invoice approval process was slow, error-prone, and lacked visibility. Finance teams couldn't see where invoices were in the approval chain, leading to delays and confusion. Manual validation and routing created bottlenecks and increased error rates.",
    problemFraming: "I framed the challenge around three core needs: **speed** through automation and smart routing, **accuracy** through validation and error prevention, and **visibility** through clear status indicators and progress tracking. Using **user research** and workflow analysis, I identified that the key was automating routine validations while providing clear decision-making tools for exceptions, rather than requiring manual review of every invoice.",
    systemsThinking: "I designed the workflow as a **modular, state-based system** where invoices moved through clear stages with automated validation at each step. The design used **status indicators** and **progress tracking** that were consistent across all views, enabling users to quickly understand where any invoice stood in the process. This systems-oriented approach reduced cognitive load and enabled parallel processing, allowing multiple team members to work on different invoices simultaneously without confusion.",
    collaboration: "I worked closely with finance teams to understand their workflows and pain points, with product managers to prioritize automation features, and with engineers to design **validation rules** and **routing logic**. I facilitated **user sessions** to gather feedback on existing tools and observed user behavior to identify optimization opportunities. Regular syncs with stakeholders ensured the redesign met business requirements while improving user experience.",
    keyContribution: {
      description: "Owned the end-to-end redesign of the invoice approval workflow, reducing processing time by 80% while improving accuracy and user satisfaction.",
      highlight: "I redesigned the invoice workflow from the ground up, implementing automated validation and smart routing that reduced manual review time by 60%. By designing clear status indicators and streamlined decision-making interfaces, I enabled finance teams to process invoices 5× faster while reducing errors by 30%."
    },
    metrics: [
      "**80% reduction** in invoice approval time (5 days → 1 day)",
      "**30% reduction** in invoice processing errors",
      "**60% decrease** in pending invoices",
      "**45% improvement** in user satisfaction scores",
      "**Significant drop** in support tickets related to invoice processing"
    ],
    impact: "The redesigned invoice workflow transformed how finance teams process invoices, reducing processing time by 80% and errors by 30%. The improved visibility and automation enabled teams to handle higher volumes without increasing headcount, demonstrating how **workflow design** and **automation** can drive operational efficiency in enterprise finance tools.",
    challenges: {
      intro: "This project required balancing automation with flexibility, ensuring accuracy while maintaining speed.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Complex Approval Chains",
          description: "Different invoices required different approval paths based on amount, department, and other factors. I designed a flexible routing system with clear rules and exceptions handling, enabling automated routing for standard cases while allowing manual override when needed."
        },
        {
          title: "Error Prevention Without Slowing Down",
          description: "We needed to prevent errors without adding friction to the approval process. I implemented smart validation that ran in the background, surfacing issues proactively with clear explanations and suggested fixes, rather than blocking users with error messages."
        },
        {
          title: "Visibility Across Large Teams",
          description: "Finance teams needed to see invoice status across multiple approvers and departments. I designed a unified dashboard with filtering and search capabilities that provided visibility without overwhelming users with information."
        }
      ]
    },
    whatILearnt: "Redesigning the invoice workflow taught me that **automation and user experience go hand in hand**—automation shouldn't mean removing human judgment, but rather enabling it with better tools and information. By designing clear status indicators and contextual decision-making interfaces, we enabled users to make faster, more accurate decisions. The key was understanding that workflow design is about **reducing cognitive load** and **eliminating friction**, not just adding features. This experience reinforced the importance of **user research** in enterprise tools, where understanding actual workflows and pain points is crucial for meaningful improvements.",
    outcomes: [
      "80% reduction in invoice approval time (5 days → 1 day)",
      "60% decrease in pending invoices",
      "Improved user satisfaction scores by 45%"
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
    description: "UX Designer",
    tags: ["Mobile", "User Journey", "Conversion"],
    image: "/projects/open-account-thumb.png",
    heroImage: "/projects/open-account-thumb.png",
    overview: "The Mobile App team at Booking.com operates in a **highly regulated environment** with strict compliance requirements for account creation and user verification. The mobile app onboarding flow had high drop-off rates and low account creation, with users finding the sign-up process complex and time-consuming. The team needed to balance security requirements mandated by financial regulations with usability—a challenge that required careful design to meet compliance standards without overwhelming users. In a competitive mobile travel market where first impressions and time-to-value are critical, the department needed a redesigned onboarding journey that could increase account creation while maintaining full regulatory compliance.",
    role: "Product Designer - End-to-end user journey ownership and optimization",
    summary: {
      problem: "The mobile app onboarding flow had high drop-off rates and low account creation. Users found the sign-up process complex and time-consuming, with too many steps and unclear requirements. In a highly regulated environment, we needed to balance security requirements with usability. How might we redesign the onboarding journey to increase account creation on the App during covid?",
      whatIDid: [
        "Owned the **end-to-end user journey** from discovery to account creation, redesigning the complete onboarding flow",
        "Simplified **user input** by reducing form fields, implementing smart defaults, and progressive disclosure patterns",
        "Balanced **safety vs usability** by designing clear validation messages and contextual help that met regulatory requirements without overwhelming users",
        "Optimized the **conversion funnel** by removing friction points and creating clear progress indicators",
        "Managed **stakeholders** across product, legal, compliance, and engineering to align on requirements and design decisions",
        "Conducted **user research** and A/B testing to validate design improvements and measure impact"
      ],
      impact: "Achieved 20% increase in new account creation, 35% reduction in sign-up drop-off rate, and improved time-to-first-value from 15 minutes to 5 minutes. The redesigned journey maintained full compliance while significantly improving user experience."
    },
    scenario: "Mobile app users were dropping off during the onboarding process, with low account creation rates. The sign-up flow was complex, requiring too much information upfront. We needed to redesign the journey to be simpler and faster while meeting strict regulatory requirements.",
    problem: "The mobile app onboarding process was too complex and time-consuming, causing users to abandon sign-up before completing account creation. The flow required extensive information upfront, lacked clear progress indicators, and didn't balance security requirements with usability.",
    problemFraming: "I framed the challenge around three core needs: **simplicity** through reduced input and smart defaults, **clarity** through clear progress and requirements, and **compliance** through validation that meets regulatory standards without creating friction. Using **user research** and funnel analysis, I identified that the key was progressive disclosure—asking for information when needed rather than upfront, and providing clear context for why information was required.",
    systemsThinking: "I designed the onboarding journey as a **modular, step-based flow** where each step had a clear purpose and could be completed independently. The design used **progressive disclosure** to show information and requirements contextually, reducing cognitive load. This systems-oriented approach enabled users to complete onboarding in smaller, manageable steps while maintaining data integrity and compliance requirements.",
    collaboration: "I worked closely with product managers to define onboarding requirements, with legal and compliance teams to ensure regulatory adherence, and with engineers to implement validation and security measures. I facilitated **stakeholder workshops** to align on the balance between security and usability, and conducted **user testing** to validate design decisions. Regular syncs with cross-functional teams ensured the redesign met both user needs and business requirements.",
    keyContribution: {
      description: "Owned the end-to-end redesign of the mobile app onboarding journey, increasing account creation by 20% while maintaining compliance in a highly regulated environment.",
      highlight: "I redesigned the complete onboarding flow from discovery to account creation, simplifying user input and balancing safety with usability. By implementing progressive disclosure and clear progress indicators, I reduced sign-up drop-off by 35% and improved time-to-first-value from 15 minutes to 5 minutes, all while maintaining full regulatory compliance."
    },
    metrics: [
      "**20% increase** in new account creation",
      "**35% reduction** in sign-up drop-off rate",
      "**Improved time-to-first-value** from 15 minutes to 5 minutes",
      "**Maintained 100% compliance** with regulatory requirements"
    ],
    impact: "The redesigned onboarding journey transformed the mobile app sign-up experience, increasing account creation by 20% while maintaining full compliance. The simplified flow and improved user experience demonstrated how **user journey design** can drive conversion in highly regulated environments without compromising security or compliance.",
    challenges: {
      intro: "This project required balancing usability with regulatory compliance, simplifying the flow while meeting strict security requirements.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Safety vs Usability Balance",
          description: "We needed to collect extensive information for compliance, but asking for too much upfront caused drop-offs. I designed progressive disclosure patterns that collected information in stages, with clear explanations of why each piece of information was needed, balancing security requirements with user experience."
        },
        {
          title: "Stakeholder Alignment Across Multiple Teams",
          description: "Product, legal, compliance, and engineering had different priorities and requirements. I facilitated workshops to align on the balance between security and usability, creating design solutions that met all requirements while improving user experience."
        },
        {
          title: "Simplifying Complex Input Requirements",
          description: "The sign-up process required many fields with complex validation rules. I redesigned forms with smart defaults, inline validation, and contextual help that guided users through the process without overwhelming them."
        }
      ]
    },
    whatILearnt: "Redesigning the mobile onboarding journey taught me that **simplicity and compliance aren't mutually exclusive**—with thoughtful design, you can meet regulatory requirements while creating a delightful user experience. By using progressive disclosure and clear communication, we reduced cognitive load without sacrificing security. The key was understanding that users don't mind providing information when they understand why it's needed and when the process feels manageable. This experience reinforced the importance of **stakeholder management** in highly regulated industries, where aligning product, legal, and engineering teams is crucial for successful design outcomes.",
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
    overview: "Redesigned the developer sandbox activation process to reduce setup time from 3 months to 3 days (and later to 5 minutes). Focused on automation, clear documentation, technical copy, and self-service workflows in a developer environment with heavy documentation requirements and strict technical requirements.",
    role: "Product Designer - Led developer experience design and workflow optimization",
    summary: {
      problem: "Developers were waiting 3 months to get started with the API, with a complex activation process that required extensive manual setup and support. The developer environment had heavy documentation but lacked clear guidance, and strict technical requirements made self-service activation difficult. How might we redesign the activation process to enable developers to get started in minutes instead of months?",
      whatIDid: [
        "Redesigned the **developer sandbox activation** process, reducing setup time from 3 months to 3 days (and later to 5 minutes)",
        "Designed **self-service workflows** that automated manual setup steps and reduced dependency on support teams",
        "Created **clear technical documentation** and in-context guidance that helped developers navigate complex requirements",
        "Improved **technical copy** and error messages to be developer-friendly and actionable",
        "Designed **automated validation** and setup processes that handled strict technical requirements behind the scenes",
        "Conducted **developer interviews** to understand pain points and optimize the activation experience"
      ],
      impact: "Achieved 99% reduction in activation time (3 months → 3 days, later improved to 5 minutes), with 85% of developers now self-serving activation. Support tickets reduced by 70%, and developer satisfaction significantly improved."
    },
    scenario: "Developers were waiting 3 months to activate their sandbox environment and start using the API. The activation process required extensive manual setup, unclear documentation, and frequent support interactions. We needed to redesign the process to enable self-service activation in minutes.",
    problem: "The developer sandbox activation process was slow, complex, and required extensive manual intervention. Heavy documentation existed but wasn't organized for quick reference, and strict technical requirements made it difficult for developers to self-serve. This created long wait times and high support burden.",
    problemFraming: "I framed the challenge around three core needs: **speed** through automation and self-service, **clarity** through better documentation and technical copy, and **accessibility** through clear guidance for complex requirements. Using **developer interviews** and workflow analysis, I identified that the key was automating routine setup steps while providing clear, contextual guidance for the steps that required developer input.",
    systemsThinking: "I designed the activation process as a **modular, automated workflow** where routine setup steps happened automatically in the background, while developer input was requested only when necessary. The design integrated **documentation** and **guidance** contextually within the flow, reducing the need to reference external docs. This systems-oriented approach enabled developers to complete activation independently while ensuring all technical requirements were met automatically.",
    collaboration: "I worked closely with developer relations teams to understand developer needs and pain points, with product managers to prioritize automation features, and with engineers to design **automated setup processes** and **validation logic**. I facilitated **developer interviews** to gather feedback and observed activation sessions to identify friction points. Regular syncs with technical writing teams ensured documentation was clear and actionable.",
    keyContribution: {
      description: "Led the redesign of the developer sandbox activation process, reducing setup time from 3 months to 5 minutes through automation and improved developer experience.",
      highlight: "I redesigned the developer activation workflow from the ground up, implementing automated setup processes and self-service workflows that reduced activation time by 99%. By improving technical documentation and creating clear, contextual guidance, I enabled 85% of developers to self-serve activation, reducing support tickets by 70%."
    },
    metrics: [
      "**99% reduction** in activation time (3 months → 3 days, later improved to 5 minutes)",
      "**85% of developers** now self-serve activation",
      "**70% reduction** in support tickets",
      "**Significant improvement** in developer satisfaction scores"
    ],
    impact: "The redesigned developer activation process transformed how developers get started with the API, reducing activation time from 3 months to 5 minutes. The improved developer experience and self-service capabilities demonstrated how **workflow design** and **automation** can dramatically improve developer onboarding and reduce operational overhead.",
    challenges: {
      intro: "This project required balancing automation with flexibility, ensuring developers could self-serve while meeting strict technical requirements.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Complex Technical Requirements",
          description: "The activation process had strict technical requirements that needed to be validated, but manual validation was slow. I designed automated validation that ran in the background, surfacing issues with clear, actionable error messages that helped developers fix problems quickly."
        },
        {
          title: "Heavy Documentation Without Clear Guidance",
          description: "Extensive documentation existed but wasn't organized for quick reference during activation. I redesigned the documentation structure and integrated contextual guidance directly into the activation flow, reducing the need to reference external docs."
        },
        {
          title: "Technical Copy and Error Messages",
          description: "Error messages and technical copy were unclear and not actionable. I rewrote all technical copy to be developer-friendly, with clear explanations and suggested fixes, making it easier for developers to resolve issues independently."
        }
      ]
    },
    whatILearnt: "Redesigning the developer activation process taught me that **developer experience is about reducing friction**, not just adding features. By automating routine steps and providing clear, contextual guidance, we enabled developers to get started in minutes instead of months. The key was understanding that developers want to move fast, but they also need clear information when things go wrong. This experience reinforced the importance of **technical writing** in developer tools, where clear copy and error messages directly impact developer productivity and satisfaction.",
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
    overview: "Led the creation of a comprehensive design system from scratch, including component libraries for React.js and React Native. Established design tokens, component patterns, documentation, and governance processes. The system unified design across 14+ products and reduced development time significantly.",
    role: "Product Designer - Design system lead, component architecture, and library development",
    summary: {
      problem: "Multiple products were using inconsistent design patterns, components, and styles, leading to fragmented user experiences and slow development. Designers and developers were recreating similar components across products, wasting time and creating technical debt. How might we create a unified design system that enables consistent, scalable design across all products?",
      whatIDid: [
        "Led the creation of a **comprehensive design system from scratch**, including component libraries for React.js and React Native",
        "Established **design tokens** for colors, typography, spacing, and other design primitives that ensured consistency across platforms",
        "Designed and built **50+ reusable components** with clear documentation and usage guidelines",
        "Created **component architecture** and patterns that worked across web (React.js) and mobile (React Native) platforms",
        "Established **design system governance** processes including contribution guidelines, review processes, and release cycles",
        "Unified design across **14+ products** by migrating existing products to use the new design system"
      ],
      impact: "Successfully launched a 0-1 design system with 50+ components that unified design across 14+ products. The system reduced development time by 40% for new features and established a foundation for scalable, consistent design across the organization."
    },
    scenario: "Multiple products were using different design patterns and components, creating inconsistent user experiences and slowing down development. We needed to create a unified design system that could work across web and mobile platforms while enabling faster development.",
    problem: "Design inconsistency across products was creating fragmented user experiences and slowing down development. Without a unified design system, designers and developers were recreating similar components, leading to wasted effort and technical debt.",
    problemFraming: "I framed the challenge around three core needs: **consistency** through shared design tokens and components, **scalability** through reusable patterns that work across platforms, and **efficiency** through reducing redundant work. Using **audit of existing products** and stakeholder interviews, I identified that the key was creating a flexible system that could accommodate different product needs while maintaining consistency.",
    systemsThinking: "I designed the design system as a **hierarchical, token-based architecture** where design tokens (colors, typography, spacing) formed the foundation, components built on top of tokens, and patterns combined components. The system was **platform-agnostic** at the token level, with platform-specific implementations for React.js and React Native. This systems-oriented approach enabled consistency across platforms while allowing platform-specific optimizations where needed.",
    collaboration: "I worked closely with designers across product teams to understand their needs and gather requirements, with engineers to design component APIs and implementation patterns, and with product managers to prioritize components and features. I facilitated **design system workshops** to align on patterns and established **governance processes** for contributions and releases. Regular syncs with design and engineering teams ensured the system met real-world needs.",
    keyContribution: {
      description: "Led the creation of a comprehensive design system from scratch, unifying design across 14+ products and reducing development time by 40%.",
      highlight: "I created a 0-1 design system with 50+ components, design tokens, and comprehensive documentation that worked across React.js and React Native. By establishing clear component architecture and governance processes, I unified design across 14+ products and enabled faster, more consistent development."
    },
    metrics: [
      "**Launched 0-1 design system** with 50+ components",
      "**Unified design** across 14+ products",
      "**40% reduction** in development time for new features",
      "**Established design system governance** and contribution processes"
    ],
    impact: "The design system transformed how products are designed and built, creating consistency across 14+ products and significantly reducing development time. The system became the foundation for scalable design and development, demonstrating how **design systems** can drive efficiency and consistency at scale.",
    challenges: {
      intro: "This project required balancing consistency with flexibility, creating a system that worked across multiple products and platforms.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Cross-Platform Consistency",
          description: "We needed components that worked on both React.js (web) and React Native (mobile) while maintaining visual consistency. I designed a token-based system where design tokens were platform-agnostic, with platform-specific component implementations that shared the same visual language."
        },
        {
          title: "Migrating Existing Products",
          description: "14+ existing products needed to migrate to the new design system without disrupting users. I created migration guides and component mapping that helped teams gradually adopt the system, prioritizing high-impact components first."
        },
        {
          title: "Governance and Contribution Process",
          description: "We needed a process for teams to contribute components while maintaining quality and consistency. I established contribution guidelines, review processes, and release cycles that enabled collaboration while ensuring the system remained cohesive."
        }
      ]
    },
    whatILearnt: "Building a design system from scratch taught me that **design systems are as much about process as they are about components**. Creating great components is important, but establishing governance, contribution processes, and documentation is what makes a design system sustainable. The key was understanding that a design system needs to serve both designers and developers, requiring clear APIs, usage guidelines, and examples. This experience reinforced the importance of **systems thinking** in design, where creating reusable patterns and components enables teams to move faster while maintaining consistency.",
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
    overview: "The Commercial/Sales department at Booking.com manages enterprise client relationships through Salesforce, with sales teams spending significant time switching between Booking.com tools and their CRM. Enterprise sales teams needed to work within their existing Salesforce environment to maintain their established workflows and customer data. The department faced challenges of context switching, duplicate data entry, and inefficient sales processes that impacted deal velocity. In a competitive enterprise sales environment where relationship management and efficiency directly impact revenue, the team needed seamless Salesforce integration that could enable sales teams to work more efficiently without disrupting their existing workflows.",
    role: "Product Designer - Salesforce integration design and commercial UX",
    summary: {
      problem: "Enterprise sales teams were using Salesforce as their primary CRM, but our product required them to switch between multiple tools, creating workflow friction and reducing efficiency. Sales teams needed seamless integration with Salesforce to work within their existing environment. How might we design a Salesforce integration that improves sales workflow efficiency?",
      whatIDid: [
        "Designed **Salesforce integration features** that enabled seamless data sync and workflow integration",
        "Created **commercial user experience** for enterprise clients that worked within Salesforce's interface patterns",
        "Designed **seamless tooling integration** that reduced context switching and improved workflow efficiency",
        "Improved **sales workflows** by enabling sales teams to access product features directly within Salesforce",
        "Conducted **user research** with sales teams to understand their workflows and integration needs",
        "Ensured **compliance and security** requirements were met for enterprise Salesforce deployments"
      ],
      impact: "Successfully integrated with the Salesforce ecosystem, improving sales workflow efficiency by 30%. Enterprise clients reported increased satisfaction with the seamless integration and improved sales productivity."
    },
    scenario: "Enterprise sales teams were using Salesforce as their primary CRM, but our product required them to switch between tools, creating workflow friction. We needed to design a Salesforce integration that enabled sales teams to work efficiently within their existing environment.",
    problem: "Sales teams were experiencing workflow friction by switching between Salesforce and our product. The lack of integration created inefficiencies and reduced productivity. Enterprise clients needed seamless integration with their existing Salesforce environment.",
    problemFraming: "I framed the challenge around three core needs: **seamlessness** through native Salesforce integration, **efficiency** through reduced context switching, and **familiarity** through Salesforce interface patterns. Using **user research** with sales teams, I identified that the key was designing features that felt native to Salesforce while maintaining our product's functionality.",
    systemsThinking: "I designed the integration as a **modular system** that could sync data bidirectionally and provide features within Salesforce's interface. The design followed **Salesforce design patterns** to ensure familiarity while maintaining our product's unique value. This systems-oriented approach enabled sales teams to work efficiently without leaving their primary tool.",
    collaboration: "I worked closely with sales teams to understand their workflows and integration needs, with product managers to prioritize integration features, and with engineers to design data sync and API integration. I facilitated **user sessions** with enterprise clients to gather feedback and ensure the integration met their needs. Regular syncs with Salesforce partnership teams ensured compliance with integration requirements.",
    keyContribution: {
      description: "Designed Salesforce integration features and commercial UX that improved sales workflow efficiency by 30%.",
      highlight: "I designed seamless Salesforce integration features that enabled sales teams to work within their existing CRM environment. By creating native-feeling features and reducing context switching, I improved sales workflow efficiency by 30% and increased enterprise client satisfaction."
    },
    metrics: [
      "**30% improvement** in sales workflow efficiency",
      "**Successful integration** with Salesforce ecosystem",
      "**Increased enterprise client satisfaction**",
      "**Reduced context switching** for sales teams"
    ],
    impact: "The Salesforce integration transformed how enterprise sales teams use our product, improving workflow efficiency by 30% and increasing client satisfaction. The seamless integration demonstrated how **tooling integration** and **commercial UX design** can improve productivity in enterprise environments.",
    challenges: {
      intro: "This project required designing within Salesforce's constraints while maintaining our product's functionality and improving sales workflows.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Salesforce Interface Constraints",
          description: "We needed to design features that felt native to Salesforce while maintaining our product's functionality. I studied Salesforce design patterns and created features that followed their interface conventions while adding our unique value."
        },
        {
          title: "Bidirectional Data Sync",
          description: "Data needed to sync between our product and Salesforce reliably and in real-time. I designed clear sync status indicators and error handling that kept users informed about data synchronization."
        },
        {
          title: "Enterprise Security and Compliance",
          description: "Enterprise clients had strict security and compliance requirements for Salesforce integrations. I worked closely with security and compliance teams to ensure the integration met all requirements while maintaining usability."
        }
      ]
    },
    whatILearnt: "Designing the Salesforce integration taught me that **tooling integration is about reducing friction**, not just adding features. By designing features that felt native to Salesforce and reduced context switching, we improved sales workflow efficiency significantly. The key was understanding that enterprise users want to work within their existing tools, and integration design should feel seamless and familiar. This experience reinforced the importance of **platform knowledge** in integration design, where understanding the host platform's patterns and constraints is crucial for successful integration.",
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
    overview: "Redesigned end-to-end payment processing workflow to reduce errors and improve accuracy. Dived into complexity of B2B finance workflows, designed over legacy behavior, and simplified complex finance concepts in a data-heavy interface. Owned the end-to-end design vision with full ownership.",
    role: "Product Designer - Payment workflow redesign and error reduction",
    summary: {
      problem: "Partners were experiencing 30% incorrect payments due to complex, legacy payment workflows. The existing system had a data-heavy interface that made it difficult to understand payment calculations and identify errors. Complex B2B finance concepts were presented without clear explanations, leading to confusion and mistakes. How might we redesign the payment workflow to reduce errors while simplifying complex finance concepts?",
      whatIDid: [
        "Redesigned the **end-to-end payment processing workflow** with full ownership of the design vision",
        "Dived into **complexity** of B2B finance workflows, understanding payment calculations, fees, and reconciliation processes",
        "Designed **over legacy behavior**, creating new patterns that improved clarity while maintaining backward compatibility",
        "Simplified **complex B2B finance concepts** through clear visualizations, contextual help, and progressive disclosure",
        "Redesigned **data-heavy interface** with better information architecture, clear hierarchy, and contextual information",
        "Implemented **validation, confirmation steps, and error prevention patterns** that reduced payment errors significantly"
      ],
      impact: "Achieved 30% reduction in incorrect payments for partners, improved payment accuracy to 99.5%, and reduced payment disputes by 50%. The redesigned workflow made complex finance concepts accessible and reduced errors significantly."
    },
    scenario: "Partners were experiencing high rates of incorrect payments due to complex, legacy payment workflows. The data-heavy interface made it difficult to understand payment calculations and identify errors. We needed to redesign the workflow to reduce errors while making complex finance concepts more accessible.",
    problem: "The payment processing workflow was complex and error-prone, with a data-heavy interface that made it difficult to understand payment calculations. Legacy behavior and complex B2B finance concepts were presented without clear explanations, leading to confusion and incorrect payments.",
    problemFraming: "I framed the challenge around three core needs: **clarity** through simplified finance concepts and clear visualizations, **accuracy** through validation and error prevention, and **usability** through better information architecture in a data-heavy interface. Using **user research** and workflow analysis, I identified that the key was making complex calculations transparent and providing clear context for why payments were calculated a certain way.",
    systemsThinking: "I designed the payment workflow as a **modular, step-based system** where complex calculations were broken down into clear, understandable steps. The design used **progressive disclosure** to show detailed data when needed while keeping the interface clean. This systems-oriented approach enabled users to understand payment calculations without being overwhelmed by data, reducing errors while maintaining full functionality.",
    collaboration: "I worked closely with finance teams to understand payment calculations and business rules, with product managers to prioritize error reduction features, and with engineers to design validation and error prevention logic. I facilitated **user sessions** with partners to understand pain points and observed payment processing workflows to identify friction points. Regular syncs with stakeholders ensured the redesign met business requirements while improving user experience.",
    keyContribution: {
      description: "Owned the end-to-end redesign of the payment processing workflow, reducing incorrect payments by 30% while simplifying complex B2B finance concepts.",
      highlight: "I redesigned the payment workflow from the ground up, diving into the complexity of B2B finance and designing over legacy behavior. By simplifying complex finance concepts and redesigning the data-heavy interface, I reduced incorrect payments by 30% and improved payment accuracy to 99.5%, all while maintaining full ownership of the end-to-end design vision."
    },
    metrics: [
      "**30% reduction** in incorrect payments for partners",
      "**99.5% payment accuracy** achieved",
      "**50% reduction** in payment disputes",
      "**Significant improvement** in partner satisfaction with payment clarity"
    ],
    impact: "The redesigned payment workflow transformed how partners process payments, reducing errors by 30% and improving accuracy to 99.5%. The simplified interface and clear explanations of complex finance concepts demonstrated how **workflow design** and **information architecture** can make complex B2B finance tools accessible and error-free.",
    challenges: {
      intro: "This project required diving into complex B2B finance workflows while designing over legacy behavior and simplifying complex concepts.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Simplifying Complex B2B Finance Concepts",
          description: "Payment calculations involved complex finance concepts that were difficult to understand. I designed clear visualizations and contextual help that explained calculations step-by-step, making complex concepts accessible without dumbing them down."
        },
        {
          title: "Designing Over Legacy Behavior",
          description: "The existing system had legacy patterns that users were familiar with, but they were causing errors. I designed new patterns that improved clarity while maintaining backward compatibility, enabling gradual migration without disrupting users."
        },
        {
          title: "Data-Heavy Interface Without Overwhelming Users",
          description: "Payment processing required showing extensive data, but the interface was overwhelming. I redesigned the information architecture with clear hierarchy and progressive disclosure, showing detailed data when needed while keeping the main interface clean and focused."
        }
      ]
    },
    whatILearnt: "Redesigning the payment workflow taught me that **diving into complexity is essential for good design**—you can't simplify what you don't understand. By deeply understanding B2B finance workflows and payment calculations, I was able to create clear visualizations and explanations that made complex concepts accessible. The key was balancing simplicity with completeness—providing enough information for accuracy while keeping the interface manageable. This experience reinforced the importance of **domain expertise** in design, where understanding the business domain is crucial for creating effective solutions.",
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
    overview: "Redesigned product activation workflow to reduce time from 3 months to 1 week through automation and streamlined processes. Focused on automating manual steps, creating self-service workflows, and improving customer time-to-value.",
    role: "Product Designer - Product activation workflow redesign",
    summary: {
      problem: "Customers were waiting 3 months to activate products, with a complex, manual activation process that required extensive support and coordination. The activation workflow had many manual steps that could be automated, and customers couldn't self-serve activation. How might we redesign the activation workflow to reduce time-to-value while enabling self-service?",
      whatIDid: [
        "Redesigned the **product activation workflow**, reducing activation time from 3 months to 1 week (93% reduction)",
        "Automated **80% of activation steps** that were previously manual, reducing dependency on support teams",
        "Created **self-service workflows** that enabled customers to activate products independently",
        "Designed **streamlined processes** with clear progress indicators and automated validation",
        "Improved **customer time-to-value** by reducing wait times and enabling faster product usage",
        "Conducted **user research** to understand activation pain points and optimize the workflow"
      ],
      impact: "Achieved 93% reduction in activation time (3 months → 1 week), automated 80% of activation steps, and significantly improved customer time-to-value. The redesigned workflow enabled self-service activation and reduced support burden."
    },
    scenario: "Customers were waiting 3 months to activate products, with a complex, manual activation process. We needed to redesign the workflow to enable faster activation and self-service capabilities.",
    problem: "The product activation process was slow and manual, taking 3 months on average. The workflow required extensive coordination and support, and customers couldn't self-serve activation. This created long wait times and high support burden.",
    problemFraming: "I framed the challenge around three core needs: **speed** through automation and streamlined processes, **self-service** through clear workflows and guidance, and **efficiency** through reducing manual steps. Using **workflow analysis** and user research, I identified that the key was automating routine steps while providing clear guidance for steps that required customer input.",
    systemsThinking: "I designed the activation workflow as a **modular, automated system** where routine steps happened automatically in the background, while customer input was requested only when necessary. The design used **progress tracking** and **clear status indicators** to keep customers informed. This systems-oriented approach enabled faster activation while maintaining quality and compliance.",
    collaboration: "I worked closely with product managers to understand activation requirements, with engineers to design automation and validation logic, and with support teams to identify manual steps that could be automated. I facilitated **user sessions** to gather feedback and observed activation processes to identify friction points. Regular syncs with stakeholders ensured the redesign met business requirements.",
    keyContribution: {
      description: "Redesigned the product activation workflow, reducing activation time by 93% through automation and streamlined processes.",
      highlight: "I redesigned the product activation workflow from the ground up, automating 80% of manual steps and creating self-service workflows. By streamlining processes and reducing wait times, I reduced activation time from 3 months to 1 week (93% reduction) and significantly improved customer time-to-value."
    },
    metrics: [
      "**93% reduction** in activation time (3 months → 1 week)",
      "**80% of activation steps** now automated",
      "**Significant improvement** in customer time-to-value",
      "**Reduced support burden** for activation processes"
    ],
    impact: "The redesigned activation workflow transformed how customers activate products, reducing time from 3 months to 1 week. The automation and self-service capabilities demonstrated how **workflow design** and **automation** can dramatically improve customer onboarding and reduce operational overhead.",
    challenges: {
      intro: "This project required automating complex activation processes while maintaining quality and enabling self-service.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Automating Complex Activation Steps",
          description: "The activation process involved many steps with dependencies and validations. I designed automated workflows that handled routine steps while providing clear guidance for steps requiring customer input, ensuring quality while reducing time."
        },
        {
          title: "Enabling Self-Service Without Sacrificing Quality",
          description: "We needed customers to self-serve activation while ensuring all requirements were met. I designed clear workflows with validation and error handling that guided customers through the process and prevented errors."
        },
        {
          title: "Reducing Time Without Compromising Compliance",
          description: "Activation required meeting compliance and security requirements. I designed automated validation that checked requirements in the background, surfacing issues early with clear explanations and fixes."
        }
      ]
    },
    whatILearnt: "Redesigning the activation workflow taught me that **automation and user experience work together**—automation shouldn't mean removing human touch, but rather enabling it with better tools and information. By automating routine steps and providing clear guidance, we enabled faster activation while maintaining quality. The key was understanding that workflow design is about **reducing friction** and **eliminating wait times**, not just adding features. This experience reinforced the importance of **process analysis** in design, where understanding existing workflows is crucial for meaningful improvements.",
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
    overview: "The White Label team at Booking.com needed to support **10+ enterprise clients** with custom branding and component variations, but each customization required significant development time and design work. The department faced challenges of slow development cycles, inconsistent component implementations, and difficulty scaling white label customization across multiple clients. Without a centralized component library, teams were rebuilding similar components for each client, creating maintenance overhead and inconsistent experiences. In a competitive white label market where faster customization and deployment are key differentiators, the team needed a product library that could accelerate development while enabling consistent, scalable customization.",
    role: "Product Designer - Component library design and white label strategy",
    summary: {
      problem: "Development teams were recreating similar components across products, slowing down development and creating inconsistency. Enterprise clients needed white label customization, but building custom components for each client was time-consuming. How might we create a product library that accelerates development while enabling white label customization?",
      whatIDid: [
        "Created a **comprehensive product library** with white label components that accelerated development speed",
        "Led **design system contribution** processes, establishing guidelines and review workflows for component contributions",
        "Established **library governance** processes including contribution guidelines, review processes, and release cycles",
        "Mentored **designers** on component design patterns and best practices for reusable components",
        "Defined **processes** for component design, development, documentation, and release management",
        "Managed **design and development releases** ensuring quality and consistency across the library"
      ],
      impact: "Launched a comprehensive product library that enabled 50% faster development for new features and white label customization for 10+ clients. The library became a foundation for scalable, consistent development across products."
    },
    scenario: "Development teams were recreating similar components across products, slowing down development. Enterprise clients needed white label customization, but building custom components for each client was time-consuming. We needed to create a product library that accelerated development while enabling customization.",
    problem: "Without a product library, development teams were recreating similar components, wasting time and creating inconsistency. Enterprise clients needed white label customization, but building custom components for each client was slow and expensive.",
    problemFraming: "I framed the challenge around three core needs: **speed** through reusable components, **consistency** through shared patterns, and **flexibility** through white label customization. Using **audit of existing components** and stakeholder interviews, I identified that the key was creating a flexible component library that could be customized while maintaining core functionality.",
    systemsThinking: "I designed the product library as a **hierarchical, customizable system** where core components provided base functionality, and white label customization happened through design tokens and configuration. The library used **modular architecture** that enabled customization without code duplication. This systems-oriented approach enabled rapid development while supporting multiple client brands.",
    collaboration: "I worked closely with designers to establish component patterns and contribution processes, with engineers to design component APIs and customization mechanisms, and with product managers to prioritize library features. I facilitated **design system workshops** and **mentored designers** on component design. Regular syncs with development teams ensured the library met real-world needs.",
    keyContribution: {
      description: "Led the creation of a white label component library that accelerated development by 50% and enabled customization for 10+ clients.",
      highlight: "I created a comprehensive product library with white label components, establishing library governance, contribution processes, and design system practices. By mentoring designers and defining clear processes, I enabled 50% faster development for new features and white label customization for 10+ clients."
    },
    metrics: [
      "**Launched comprehensive product library** with reusable components",
      "**50% faster development** for new features",
      "**Enabled white label customization** for 10+ clients",
      "**Established library governance** and contribution processes"
    ],
    impact: "The product library transformed how products are developed, accelerating development by 50% and enabling white label customization for enterprise clients. The library became a foundation for scalable, consistent development, demonstrating how **component libraries** and **design system practices** can drive efficiency and flexibility.",
    challenges: {
      intro: "This project required balancing reusability with customization, creating a library that worked for multiple clients while maintaining consistency.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "White Label Customization Without Code Duplication",
          description: "We needed components that could be customized for different clients without creating separate codebases. I designed a token-based system where visual customization (colors, typography, spacing) happened through configuration, while core functionality remained consistent."
        },
        {
          title: "Library Governance and Contribution Process",
          description: "We needed a process for teams to contribute components while maintaining quality and consistency. I established contribution guidelines, review processes, and release cycles that enabled collaboration while ensuring the library remained cohesive."
        },
        {
          title: "Mentoring Designers on Component Design",
          description: "Designers needed guidance on designing reusable components. I created design patterns, best practices, and mentoring sessions that helped designers create components that were both flexible and consistent."
        }
      ]
    },
    whatILearnt: "Building the product library taught me that **library governance is as important as the components themselves**. Creating great components is important, but establishing contribution processes, review workflows, and mentoring practices is what makes a library sustainable. The key was understanding that a product library needs to serve both designers and developers, requiring clear APIs, documentation, and customization mechanisms. This experience reinforced the importance of **systems thinking** in component design, where creating reusable, customizable components enables teams to move faster while maintaining consistency.",
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
    overview: "Led accessibility training and ensured all products meet EU Accessibility Act 2025 requirements. Conducted audits, training sessions, and design system updates. Organized workshops, provided detailed guidance, and created the \"Accessibility Guide for Partnerships UX\" as a permanent resource.",
    role: "Product Designer - Accessibility lead and team training",
    summary: {
      problem: "Products needed to meet EU Accessibility Act 2025 requirements and WCAG 2.1 AA standards, but teams lacked accessibility knowledge and processes. Designers and developers needed training and guidance to build accessible products. How might we establish accessibility practices and ensure all products meet compliance requirements?",
      whatIDid: [
        "Led **accessibility training program**, training 50+ designers and developers on accessibility best practices",
        "Conducted **accessibility audits** across multiple products and teams, identifying issues and providing remediation guidance",
        "Organized **workshops** and provided detailed guidance to teams, enabling them to conduct accessibility testing independently",
        "Assisted teams with **Fable integration** and accessibility testing tools, enabling self-service accessibility testing",
        "Created the **\"Accessibility Guide for Partnerships UX\"** as a permanent resource to support future compliance efforts",
        "Updated **design system** with accessibility patterns and guidelines, ensuring new components meet WCAG 2.1 AA standards"
      ],
      impact: "Achieved 100% WCAG 2.1 AA compliance across all products, trained 50+ designers and developers, and established accessibility guidelines and patterns. The Accessibility Guide became a permanent resource supporting compliance efforts across the organization."
    },
    scenario: "Products needed to meet EU Accessibility Act 2025 requirements and WCAG 2.1 AA standards, but teams lacked accessibility knowledge. We needed to establish accessibility practices, provide training, and ensure all products meet compliance requirements.",
    problem: "Products were not meeting accessibility standards, and teams lacked the knowledge and processes to build accessible products. Without accessibility training and guidelines, products would fail compliance requirements and exclude users with disabilities.",
    problemFraming: "I framed the challenge around three core needs: **knowledge** through training and education, **processes** through guidelines and workflows, and **tools** through testing and validation. Using **accessibility audits** and team interviews, I identified that the key was providing both training and practical resources that enabled teams to build accessible products independently.",
    systemsThinking: "I designed the accessibility program as a **comprehensive system** that included training, guidelines, design system updates, and testing tools. The program used **progressive enablement** where teams received training, then guidelines, then tools, enabling them to build accessible products independently. This systems-oriented approach ensured sustainability beyond initial compliance efforts.",
    collaboration: "I worked closely with design teams to provide accessibility guidance and conduct audits, with engineering teams to integrate accessibility testing tools, and with product managers to prioritize accessibility work. I organized **workshops** and **training sessions** that enabled teams to conduct accessibility testing independently. Regular syncs with compliance teams ensured all products met requirements.",
    keyContribution: {
      description: "Led accessibility training and compliance efforts, achieving 100% WCAG 2.1 AA compliance and training 50+ team members.",
      highlight: "I led a comprehensive accessibility program that trained 50+ designers and developers, conducted audits across multiple teams, and created the \"Accessibility Guide for Partnerships UX\" as a permanent resource. By organizing workshops and providing detailed guidance, I enabled teams to meet compliance deadlines and achieve 100% WCAG 2.1 AA compliance across all products."
    },
    metrics: [
      "**100% of products** now WCAG 2.1 AA compliant",
      "**Trained 50+ designers and developers** on accessibility best practices",
      "**Established accessibility guidelines** and patterns in design system",
      "**Created permanent resource** (Accessibility Guide) for ongoing compliance"
    ],
    impact: "The accessibility training program transformed how products are built, achieving 100% WCAG 2.1 AA compliance and training 50+ team members. The program and Accessibility Guide demonstrated how **accessibility leadership** and **education** can drive compliance and inclusive design practices across organizations.",
    challenges: {
      intro: "This project required establishing accessibility practices across multiple teams while meeting compliance deadlines.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Training Teams with Varying Accessibility Knowledge",
          description: "Teams had different levels of accessibility knowledge, from beginners to those with some experience. I designed training that covered fundamentals while providing advanced guidance for experienced team members, ensuring everyone could build accessible products."
        },
        {
          title: "Enabling Self-Service Accessibility Testing",
          description: "Teams needed to conduct accessibility testing independently, but lacked tools and knowledge. I integrated Fable and other testing tools, provided guidance on using them, and created workflows that enabled teams to test and fix issues themselves."
        },
        {
          title: "Creating Sustainable Accessibility Practices",
          description: "We needed accessibility practices that would continue beyond initial compliance efforts. I created the Accessibility Guide as a permanent resource, updated the design system with accessibility patterns, and established processes that made accessibility part of the design and development workflow."
        }
      ]
    },
    whatILearnt: "Leading the accessibility program taught me that **accessibility is about enablement**, not just compliance. By providing training, guidelines, and tools, we enabled teams to build accessible products independently rather than relying on audits and fixes. The key was understanding that accessibility needs to be integrated into the design and development process, not added as an afterthought. This experience reinforced the importance of **education and resources** in accessibility, where training and permanent resources enable sustainable accessibility practices.",
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
    overview: "The Partnerships department at Booking.com needed to increase awareness and discovery of partnership opportunities, but existing UI patterns and messaging weren't effectively reaching potential partners. The department operated in a data-driven environment where experimentation and A/B testing are standard practice for optimization. With limited visibility into which discovery patterns and messaging strategies were most effective, the team needed systematic experiments to identify optimal approaches. In a competitive partnerships market where discovery and engagement directly impact business growth, the department needed data-driven insights to optimize partnership awareness.",
    role: "Product Designer - Experimentation and partnership UX",
    summary: {
      problem: "Partnerships had low awareness and discovery rates, with users not finding or engaging with partnership opportunities. The existing UI patterns and messaging weren't effective at surfacing partnerships. How might we improve partnership discovery through experimentation and UX optimization?",
      whatIDid: [
        "Conducted **experiments** to improve partnership awareness and discovery using A/B testing and data-driven design",
        "Tested different **UI patterns** including placement, sizing, and visual treatment to optimize visibility",
        "Experimented with **messaging strategies** to improve clarity and appeal of partnership opportunities",
        "Tested various **placement strategies** to identify optimal locations for partnership discovery",
        "Analyzed **user behavior data** to understand discovery patterns and optimize accordingly",
        "Iterated on designs based on **experiment results** to continuously improve discovery rates"
      ],
      impact: "Improved partnership discovery by 25% and increased partnership engagement by 40%. Identified optimal placement and messaging strategies that became the foundation for ongoing partnership discovery optimization."
    },
    scenario: "Partnerships had low awareness and discovery rates. Users weren't finding or engaging with partnership opportunities. We needed to experiment with different UI patterns, messaging, and placement to improve discovery.",
    problem: "Partnership discovery was low, with users not finding or engaging with partnership opportunities. The existing UI patterns and messaging weren't effective at surfacing partnerships, leading to missed opportunities.",
    problemFraming: "I framed the challenge around three core needs: **visibility** through optimal placement and sizing, **clarity** through effective messaging, and **engagement** through appealing UI patterns. Using **experimentation** and data analysis, I identified that the key was testing different approaches systematically to find what worked best.",
    systemsThinking: "I designed the experimentation approach as a **systematic testing framework** where different UI patterns, messaging, and placements were tested in controlled experiments. The design used **data-driven iteration** where experiment results informed subsequent tests. This systems-oriented approach enabled continuous optimization of partnership discovery.",
    collaboration: "I worked closely with product managers to define experiment hypotheses and success metrics, with data analysts to analyze experiment results, and with engineers to implement experiment variations. I facilitated **experiment planning sessions** and reviewed results to inform design decisions. Regular syncs with stakeholders ensured experiments aligned with business goals.",
    keyContribution: {
      description: "Conducted experiments to improve partnership discovery, increasing discovery by 25% and engagement by 40%.",
      highlight: "I conducted systematic experiments testing different UI patterns, messaging, and placement strategies. Through data-driven design and A/B testing, I improved partnership discovery by 25% and increased engagement by 40%, identifying optimal strategies that became the foundation for ongoing optimization."
    },
    metrics: [
      "**25% improvement** in partnership discovery",
      "**40% increase** in partnership engagement",
      "**Identified optimal placement** and messaging strategies",
      "**Established experimentation framework** for ongoing optimization"
    ],
    impact: "The experimentation work transformed partnership discovery, increasing discovery by 25% and engagement by 40%. The systematic approach and identified optimal strategies demonstrated how **data-driven design** and **experimentation** can optimize discovery and engagement.",
    challenges: {
      intro: "This project required systematic experimentation to identify what worked best for partnership discovery.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Testing Multiple Variables Systematically",
          description: "We needed to test UI patterns, messaging, and placement, but testing everything at once would be unclear. I designed a systematic testing approach that tested one variable at a time, enabling clear insights into what drove improvements."
        },
        {
          title: "Balancing Experimentation with User Experience",
          description: "Experiments could create inconsistent experiences for users. I designed experiments that maintained good user experience while testing variations, ensuring users always had a positive experience regardless of which variation they saw."
        },
        {
          title: "Translating Experiment Results into Design Decisions",
          description: "Experiment results needed to inform ongoing design decisions. I created clear documentation of results and design recommendations that enabled the team to apply learnings beyond the initial experiments."
        }
      ]
    },
    whatILearnt: "Conducting partnership discovery experiments taught me that **experimentation is about systematic learning**, not just testing. By designing controlled experiments and analyzing results carefully, we identified what actually drove improvements rather than guessing. The key was understanding that experimentation requires clear hypotheses, proper controls, and careful analysis to yield actionable insights. This experience reinforced the importance of **data-driven design** in optimization, where experiments provide evidence for design decisions rather than assumptions.",
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
    overview: "Ran experiments to improve insurance product discovery and user engagement. Tested various discovery patterns and recommendation algorithms using A/B testing across app, web, and mobile experiences.",
    role: "Product Designer - Experimentation and insurance UX",
    summary: {
      problem: "Insurance products had low discovery rates and conversion, with users not finding or engaging with insurance offerings. The existing discovery patterns and recommendation algorithms weren't effective. How might we improve insurance discovery and conversion through experimentation?",
      whatIDid: [
        "Ran **experiments** to improve insurance product discovery and user engagement across app, web, and mobile",
        "Tested various **discovery patterns** including entry points, placement, and visual treatment",
        "Experimented with **recommendation algorithms** to optimize product suggestions and personalization",
        "Designed **A/B tests** to systematically compare different discovery approaches",
        "Analyzed **conversion funnels** to identify drop-off points and optimization opportunities",
        "Iterated on designs based on **experiment results** to continuously improve discovery and conversion"
      ],
      impact: "Improved insurance discovery rate by 30% and increased conversion from discovery to purchase by 20%. Optimized recommendation algorithms and identified effective discovery patterns that improved overall insurance engagement."
    },
    scenario: "Insurance products had low discovery rates and conversion. Users weren't finding or engaging with insurance offerings. We needed to experiment with discovery patterns and recommendation algorithms to improve discovery and conversion.",
    problem: "Insurance discovery was low, with users not finding or engaging with insurance products. The existing discovery patterns and recommendation algorithms weren't effective, leading to low conversion rates.",
    problemFraming: "I framed the challenge around three core needs: **discovery** through effective entry points and placement, **relevance** through optimized recommendation algorithms, and **conversion** through improved user engagement. Using **experimentation** and funnel analysis, I identified that the key was testing different discovery approaches to find what resonated with users.",
    systemsThinking: "I designed the experimentation approach as a **systematic testing framework** that tested discovery patterns and recommendation algorithms across different platforms. The design used **data-driven iteration** where experiment results informed algorithm optimization and design decisions. This systems-oriented approach enabled continuous improvement of insurance discovery and conversion.",
    collaboration: "I worked closely with product managers to define experiment hypotheses and success metrics, with data scientists to optimize recommendation algorithms, and with engineers to implement experiment variations. I facilitated **experiment planning sessions** and analyzed results to inform design and algorithm decisions. Regular syncs with stakeholders ensured experiments aligned with business goals.",
    keyContribution: {
      description: "Conducted experiments to improve insurance discovery and conversion, increasing discovery by 30% and conversion by 20%.",
      highlight: "I ran systematic experiments testing discovery patterns and recommendation algorithms across app, web, and mobile. Through data-driven design and A/B testing, I improved insurance discovery rate by 30% and increased conversion from discovery to purchase by 20%, optimizing recommendation algorithms and identifying effective discovery patterns."
    },
    metrics: [
      "**30% improvement** in insurance discovery rate",
      "**20% increase** in conversion from discovery to purchase",
      "**Optimized recommendation algorithms** for better personalization",
      "**Identified effective discovery patterns** across platforms"
    ],
    impact: "The experimentation work transformed insurance discovery and conversion, increasing discovery by 30% and conversion by 20%. The optimized recommendation algorithms and identified discovery patterns demonstrated how **data-driven design** and **experimentation** can improve product discovery and engagement.",
    challenges: {
      intro: "This project required systematic experimentation across multiple platforms to optimize insurance discovery and conversion.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Testing Across Multiple Platforms",
          description: "We needed to test discovery patterns across app, web, and mobile, each with different constraints. I designed experiments that accounted for platform differences while maintaining consistent testing methodology, enabling cross-platform insights."
        },
        {
          title: "Optimizing Recommendation Algorithms",
          description: "Recommendation algorithms needed to be optimized based on user behavior, but testing algorithm changes required careful design. I worked with data scientists to design experiments that tested algorithm variations while maintaining user experience quality."
        },
        {
          title: "Balancing Discovery with User Experience",
          description: "We needed to improve discovery without being intrusive or disrupting the main user journey. I designed discovery patterns that felt natural and contextual, improving discovery while maintaining positive user experience."
        }
      ]
    },
    whatILearnt: "Conducting insurance discovery experiments taught me that **product discovery is about relevance and timing**, not just visibility. By testing different discovery patterns and optimizing recommendation algorithms, we found that users engaged more when insurance was presented at the right moment with relevant recommendations. The key was understanding that discovery optimization requires both good UX design and effective algorithms working together. This experience reinforced the importance of **cross-platform experimentation** in product discovery, where testing across different platforms reveals platform-specific insights while maintaining overall strategy.",
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
    overview: "Designed a new dynamic campaign tool that allows partners to create and manage campaigns with ease. Focused on intuitive workflows, real-time preview capabilities, and streamlined campaign creation processes.",
    role: "Product Designer - Campaign tool design and partner experience",
    summary: {
      problem: "Partners were spending too much time creating and managing campaigns, with complex workflows and lack of real-time feedback. The existing campaign creation process was slow and didn't provide immediate preview of results. How might we design a dynamic campaign tool that reduces creation time while improving partner experience?",
      whatIDid: [
        "Designed a **new dynamic campaign tool** that enabled partners to create and manage campaigns efficiently",
        "Created **intuitive workflows** that simplified campaign creation and reduced steps",
        "Implemented **real-time preview capabilities** that showed campaign results as partners designed them",
        "Designed **streamlined processes** with clear progress indicators and validation",
        "Improved **partner experience** by reducing friction and enabling faster campaign creation",
        "Conducted **user research** with partners to understand pain points and optimize workflows"
      ],
      impact: "Launched a new campaign creation tool that reduced campaign creation time by 60% and increased partner campaign adoption by 45%. The tool's intuitive workflows and real-time preview capabilities transformed how partners create campaigns."
    },
    scenario: "Partners were spending too much time creating campaigns, with complex workflows and lack of real-time feedback. We needed to design a dynamic campaign tool that reduced creation time while improving partner experience.",
    problem: "Campaign creation was slow and complex, taking too much time and requiring multiple steps. Partners lacked real-time feedback on how campaigns would look, leading to iterations and delays. The existing process didn't support efficient campaign creation.",
    problemFraming: "I framed the challenge around three core needs: **speed** through streamlined workflows and reduced steps, **clarity** through real-time preview and clear feedback, and **efficiency** through intuitive processes. Using **user research** with partners, I identified that the key was providing immediate visual feedback while simplifying the creation process.",
    systemsThinking: "I designed the campaign tool as a **modular, workflow-based system** where campaign creation happened in clear steps with real-time preview at each stage. The design used **progressive enhancement** where basic campaigns could be created quickly, with advanced options available when needed. This systems-oriented approach enabled fast campaign creation while maintaining flexibility.",
    collaboration: "I worked closely with partners to understand their campaign creation needs and pain points, with product managers to prioritize features, and with engineers to design real-time preview and validation logic. I facilitated **user sessions** to gather feedback and observed campaign creation workflows to identify friction points. Regular syncs with stakeholders ensured the tool met partner needs.",
    keyContribution: {
      description: "Designed a new dynamic campaign tool that reduced campaign creation time by 60% and increased partner adoption by 45%.",
      highlight: "I designed a new dynamic campaign tool with intuitive workflows and real-time preview capabilities. By streamlining the campaign creation process and providing immediate visual feedback, I reduced campaign creation time by 60% and increased partner campaign adoption by 45%."
    },
    metrics: [
      "**Launched new campaign creation tool** with improved workflows",
      "**60% reduction** in campaign creation time",
      "**45% increase** in partner campaign adoption",
      "**Real-time preview capabilities** for immediate feedback"
    ],
    impact: "The dynamic campaign tool transformed how partners create campaigns, reducing creation time by 60% and increasing adoption by 45%. The intuitive workflows and real-time preview capabilities demonstrated how **tool design** and **partner experience** can improve efficiency and engagement.",
    challenges: {
      intro: "This project required designing intuitive workflows while providing real-time preview and maintaining flexibility for different campaign types.",
      subtitle: "Key Challenges and Solutions",
      items: [
        {
          title: "Real-Time Preview Performance",
          description: "Real-time preview needed to be fast and responsive, but rendering campaign previews could be computationally expensive. I designed a preview system that showed simplified previews in real-time with full preview available on demand, balancing performance with usefulness."
        },
        {
          title: "Simplifying Complex Campaign Creation",
          description: "Campaign creation involved many options and configurations, but we needed to keep it simple. I designed progressive disclosure patterns where basic campaigns could be created quickly, with advanced options available when needed."
        },
        {
          title: "Supporting Different Campaign Types",
          description: "Partners needed to create different types of campaigns with varying requirements. I designed a flexible system that accommodated different campaign types while maintaining consistent workflows and patterns."
        }
      ]
    },
    whatILearnt: "Designing the campaign tool taught me that **tool design is about reducing cognitive load**, not just adding features. By providing real-time preview and streamlining workflows, we enabled partners to create campaigns faster and with less effort. The key was understanding that partners want to see results immediately and iterate quickly, so real-time feedback was crucial. This experience reinforced the importance of **user research in tool design**, where understanding actual workflows and pain points is essential for creating effective tools.",
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

