import { Code2, Smartphone, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { ReactIcon, SparklesIcon, MapPinSearchIcon, FigmaIcon, N8nIcon } from "@/components/icons/ServiceIcons";
import {
  SoftwareSaaSGraphic,
  WebAppsGraphic,
  MobileAppsGraphic,
  SEOGraphic,
  AutomationGraphic,
  AIVoiceGraphic,
  ProductSystemsGraphic,
} from "@/components/services/ServiceGraphics";

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export interface ServiceTheme {
  text: string;
  bg: string;
  hoverBorder: string;
  hoverGlow: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  desc: string;
}

export interface ServiceDefinition {
  slug: string;
  /** Short label used on the homepage grid card. */
  title: string;
  badge: string;
  /** One-liner used on the homepage grid card. */
  shortDescription: string;
  icon: IconComponent;
  graphic: ComponentType;
  theme: ServiceTheme;

  /** SEO */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  serviceType: string[];

  /** Detail page content */
  heroKicker: string;
  h1: string;
  heroIntro: string;
  painPointsTitle: string;
  painPoints: string[];
  capabilities: ServiceProcessStep[];
  techStack?: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  /** Case studies whose tags/technologies/category loosely match this service. */
  matchKeywords: string[];
  ctaMessage: string;
}

export const services: ServiceDefinition[] = [
  {
    slug: "custom-software-development",
    title: "Custom software",
    badge: "Custom",
    shortDescription:
      "Internal tools, portals, workflow systems, and bespoke platforms shaped around how your company actually works.",
    icon: Code2,
    graphic: SoftwareSaaSGraphic,
    theme: {
      text: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      hoverBorder: "hover:border-emerald-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] hover:bg-emerald-500/[0.01]",
    },
    metaTitle: "Custom Software Development Company | Locallify",
    metaDescription:
      "Custom software development for internal tools, admin portals, and workflow systems — built around how your business actually runs. You own 100% of the code, no lock-in.",
    keywords: [
      "Custom Software Development Company",
      "Custom Software Development Services",
      "Bespoke Software Development",
      "Custom Enterprise Software Development Company",
      "Internal Tools Development",
      "Workflow Automation Software Development",
      "Custom Software Development Company India",
      "Hire Custom Software Developers",
    ],
    serviceType: ["Custom Software Development", "Enterprise Software Development", "Internal Tools Development"],
    heroKicker: "Custom Software Development",
    h1: "Custom software built around how your business actually runs.",
    heroIntro:
      "Off-the-shelf tools force your team to adapt to someone else's workflow. We build custom software — internal tools, admin portals, reporting dashboards, and operational systems — designed around your process, not a generic template. You get full ownership of the source code and no vendor lock-in.",
    painPointsTitle: "Signs you need custom software, not another SaaS subscription",
    painPoints: [
      "Your team runs the business on spreadsheets that keep breaking or going out of sync.",
      "You're paying for three tools stitched together with manual copy-paste between them.",
      "The SaaS you use is missing one critical feature and the vendor won't build it for you.",
      "You've outgrown a no-code tool and need real performance, security, or scale.",
    ],
    capabilities: [
      { title: "Custom Web Portals", desc: "Client, vendor, or staff portals scoped to exactly what each user needs to see and do." },
      { title: "Admin & Role Management", desc: "Fine-grained permissions so the right people see the right data — nothing more." },
      { title: "Database Architecture", desc: "Schemas designed for your actual data relationships, not a generic template." },
      { title: "Third-Party API Integrations", desc: "Payments, CRMs, accounting software, and internal systems talking to each other." },
      { title: "Reporting & Analytics Dashboards", desc: "Real-time visibility into the metrics that actually run your business." },
      { title: "Legacy System Modernization", desc: "Rebuild aging internal tools without disrupting the team using them daily." },
    ],
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Node.js", "Prisma", "AWS"],
    process: [
      { title: "Map the workflow", desc: "We shadow how your team actually works today before designing anything." },
      { title: "Build in milestones", desc: "Working software every sprint, not a single reveal at the end." },
      { title: "Own it outright", desc: "Full source code and IP transfer to you on final payment — no lock-in." },
    ],
    faqs: [
      {
        question: "How long does custom software development take?",
        answer:
          "A focused internal tool or admin portal typically ships in 4-8 weeks in milestone-based sprints. Larger multi-module systems run longer — we scope an exact timeline after a discovery call, not before.",
      },
      {
        question: "Do I own the code after the project is done?",
        answer:
          "Yes. Once the final milestone is paid, 100% of the source code and intellectual property transfers to you. There's no proprietary platform or ongoing licensing fee tying you to us.",
      },
      {
        question: "What's the difference between custom software and an off-the-shelf tool?",
        answer:
          "Off-the-shelf software (like a generic CRM or project tool) is built for the average user across thousands of companies. Custom software is built around your specific workflow, data, and edge cases — so your team stops working around the tool's limitations.",
      },
      {
        question: "Do you work with businesses outside India?",
        answer:
          "Yes. We're based in Silchar, Assam, but the majority of our custom software engagements are remote, for clients across India and internationally.",
      },
    ],
    matchKeywords: ["software", "portal", "dashboard", "platform", "system", "booking", "clinic"],
    ctaMessage: "Hi Locallify, I'd like to talk about a custom software project.",
  },
  {
    slug: "web-app-development",
    title: "Web apps & SaaS",
    badge: "SaaS",
    shortDescription:
      "Fast, secure, scalable web applications with polished product UX and clean engineering foundations.",
    icon: ReactIcon,
    graphic: WebAppsGraphic,
    theme: {
      text: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      hoverBorder: "hover:border-blue-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(59,130,246,0.06)] hover:bg-blue-500/[0.01]",
    },
    metaTitle: "Web Application & SaaS Development Company | Locallify",
    metaDescription:
      "We design and build fast, secure web applications and SaaS products on Next.js and React — from MVP to multi-tenant scale, with full code ownership.",
    keywords: [
      "Web Application Development Company",
      "SaaS Development Company",
      "SaaS Product Development",
      "Next.js Development Company",
      "Custom Web App Development Services",
      "Hire Next.js Developers",
      "SaaS MVP Development Company",
      "Multi-Tenant SaaS Development",
    ],
    serviceType: ["Web Application Development", "SaaS Development", "Software as a Service Development"],
    heroKicker: "Web App & SaaS Development",
    h1: "Web apps and SaaS products, engineered to scale from day one.",
    heroIntro:
      "A web app and a SaaS product solve different problems: a web app gives your business a custom, fully-owned tool; a SaaS product is built to serve many customers on a subscription. We build both — fast Next.js/React frontends, secure backends, and the billing, multi-tenancy, and auth logic that real products need before they scale.",
    painPointsTitle: "When you need a web app or SaaS build, not another no-code tool",
    painPoints: [
      "You're validating a SaaS idea and need a real MVP, not a Bubble prototype that can't scale.",
      "Your current web app is slow, hard to maintain, or breaking under real user load.",
      "You need multi-tenant architecture with proper data isolation between customers.",
      "Billing, subscriptions, and usage limits need to be built in from the start, not bolted on later.",
    ],
    capabilities: [
      { title: "Next.js & React Frontend", desc: "Fast, accessible interfaces with clean state management and caching." },
      { title: "Multi-Tenant Architecture", desc: "Proper data isolation so each customer's data stays separate and secure." },
      { title: "Subscription & Billing Logic", desc: "Stripe or Razorpay integration for plans, usage limits, and invoicing." },
      { title: "Interactive Dashboards", desc: "Real-time data views built for the way your users actually make decisions." },
      { title: "Auth & Role-Based Access", desc: "Secure sign-in, team invites, and permission tiers done right the first time." },
      { title: "Real-Time Data & Caching", desc: "Sub-second interactions even as your user base and data grow." },
    ],
    techStack: ["Next.js", "React", "PostgreSQL", "Stripe / Razorpay", "Redis", "Vercel"],
    process: [
      { title: "Scope the MVP", desc: "We cut features ruthlessly to what proves the core value first." },
      { title: "Build for scale", desc: "Multi-tenancy, billing, and auth designed in from the first sprint." },
      { title: "Ship and iterate", desc: "Launch, measure, and keep shipping based on real usage data." },
    ],
    faqs: [
      {
        question: "What's the difference between a web app and a SaaS product?",
        answer:
          "A web app is a custom application built for your own business — you own it outright and control its data. A SaaS product is built to be sold as a subscription to many customers, which means it needs multi-tenancy, billing, and usage limits built in from the start. We scope which one fits your goal before writing any code.",
      },
      {
        question: "How fast can you build a SaaS MVP?",
        answer:
          "A focused MVP that proves your core value proposition typically ships in 4-8 weeks. We deliberately scope the first version tight so you can get real user feedback before investing further.",
      },
      {
        question: "What tech stack do you build on?",
        answer:
          "Next.js and React on the frontend, with PostgreSQL, Prisma, and either Supabase or a custom Node.js backend — a stack chosen for speed, reliability, and being easy for any future team to maintain.",
      },
      {
        question: "Can you take over an existing web app that's grown hard to maintain?",
        answer:
          "Yes. We regularly take over legacy or agency-built codebases, audit the architecture, and either refactor incrementally or plan a phased rebuild depending on what the code and timeline can support.",
      },
    ],
    matchKeywords: ["web app", "saas", "dashboard", "platform", "booking", "portal"],
    ctaMessage: "Hi Locallify, I'd like to talk about a web app or SaaS build.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile apps",
    badge: "Mobile",
    shortDescription:
      "iOS and Android products for teams that need a serious mobile experience, not a web view in disguise.",
    icon: Smartphone,
    graphic: MobileAppsGraphic,
    theme: {
      text: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20 text-orange-400",
      hoverBorder: "hover:border-orange-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(249,115,22,0.06)] hover:bg-orange-500/[0.01]",
    },
    metaTitle: "Mobile App Development Company (iOS & Android) | Locallify",
    metaDescription:
      "Native-quality iOS and Android apps built with React Native — offline support, push notifications, and full App Store & Play Store submission handled end-to-end.",
    keywords: [
      "Mobile App Development Company",
      "iOS and Android App Development Company",
      "React Native App Development Company",
      "Mobile App Development Company India",
      "Cross-Platform App Development",
      "App Development Cost in India",
      "Hire Mobile App Developers India",
    ],
    serviceType: ["Mobile Application Development", "iOS App Development", "Android App Development"],
    heroKicker: "Mobile App Development",
    h1: "iOS and Android apps that feel native, not like a web page in a wrapper.",
    heroIntro:
      "A mobile web view might look like an app, but it feels wrong the moment someone swipes. We build cross-platform iOS and Android apps with React Native — real navigation, offline support, and native device features — then manage the entire App Store and Google Play submission process for you.",
    painPointsTitle: "When your product needs a real app, not a mobile website",
    painPoints: [
      "Your users need offline access and your current web app just shows an error with no connection.",
      "You need push notifications to bring users back — something a website simply can't do.",
      "Camera, biometrics, or payment integrations require native device access.",
      "A polished app in the App Store builds more trust than a bookmarked website ever will.",
    ],
    capabilities: [
      { title: "iOS & Android Builds", desc: "One codebase, shipped natively to both platforms without compromise." },
      { title: "React Native Architecture", desc: "Performance-tuned navigation, state, and animations that feel native." },
      { title: "Offline-First Support", desc: "Core features keep working without a connection, syncing when it returns." },
      { title: "Push Notifications", desc: "Re-engagement flows that bring users back at the right moment." },
      { title: "Store Submission Management", desc: "App Store and Google Play listings, review, and approval handled for you." },
      { title: "Native Module Integration", desc: "Camera, biometrics, payments, and other device-level features done right." },
    ],
    techStack: ["React Native", "Expo", "TypeScript", "Firebase", "REST / GraphQL APIs"],
    process: [
      { title: "Design the flow", desc: "Every screen mapped before a line of code, so navigation feels obvious." },
      { title: "Build cross-platform", desc: "One React Native codebase targeting both iOS and Android from day one." },
      { title: "Submit and support", desc: "We handle store approval and stay on for post-launch fixes and updates." },
    ],
    faqs: [
      {
        question: "How much does mobile app development cost in India?",
        answer:
          "A focused MVP typically starts around ₹1.5-4 lakh, while full-featured apps with backend infrastructure, payments, and complex features can run ₹8-20 lakh or more. The exact number depends on platform count, feature complexity, and whether you need custom backend work — we quote after scoping, not before.",
      },
      {
        question: "Should I build native (Swift/Kotlin) or React Native?",
        answer:
          "For most business apps, React Native gets you to market faster with one codebase covering both iOS and Android, at native-level performance for the vast majority of use cases. We'd only recommend fully native development for apps with heavy platform-specific requirements like advanced AR or custom hardware integration.",
      },
      {
        question: "Do you handle App Store and Play Store submission?",
        answer:
          "Yes, end-to-end — developer account setup, store listing assets, compliance review, and resubmissions if the first review gets rejected on a technicality.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A focused MVP usually takes 6-10 weeks. Apps with more complex features, backend systems, or multiple integrations run longer — we give an exact timeline after scoping your feature list.",
      },
    ],
    matchKeywords: ["mobile", "app", "ios", "android", "react native"],
    ctaMessage: "Hi Locallify, I'd like to talk about a mobile app project.",
  },
  {
    slug: "ai-voice-agents",
    title: "AI features & voice agents",
    badge: "AI Agents",
    shortDescription:
      "Practical AI inside real workflows: voice agents (phone intake & support), search, reporting, content operations, and automation.",
    icon: SparklesIcon,
    graphic: AIVoiceGraphic,
    theme: {
      text: "text-purple-400",
      bg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      hoverBorder: "hover:border-purple-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(168,85,247,0.06)] hover:bg-purple-500/[0.01]",
    },
    metaTitle: "AI Voice Agent & AI Agent Development Company | Locallify",
    metaDescription:
      "We build AI voice agents for phone intake and support, plus AI-powered search, reporting, and workflow copilots — wired directly into your existing systems.",
    keywords: [
      "AI Voice Agent Development Company",
      "Conversational AI Development Company",
      "AI Phone Agent for Business",
      "Voice AI Agency",
      "AI Agents for Business Automation",
      "Build an AI Voice Agent",
      "AI Customer Support Agent",
    ],
    serviceType: ["AI Voice Agent Development", "Conversational AI Development", "AI Agent Integration"],
    heroKicker: "AI Agents & Voice AI",
    h1: "AI voice agents and AI features that do real work, not demo tricks.",
    heroIntro:
      "Analysts expect agentic AI to autonomously resolve the large majority of routine customer service calls within the next few years. We build AI voice agents that handle phone intake, booking, and support around the clock, plus AI features — smart search, auto-generated reports, content workflows — wired directly into the systems you already use.",
    painPointsTitle: "When an AI agent earns its keep",
    painPoints: [
      "Missed calls after hours mean missed bookings and lost revenue.",
      "Your front desk repeats the same 10 questions on every call.",
      "Support tickets pile up faster than your team can triage them manually.",
      "You want AI in your product, but a generic chatbot widget isn't good enough.",
    ],
    capabilities: [
      { title: "Inbound & Outbound Voice Agents", desc: "Natural phone conversations for booking, intake, and reminders — 24/7." },
      { title: "IVR Replacement", desc: "Swap rigid phone-tree menus for an agent that just understands the request." },
      { title: "AI Chat & Support Agents", desc: "Context-aware chat that resolves real questions, not scripted deflection." },
      { title: "CRM & Calendar Integration", desc: "Every call and conversation logged and actioned in your existing tools." },
      { title: "Custom LLM Workflows", desc: "Reporting, summarization, and content generation built into your product." },
      { title: "Call Logging & Analytics", desc: "Full transcripts and outcome tracking so you can see what's working." },
    ],
    techStack: ["Retell / Vapi", "OpenAI / Anthropic APIs", "n8n", "Twilio", "Webhooks"],
    process: [
      { title: "Define the conversation", desc: "We script the exact scenarios the agent needs to handle well." },
      { title: "Wire it to your systems", desc: "Calendar, CRM, and phone line connected so actions actually happen." },
      { title: "Tune from real calls", desc: "We refine responses using real call transcripts after launch." },
    ],
    faqs: [
      {
        question: "What exactly is an AI voice agent?",
        answer:
          "An AI voice agent is software that holds natural, spoken phone conversations using a large language model paired with speech-to-text and text-to-speech, so it can understand a caller's request and respond dynamically — not a rigid \"press 1 for sales\" phone tree.",
      },
      {
        question: "Will it sound robotic to callers?",
        answer:
          "Modern voice AI platforms use near-real-time, natural-sounding speech. We test extensively with real call scenarios before launch and keep a human handoff path for anything the agent shouldn't handle alone.",
      },
      {
        question: "Can it integrate with our existing phone number and CRM?",
        answer:
          "Yes. We typically route your existing business number through the voice platform and connect it to your CRM, calendar, or booking system via API or n8n, so bookings and call outcomes land exactly where your team already looks.",
      },
      {
        question: "How much does an AI voice agent cost?",
        answer:
          "Cost depends on call volume, integration complexity, and whether you need custom conversation logic versus a templated flow. We scope this after understanding your call types and existing tools — get in touch for a specific quote.",
      },
    ],
    matchKeywords: ["ai", "voice", "chatbot", "agent", "automation"],
    ctaMessage: "Hi Locallify, I'd like to talk about an AI voice agent or AI feature.",
  },
  {
    slug: "workflow-automation",
    title: "n8n & Automation",
    badge: "Automation",
    shortDescription:
      "Connect your tools, sync lead data to CRMs, and trigger automated custom tasks to optimize business operations.",
    icon: N8nIcon,
    graphic: AutomationGraphic,
    theme: {
      text: "text-rose-400",
      bg: "bg-rose-500/10 border-rose-500/20 text-rose-400",
      hoverBorder: "hover:border-rose-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.06)] hover:bg-rose-500/[0.01]",
    },
    metaTitle: "n8n Automation Agency & Workflow Automation Services | Locallify",
    metaDescription:
      "n8n workflow automation and business process automation — connect your CRM, forms, and tools so leads, data, and notifications move without manual work.",
    keywords: [
      "n8n Automation Agency",
      "n8n Workflow Automation Services",
      "Business Process Automation Company",
      "Workflow Automation Services",
      "CRM Automation Agency",
      "No-Code Automation Agency",
      "Hire n8n Expert",
    ],
    serviceType: ["Workflow Automation", "Business Process Automation", "n8n Development"],
    heroKicker: "n8n & Workflow Automation",
    h1: "Automate the manual work between your tools, not just inside one of them.",
    heroIntro:
      "Most businesses run on tools that don't talk to each other — leads sit in one app, invoices in another, and someone copies data between them by hand. We build n8n workflows that connect your CRM, forms, accounting software, and AI tools into one automated pipeline, with no vendor lock-in and full control over your data.",
    painPointsTitle: "Signs your operations need automation",
    painPoints: [
      "Someone on your team manually copies leads from a form into your CRM every day.",
      "Notifications, follow-ups, or invoices depend on a person remembering to send them.",
      "Data lives in three different tools that never sync with each other.",
      "You want AI in your process — summarizing, routing, or drafting — without hiring a data team.",
    ],
    capabilities: [
      { title: "n8n Workflow Design", desc: "Custom automations mapped to your exact business process, not a generic template." },
      { title: "Webhook & API Sync", desc: "Real-time data flow between your CRM, forms, and internal tools." },
      { title: "Automated CRM Handoffs", desc: "Every lead lands in your CRM instantly, tagged and routed correctly." },
      { title: "Lead Routing & Notifications", desc: "The right person gets alerted the moment something needs attention." },
      { title: "AI Pipeline Integrations", desc: "LLM steps for summarizing, classifying, or drafting inside the workflow." },
      { title: "Error Handling & Monitoring", desc: "Workflows that alert you when something breaks, instead of failing silently." },
    ],
    techStack: ["n8n", "Webhooks", "REST APIs", "Zapier (migration)", "PostgreSQL"],
    process: [
      { title: "Map the manual work", desc: "We find every place a human is doing what software should." },
      { title: "Build the workflow", desc: "n8n automations connecting your existing tools without replacing them." },
      { title: "Monitor and refine", desc: "Error alerts and iteration once the workflow is running in production." },
    ],
    faqs: [
      {
        question: "What is n8n and why use it instead of Zapier?",
        answer:
          "n8n is an open-source workflow automation tool that can be self-hosted, giving you full data privacy and no per-task pricing ceiling. Unlike Zapier, there's no vendor lock-in — you own the workflow logic and the infrastructure it runs on, which matters once automation volume grows.",
      },
      {
        question: "Can automation integrate with the tools we already use?",
        answer:
          "In almost all cases, yes. n8n connects to CRMs, spreadsheets, payment platforms, email tools, and any system with an API or webhook — we audit your current stack first and design automations that work with what you have.",
      },
      {
        question: "Do we need to migrate off our existing tools?",
        answer:
          "No. Automation connects your existing tools together — it doesn't require replacing your CRM, accounting software, or forms. That's the entire point: less manual work, without a disruptive migration.",
      },
      {
        question: "What happens if a workflow fails?",
        answer:
          "We build error handling and monitoring into every automation so failures trigger an alert instead of silently dropping data — and we set up a support arrangement to fix issues quickly if they come up.",
      },
    ],
    matchKeywords: ["automation", "n8n", "workflow", "crm"],
    ctaMessage: "Hi Locallify, I'd like to talk about workflow automation with n8n.",
  },
  {
    slug: "seo-geo-services",
    title: "SEO + GEO",
    badge: "Discovery",
    shortDescription:
      "Semantic HTML, schema, speed, entity clarity, and answer-ready content so your product gets found on Google and AI search.",
    icon: MapPinSearchIcon,
    graphic: SEOGraphic,
    theme: {
      text: "text-accent-primary",
      bg: "bg-accent-primary/10 border-accent-primary/20 text-accent-primary",
      hoverBorder: "hover:border-accent-primary/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(208,255,20,0.06)] hover:bg-accent-primary/[0.01]",
    },
    metaTitle: "SEO & GEO (Generative Engine Optimization) Services | Locallify",
    metaDescription:
      "Technical SEO plus Generative Engine Optimization (GEO/AEO) so your site ranks on Google and gets cited in ChatGPT, Perplexity, and AI Overviews.",
    keywords: [
      "SEO and GEO Services",
      "Generative Engine Optimization Agency",
      "Answer Engine Optimization Agency",
      "AEO Services",
      "AI Search Optimization Company",
      "Technical SEO Agency",
      "Get Featured in Google AI Overviews",
      "GEO Services India",
    ],
    serviceType: ["Search Engine Optimization", "Generative Engine Optimization", "Technical SEO"],
    heroKicker: "SEO & GEO",
    h1: "Built to rank on Google — and get cited by AI search.",
    heroIntro:
      "Over 60% of Google searches now end without a click to a third-party site, as AI Overviews, ChatGPT, and Perplexity answer questions directly. Generative Engine Optimization (GEO) — also called AEO — is the practice of structuring your content and technical infrastructure so these engines cite, quote, and recommend you. We build it into every project alongside traditional technical SEO, not as an afterthought.",
    painPointsTitle: "Signs your site is invisible where it matters",
    painPoints: [
      "Your competitors show up in Google's AI Overview and you don't.",
      "Core Web Vitals scores are dragging down your search rankings.",
      "Your site has no structured data, so search engines can't understand what you actually offer.",
      "Content reads well to humans but gives search and AI crawlers nothing to cite.",
    ],
    capabilities: [
      { title: "Technical SEO Audits", desc: "Crawlability, indexing, and site architecture fixed at the source." },
      { title: "Schema & Structured Data", desc: "JSON-LD markup so search engines and AI models understand your content." },
      { title: "Core Web Vitals Optimization", desc: "Speed and stability tuned to meet Google's ranking thresholds." },
      { title: "Entity & Topical Authority Mapping", desc: "Content structured around what your brand should be known for." },
      { title: "AI Overview & LLM Citation Optimization", desc: "Answer-ready content formatted to be quoted by AI search engines." },
      { title: "Local SEO & Google Business Profile", desc: "NAP consistency and local signals for map-pack visibility." },
    ],
    process: [
      { title: "Audit the baseline", desc: "Technical crawl, Core Web Vitals, and current AI-search visibility." },
      { title: "Fix the foundation", desc: "Schema, semantic HTML, and speed work that both Google and AI need." },
      { title: "Track and iterate", desc: "Search Console and AI citation tracking guide ongoing content work." },
    ],
    faqs: [
      {
        question: "What is GEO (Generative Engine Optimization)?",
        answer:
          "GEO — also called AEO, or Answer Engine Optimization — is the practice of structuring content, schema markup, and technical infrastructure so generative AI engines like ChatGPT, Google AI Overviews, and Perplexity cite or recommend your brand when someone asks a relevant question.",
      },
      {
        question: "Is traditional SEO still worth doing if GEO matters now?",
        answer:
          "Yes — GEO builds on top of solid technical SEO, not instead of it. Clean semantic HTML, fast Core Web Vitals, and structured data are the same foundation both Google's classic ranking algorithm and AI answer engines rely on to understand your content.",
      },
      {
        question: "How long does it take to see SEO or GEO results?",
        answer:
          "Technical fixes (speed, schema, indexing) can show measurable improvement within weeks. Ranking and AI-citation gains for competitive terms typically build over 3-6 months as search engines re-crawl and re-evaluate your site's authority.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No reputable agency can honestly guarantee a specific ranking position — that's controlled by the search engine, not us. What we do guarantee is that we implement the technical and content fundamentals that give you the best realistic shot at visibility.",
      },
    ],
    matchKeywords: [],
    ctaMessage: "Hi Locallify, I'd like to talk about SEO and GEO for my website.",
  },
  {
    slug: "product-design-systems",
    title: "Product systems",
    badge: "Systems",
    shortDescription:
      "Design systems, Figma designs, dashboards, admin panels, integrations, and launch infrastructure in one build plan.",
    icon: FigmaIcon,
    graphic: ProductSystemsGraphic,
    theme: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
      hoverBorder: "hover:border-cyan-500/30",
      hoverGlow: "hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] hover:bg-cyan-500/[0.01]",
    },
    metaTitle: "Product Design Systems & Dashboard Development | Locallify",
    metaDescription:
      "Figma design systems, admin panels, and dashboards built once and reused everywhere — consistent UI, faster shipping, and less design debt as your product grows.",
    keywords: [
      "Product Design System Agency",
      "Figma Design System",
      "Admin Panel Development Company",
      "Dashboard Design and Development",
      "UI Component Library Development",
      "SaaS Design System",
    ],
    serviceType: ["Product Design", "Design System Development", "Dashboard Development"],
    heroKicker: "Product Design Systems",
    h1: "A design system so your product stops looking like five different apps.",
    heroIntro:
      "Every new feature shouldn't mean redesigning buttons, forms, and tables from scratch. We build Figma design systems and matching component libraries — plus the admin panels and dashboards that use them — so your product stays visually consistent as your team ships faster.",
    painPointsTitle: "When you need a system, not another one-off screen",
    painPoints: [
      "Every new feature gets its own inconsistent button styles and spacing.",
      "Your admin panel was built as an afterthought and it shows.",
      "Designers and engineers argue over spacing and color because there's no single source of truth.",
      "Onboarding a new designer or developer takes weeks because nothing is documented.",
    ],
    capabilities: [
      { title: "Figma Design Systems", desc: "Documented components, variants, and design tokens as the single source of truth." },
      { title: "Admin Panel & Dashboard UI", desc: "Internal tools that are actually pleasant for your team to use daily." },
      { title: "Component Libraries", desc: "Coded components matching Figma exactly — no design-to-dev drift." },
      { title: "Design Tokens & Theming", desc: "Color, spacing, and typography systems that support dark mode and rebrands." },
      { title: "Cross-Product Consistency", desc: "One visual language across your marketing site, app, and admin tools." },
      { title: "Launch Infrastructure", desc: "CI/CD, staging environments, and deploy pipelines set up correctly from day one." },
    ],
    techStack: ["Figma", "React", "Tailwind CSS", "Storybook", "shadcn/ui"],
    process: [
      { title: "Audit the UI debt", desc: "We catalogue every inconsistency across your current product." },
      { title: "Build the system", desc: "Figma components and coded equivalents built in lockstep." },
      { title: "Roll it out", desc: "Existing screens migrated, new ones built on the system from day one." },
    ],
    faqs: [
      {
        question: "What's included in a design system?",
        answer:
          "A documented Figma library of components, variants, and design tokens (color, spacing, typography), plus a matching coded component library so engineering and design stay in sync as the product grows.",
      },
      {
        question: "Do we get the Figma files?",
        answer:
          "Yes — the full Figma design system and component library are yours, along with the coded implementation. No proprietary tooling required to keep using it after we're done.",
      },
      {
        question: "Can this integrate with our existing codebase?",
        answer:
          "In most cases, yes. We assess your current stack first and build the component library to slot into your existing React/Next.js codebase rather than requiring a rewrite.",
      },
      {
        question: "Is this worth it for a small team?",
        answer:
          "If you're shipping new screens every week and inconsistency is already visible to users, a lightweight design system pays for itself quickly in faster builds and fewer design/dev back-and-forths — it doesn't need to be a huge upfront project.",
      },
    ],
    matchKeywords: ["dashboard", "admin", "design"],
    ctaMessage: "Hi Locallify, I'd like to talk about a design system or dashboard build.",
  },
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return services.find((service) => service.slug === slug);
}
