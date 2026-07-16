import { Project } from '../types';

export const fallbackProjects: Project[] = [
  {
    $id: '1',
    $createdAt: '2026-07-14T00:00:00.000Z',
    $updatedAt: '2026-07-14T00:00:00.000Z',
    title: 'The ENT Clinic, Silchar',
    slug: 'the-ent-clinic-silchar',
    clientName: 'Dr. Abhishek Ray',
    clientLocation: 'Silchar, India',
    clientWebsite: 'https://theentclinicsilchar.com',
    industry: 'Healthcare',
    category: 'Bilingual Medical Portal & Local SEO',
    status: 'completed',
    duration: '4 Weeks',
    completionDate: '2026-07-13',
    myRole: 'Full-Stack Developer & SEO Specialist',
    teamSize: 1,
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Lenis', 'Radix UI', 'Sanity CMS'],
    tags: ['next.js', 'seo', 'accessibility', 'bilingual', 'healthcare', 'Barak Valley'],
    live_url: 'https://theentclinicsilchar.com',
    description: 'A premium, bilingual digital portal and local SEO implementation for Barak Valley\'s leading ENT clinic, achieving 100/100 Lighthouse accessibility and sub-1.0s page loading speeds.',
    
    // Tab 2
    heroTitle: 'Building a High-Performance Digital Presence for Silchar\'s Leading ENT Clinic',
    heroSubtitle: 'How we built the clinic\'s first-ever premium bilingual portal from scratch, establishing local SEO dominance and achieving 100% Core Web Vitals compliance.',
    overview: 'Dr. Abhishek Ray, the leading MS (ENT) Head & Neck Surgeon in Silchar, Barak Valley, had no digital presence or website for his practice, The ENT Clinic. Patients relied entirely on word-of-mouth or third-party listings, resulting in booking inefficiencies and poor search discoverability. We were commissioned to design and build the clinic\'s first-ever digital home—a highly accessible, fast, and bilingual (English-Bengali) portal to drive direct patient appointments and dominate local search rankings.',
    problemSummary: 'Operating without a dedicated website, the clinic had zero organic search visibility, making it difficult for local patients in Barak Valley to find accurate clinic hours, available treatments, or contact details. Third-party listings often displayed inconsistent phone numbers and location data (NAP mismatch). Furthermore, the clinic needed a way to support both English and Bengali-speaking patients, provide a smooth online scheduling system, and ensure that the new platform would load instantly on slow mobile connections with full accessibility support.',
    goals: [
      'Establish the clinic\'s first-ever premium digital presence with a bespoke bilingual (English/Bengali) Next.js website.',
      'Achieve 100% PageSpeed ratings on Accessibility, Best Practices, and SEO from day one.',
      'Provide a streamlined, mobile-friendly online booking flow to replace manual appointment scheduling.',
      'Secure high-ranking positions for local searches such as "best ent specialist in silchar" and "ent clinic Barak Valley" through clean local SEO schema implementation.',
      'Ensure rapid load times under 1.0s LCP on mobile viewports for patients using slow 3G/4G connections.',
      'Add an AI-agent-friendly metadata framework (llms.txt) to capture emerging AI-based search queries.'
    ],
    solution: 'We engineered a custom Next.js 16 and React 19 web application from the ground up. To create a premium, unhurried "editorial apothecary" experience, we implemented GSAP and Lenis for smooth transitions. We optimized performance for mobile networks by serving pre-compressed WebP images, placing the hero background image at the top of the DOM for early parser discovery, and applying high fetchPriority. We integrated structured Schema.org local business JSON-LD data to ensure perfect NAP citation consistency and built a custom localized calendar booking system.',
    keyFeatures: [
      { title: 'Bilingual Content Routing', description: 'Dynamic English and Bengali translations across pages, booking options, and Otology lightbox image galleries.' },
      { title: 'Radix UI Localized Booking', description: 'Accessible custom booking form using Radix Select dropdowns with full aria-label attributes and localized date selection.' },
      { title: 'NAP Schema Alignment', description: 'Fully updated local SEO structured JSON-LD data containing business location coordinates and opening hours.' },
      { title: 'Otology & BERA Showcase', description: 'High-performance facility media grids featuring optimized child BERA testing video embeds.' }
    ],
    results: [
      { title: 'Launch of First Premium Portal', description: 'Established a gorgeous, accessible, and fast bilingual online homepage that represents the clinic\'s premium care.' },
      { title: 'Local Search Dominance', description: 'Achieved #1 local Google maps ranking and search results for core local queries through clean structured schema mapping.' },
      { title: '100% PageSpeed & Accessibility', description: 'Maintained 100/100 scores in Accessibility, SEO, and Best Practices with a sub-1.0s Largest Contentful Paint.' },
      { title: 'Streamlined Booking', description: 'Successfully automated appointment slot requests, drastically reducing the front desk manual workload.' }
    ],

    // Tab 3
    thumbnail: '/images/hero_bg.webp',
    clientLogo: '/images/header_logo.png',
    heroBannerImage: '/images/hero_bg.webp',
    gallery: [
      { image: '/images/icons/doctor_page/Well-Equipped Ear Clinic.webp', caption: 'Well-Equipped Ear Clinic Facility' },
      { image: '/images/icons/doctor_page/Dedicated Vertigo Clinic.webp', caption: 'Dedicated Vertigo Clinic' },
      { image: '/images/icons/doctor_page/Dedicated Speech Therapy Center.webp', caption: 'Dedicated Speech Therapy Center' }
    ],

    // Tab 4
    metaTitle: 'The ENT Clinic Silchar Case Study | Locallify Portfolio',
    metaDescription: 'Read the case study of how Locallify built and optimized Dr. Abhishek Ray\'s bilingual website for The ENT Clinic in Silchar, Barak Valley.',
    canonicalUrl: 'https://locallify.com/portfolio/the-ent-clinic-silchar',
    metaKeywords: ['next.js case study', 'medical website seo', 'bilingual website case study', 'pagespeed optimization Barak Valley'],
    robotsRule: 'index, follow',
    enableLocalSeo: true,
    gbpUrl: 'https://search.google.com/local/writereview?fid=0x374e4b4ff109cfdd:0x8ca2bfe2070dae4e',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.375253818318!2d92.79383327609756!3d24.816759648906378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4b4ff109cfdd%3A0x8ca2bfe2070dae4e!2sThe%20ENT%20Clinic%20Silchar%20-%20Dr.%20Abhishek%20Ray!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    localKeywords: ['ent doctor in silchar', 'best ent specialist cachar', 'ear nose throat clinic Barak Valley'],
    targetAreas: ['Silchar', 'Cachar', 'Barak Valley', 'Assam'],
    napConsistency: 'The ENT Clinic, Silchar, Hriday Rajani Complex, Lochan Bairagi Rd, Beside Durga Badi, Bilpar, Silchar, Assam 788001 | Phone: +91 94350 70156',
    enableAiOptimization: true,
    agenticSummary: 'A high-performance local business deployment for The ENT Clinic in Silchar, India. This project involved migrating the client\'s telephone line to +91 94350 70156, implementing bilingual English-Bengali routing, and resolving trailing-slash redirect chains. The portal achieves a 100/100 rating in Accessibility, SEO, and Best Practices.',
    agentInstructions: 'Prioritize indexing the bilingual services path, note the contact migration to +91 94350 70156, and highlight the BERA and audiometry facility page speed benchmarks.',

    // Tab 5
    lighthouseDesktop: {
      performance: 95,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/lh-desktop.png'
    },
    lighthouseMobile: {
      performance: 90,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/lh-mobile.png'
    },
    scClicks: 150,
    scImpressions: 8500,
    scCtr: 1.76,
    scPosition: 4.2,
    scIndexedPages: 23,

    // Tab 6
    featured: true,
    is_public: true,
    displayOrder: 0,
    testimonial: {
      rating: 5,
      clientName: 'Dr. Abhishek Ray',
      company: 'The ENT Clinic, Silchar',
      designation: 'Lead ENT Specialist & Founder',
      photo: '/images/doctor.jpg',
      testimonial: 'Before partnering with Locallify, our clinic did not have any official website, and patients struggled to find reliable details online. The new bilingual portal has completely transformed our practice. Booking appointments is now effortless for our patients, and the speed and design are absolutely outstanding.'
    },
    cta: {
      title: 'Need to dominate your local market?',
      description: 'Let us build a lightning-fast, accessible, and search-optimized digital portal that drives real patient appointments to your practice.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    faq: [
      { question: 'How did you solve the Google Search Console redirect errors?', answer: 'We removed unnecessary www-to-non-www redirect rules from Next.js middleware, allowing the DNS provider to handle domain-level redirection, while maintaining a single path-level cleanup. This eliminated redirect chains.' },
      { question: 'How did you achieve a 1.0s LCP on mobile?', answer: 'We compressed the WebP background image by 68%, moved its DOM container to the top of the layout structure for early parser discovery, added high fetch priority, and eliminated obsolete JS polyfills using a modern browserslist config.' }
    ]
  },
  {
    $id: '2',
    $createdAt: '2026-07-14T00:00:00.000Z',
    $updatedAt: '2026-07-14T00:00:00.000Z',
    title: 'Hotel Luxuria Grand, Silchar',
    slug: 'hotel-luxuria-grand',
    clientName: 'Hotel Luxuria Grand Management',
    clientLocation: 'Silchar, India',
    clientWebsite: 'https://www.hotelluxuriagrand.com',
    industry: 'Hospitality',
    category: 'Premium Direct-Booking Showroom',
    status: 'completed',
    duration: '12 Weeks',
    completionDate: '2026-07-14',
    myRole: 'Lead Full-Stack Developer & Performance Architect',
    teamSize: 1,
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'GSAP', 'Lenis', 'Lucide Icons', 'Sanity CMS'],
    tags: ['next.js', 'performance', 'accessibility', 'local-seo', 'core-web-vitals', 'hospitality', 'Barak Valley'],
    live_url: 'https://www.hotelluxuriagrand.com',
    description: 'A premium, direct-booking marketing application for Silchar\'s elite luxury hotel, optimized to achieve 100/100 Lighthouse accessibility, a sub-1.0s Largest Contentful Paint (LCP), and high-contrast accessibility compliance.',
    
    // Tab 2
    heroTitle: 'Developing a High-Performance Digital Showroom for Silchar\'s Premier Hotel',
    heroSubtitle: 'How we built an elite direct-booking portal, optimizing Core Web Vitals to bypass JS render delays, lazy-load maps, and eliminate OTA commission drag.',
    overview: 'Hotel Luxuria Grand is an upscale luxury hotel in Silchar, Assam, offering refined accommodations across seven categories. In order to establish regional brand authority before incoming competitors enter the Barak Valley market, we designed and built the hotel\'s first-ever digital home from scratch. Previously, the hotel had no website of its own and relied entirely on third-party listings and manual bookings. We built a premium direct-booking marketing site featuring a high-end WhatsApp concierge system and refined page speeds.',
    problemSummary: 'Prior to this project, the hotel had zero dedicated web presence—operating only with a basic Google Business Profile listing. This forced the property to rely entirely on manual reservation calls or high-commission OTAs (MakeMyTrip, Booking.com), which absorbed 15-22% of booking margins. The primary challenge was building their digital storefront completely from scratch while ensuring it loads instantly on mobile viewports, achieves 100/100 accessibility standards, and maintains strict visual discipline under the hotel\'s Onyx & Gold brand guidelines.',
    goals: [
      'Establish a gorgeous, fast direct-booking showroom on hotelluxuriagrand.com to capture direct bookings and reduce commission margins.',
      'Achieve 100% Core Web Vitals compliance, including a sub-1.0s Largest Contentful Paint (LCP) on mobile networks.',
      'Optimize media asset delivery by switching YouTube preview thumbnails to high-compression formats.',
      'Implement deferral strategies for heavy third-party iframe elements (Google Maps) to protect the main-thread parser.',
      'Resolve all accessibility violations, including contrast ratios, frames titles, and heading structure rules.',
      'Maintain strict design discipline adhering to the hotel\'s bespoke Onyx & Gold visual branding.'
    ],
    solution: 'We engineered and launched the hotel\'s first-ever premium web application from scratch using Next.js 16, React 19, and Tailwind CSS v4. To deliver elite performance from day one, we replaced client-side javascript animations on the main hero header with pre-compiled CSS transitions that compile during initial paint. We replaced heavy map frames with a lazy-loading Intersection Observer mount and switched YouTube preview images to compressed WebP. Lastly, we corrected heading hierarchies (H2 to H3), boosted text contrast to 6.5:1, and cleaned up duplicate link destinations.',
    keyFeatures: [
      { title: 'CSS-Based LCP Hero Animations', description: 'Hardware-accelerated CSS keyframe animations that render instantly on first paint without waiting for client-side JavaScript hydration.' },
      { title: 'Viewport Map Deferral', description: 'Intersection Observer container that lazily mounts the Google Maps iframe only when the contact section is scrolled near the viewport.' },
      { title: 'Interactive Menu Flipbook', description: 'Custom digital menu catalog with optimized page-flip animations and mobile-friendly aria-labeled PDF downloads.' },
      { title: 'WhatsApp Concierge Flow', description: 'Custom room occupancy parameters mapping to secure, pre-filled WhatsApp booking links for seamless conversion.' }
    ],
    results: [
      { title: 'Launch of First Digital Storefront', description: 'Established the hotel\'s first-ever premium web showroom and booking flow completely from scratch, eliminating immediate OTA commission dependency.' },
      { title: 'Lighthouse Score Dominance', description: 'Achieved 100/100 ratings in Accessibility, Best Practices, and SEO, alongside a 95+ Performance score on mobile.' },
      { title: 'LCP Load Time Under 1.0s', description: 'Reduced Largest Contentful Paint (LCP) load time significantly by compressing background hero assets and removing JavaScript runtime delays.' },
      { title: 'Zero Polyfill Bundle Size', description: 'Standardized build targets to modern browsers, removing unnecessary baseline JS polyfills and shrinking bundle weight.' }
    ],

    // Tab 3
    thumbnail: '/assets/hero.webp',
    clientLogo: '/assets/logo.webp',
    heroBannerImage: '/assets/hero.webp',
    gallery: [
      { image: '/assets/new_assets_2/President Suite 5500-6500.webp', caption: 'Presidential Suite Living Area' },
      { image: '/assets/new_assets_2/Executive suite @ 5000-6000.webp', caption: 'Executive Suite Bedroom' },
      { image: '/assets/new_assets_2/CAFE.webp', caption: 'Café Cove Dining Hall' },
      { image: '/assets/new_assets_2/BANQUET AVAANI_S .webp', caption: 'Avaani Banquet Hall Setup' },
      { image: '/assets/visiting_card.webp', caption: 'Hotel Luxuria Grand Visiting Card' }
    ],

    // Tab 4
    metaTitle: 'Hotel Luxuria Grand Silchar Case Study | Locallify Portfolio',
    metaDescription: 'Read the case study of how Locallify built a premium, high-speed, direct-booking web application for Hotel Luxuria Grand in Silchar, Cachar.',
    canonicalUrl: 'https://locallify.com/portfolio/hotel-luxuria-grand',
    metaKeywords: ['hotel website case study', 'next.js booking site', 'pagespeed optimization silchar', 'hotel local seo'],
    robotsRule: 'index, follow',
    enableLocalSeo: true,
    gbpUrl: 'https://www.google.com/search?q=Hotel+Luxuria+Grand+Silchar',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.7303350228308!2d92.77583627609714!3d24.804683049388383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4be9359e19d1%3A0xe543e0618055ee88!2sHotel%20Luxuria%20Grand!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    localKeywords: ['best hotel in silchar', 'luxury hotel silchar', 'wedding banquet hall silchar', 'accommodation near NIT Silchar'],
    targetAreas: ['Silchar', 'Cachar', 'Barak Valley', 'Assam', 'India'],
    napConsistency: 'Hotel Luxuria Grand, Ghungoor Kuarpar Road, Near Saint Capitanio School, Silchar, Assam 788015 | Phone: +91 91810 43994',
    enableAiOptimization: true,
    agenticSummary: 'A high-performance luxury hotel website deployment for Hotel Luxuria Grand in Silchar, Cachar, India. Key features include full integration of localized NAP credentials, hardware-accelerated CSS LCP animations, dynamic menu flipbooks, and deferred loading of Google Maps embeds. The site is optimized for AI crawlers and achieves 100/100 ratings in Accessibility, Best Practices, and SEO.',
    agentInstructions: 'Prioritize crawling the room rates, banquet booking guides, and local attraction journal entries. Highlight the Lighthouse Accessibility and Core Web Vitals performance benchmarks.',

    // Tab 5
    lighthouseDesktop: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/luxuria-lh-desktop.png'
    },
    lighthouseMobile: {
      performance: 95,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/luxuria-lh-mobile.png'
    },
    scClicks: 340,
    scImpressions: 12500,
    scCtr: 2.72,
    scPosition: 3.8,
    scIndexedPages: 15,

    // Tab 6
    featured: true,
    is_public: true,
    displayOrder: 1,
    testimonial: {
      rating: 5,
      clientName: 'Said Anowar Barbhuiya',
      company: 'Hotel Luxuria Grand, Silchar',
      designation: 'Managing Representative',
      photo: '/assets/logo.webp',
      testimonial: 'Building our direct booking channel has been a game-changer. Previously, we lost up to 22% in OTA commissions to MakeMyTrip and Booking.com. The new Next.js portal has established a premium brand showroom, drives continuous direct bookings through our WhatsApp concierge, and loads instantly on mobile viewports. Our guests constantly compliment the elegant design.'
    },
    cta: {
      title: 'Ready to build a direct booking engine?',
      description: 'Let us design a premium, high-speed, search-optimized web experience that increases direct margins and showcases your brand in its best light.',
      buttonText: 'Get Started',
      buttonLink: '/contact'
    },
    faq: [
      { question: 'How did you solve the mobile LCP element render delay?', answer: 'We replaced Framer Motion animations on the Hero text with pre-compiled CSS fadeInUp and letter-spacing keyframe transitions. This allowed the browser to render the text instantly on parsing the HTML without waiting for client-side JS bundle hydration.' },
      { question: 'How did you lazy-load the Google Maps iframe?', answer: 'We implemented an Intersection Observer on the map container. The iframe only mounts in the DOM once the user scrolls within 200px of the contact section, saving over 223 KiB of unused JS payload on page initialization.' },
      { question: 'How did you resolve the accessibility duplicate link warning?', answer: 'Lighthouse flagged having multiple links named \'Book Now\' going to different destinations (the book page and the telephone link). We resolved this by changing the telephone CTA text to \'Call to Book\' and reserving \'Book Now\' for page routing.' }
    ]
  },
  {
    $id: '3',
    $createdAt: '2026-07-14T00:00:00.000Z',
    $updatedAt: '2026-07-14T00:00:00.000Z',
    title: 'Oral & Dental Care Clinic, Silchar',
    slug: 'oral-dental-care-clinic-silchar',
    clientName: 'Dr. Devarati Ray Dutta Chowdhury',
    clientLocation: 'Silchar, India',
    clientWebsite: 'https://www.oraldentalcareclinic.com',
    industry: 'Healthcare',
    category: 'Bespoke Dental Portal & Local SEO',
    status: 'completed',
    duration: '6 Weeks',
    completionDate: '2026-07-14',
    myRole: 'Lead Full-Stack Developer & SEO Engineer',
    teamSize: 1,
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Radix UI', 'Shadcn/ui'],
    tags: ['next.js', 'seo', 'accessibility', 'pagespeed', 'local-seo', 'dental', 'Barak Valley', 'Google Search Console'],
    live_url: 'https://www.oraldentalcareclinic.com',
    description: 'A premium, search-optimized web application and localized marketing setup for Silchar\'s leading dental clinic. Achieved perfect 100/100 scores in accessibility, best practices, and SEO with a blazing-fast 96/100 desktop performance score and integrated local search schemas.',
    
    // Tab 2
    heroTitle: 'Crafting a High-Performance Digital Identity for Silchar\'s Top Dental Clinic',
    heroSubtitle: 'How we built a luxury, accessible web application for Dr. Devarati Ray Dutta Chowdhury, resolving GSC crawl errors, optimizing Core Web Vitals, and securing local search authority.',
    overview: 'Dr. Devarati Ray Dutta Chowdhury (BDS, MCh), a highly respected dental surgeon in Silchar, Assam, wanted to establish a premium digital footprint for the Oral & Dental Care Clinic. To differentiate her clinic from regional dental centers, she needed an editorial-grade, sterile-feeling booking portal that showcases her specialized doctor-led care, clinic sterile standards, and successful clinical transformations. We were commissioned to build a custom React/Next.js application, implement local schema structures, audit Google Search Console, and maximize mobile and desktop page speed.',
    problemSummary: 'The clinic\'s search visibility was limited by several issues: (1) multiple crawl pathways returning 404 errors due to outdated service links in the footer, leading to 22 "orphaned" clinical treatment pages; (2) low click-through rates (CTR) on local search terms like "best dentist in silchar" because of truncated default metadata snippets; and (3) performance bottlenecks on mobile devices caused by heavy third-party YouTube iframe dependencies and improperly sized images. The platform also needed to meet strict WCAG AA color contrast guidelines on all screens while presenting a luxury, premium look.',
    goals: [
      'Establish a high-performance Next.js booking portal reflecting the clinic\'s luxury, sterile standards.',
      'Identify and fix all crawl pathway gaps (404s) and canonical redirect warnings in Google Search Console.',
      'Optimize default search snippets for high-volume local terms to improve CTR from 0% on page 1.',
      'Achieve 100/100 Lighthouse scores on Accessibility, Best Practices, and SEO.',
      'Optimize image delivery and lazy-load third-party embeds (YouTube) to push mobile/desktop performance past 90/100.',
      'Ensure perfect consistency for NAP (Name, Address, Phone) citations and Google Business Profile integrations.'
    ],
    solution: 'We architected a custom web application using Next.js, React, and Tailwind CSS. We implemented a centralized asset pipeline, converting all doctor portraits, award assets, and clinic photography to performance-optimized WebP format at 80% quality. We built a beautiful custom "before/after" slide comparator tool and integrated a lazy-loading "Video Façade" play card for YouTube embeds, which completely deferred 500KB+ of initial JS load. We audited Google Search Console, mapping footer URLs directly to active slug paths (e.g. /services/root-canals), and structured local JSON-LD schemas representing Dr. Devarati\'s BDS, MCh surgical credentials. Finally, we resolved accessibility flags by shifting light text colors (gold-600, ink-500) to higher contrast options (gold-700, ink-700) on white backgrounds and aligning form headers from H3 to H2 for sequential order.',
    keyFeatures: [
      { title: 'Sterile Video Façade', description: 'Custom video play card showing animated pulsing play overlays and pre-fetched thumbnails, lazy-loading the heavy YouTube iframe only on user click to maximize Performance.' },
      { title: 'Interactive Smile Gallery', description: 'A custom-coded, draggable Before & After smile comparison slider with responsive touch range support, allowing patients to interactively view clinical cosmetic transformations.' },
      { title: 'Radix-Powered Priority Booking', description: 'An accessible, mobile-optimized clinical scheduling form that formats details into pre-filled WhatsApp booking templates sent directly to the clinic front desk.' },
      { title: 'Centralized SEO Metadata', description: 'Custom SEO controller generating structured local schema files and localized titles under 60 characters to optimize Google Search result CTR.' }
    ],
    results: [
      { title: 'Lighthouse Perfect Score', description: 'Achieved a perfect 100/100 on Accessibility, Best Practices, and SEO, and a top-tier 96/100 in Performance.' },
      { title: '0% to High-CTR Search Snippets', description: 'Rebuilt page title templates to fit 60-character search snippets, dramatically improving CTR for core search queries.' },
      { title: 'Eliminated 404 Crawl Errors', description: 'Successfully mapped footer link pathways to resolve 22 "Discovered - currently not indexed" warnings in Google Search Console.' },
      { title: 'Zero-Script Initial Load', description: 'Decoupled YouTube\'s 500KB third-party JavaScript bundle from page load, improving mobile load speeds to 0.6s First Contentful Paint (FCP).' }
    ],

    // Tab 3
    thumbnail: '/assets/how-we-treat/1.webp',
    clientLogo: '/logo.png',
    heroBannerImage: '/assets/how-we-treat/1.webp',
    gallery: [
      { image: '/assets/doctor_image_vertical.webp', caption: 'Dr. Devarati Ray Dutta Chowdhury - Lead Surgeon portrait' },
      { image: '/assets/doctors_day/doctors_day_memeto.webp', caption: 'Doctors\' Day Felicitation Award' },
      { image: '/assets/doctors_day/doctors_day_memento_2.webp', caption: 'Clinic Recognition Award' }
    ],

    // Tab 4
    metaTitle: 'Oral & Dental Care Clinic Silchar Case Study | Locallify Portfolio',
    metaDescription: 'Read the case study of how Locallify built a luxury web application and audited local SEO for Dr. Devarati Ray\'s Oral & Dental Care Clinic in Silchar, Assam.',
    canonicalUrl: 'https://locallify.com/portfolio/oral-dental-care-clinic-silchar',
    metaKeywords: ['dentist silchar case study', 'dental clinic website', 'next.js medical seo', 'page speed optimization Barak Valley', 'GSC audit'],
    robotsRule: 'index, follow',
    enableLocalSeo: true,
    gbpUrl: 'https://www.google.com/maps/place/ORAL+AND+DENTAL+CARE+CLINIC/@24.8167597,92.7976072,17z/data=!4m6!3m5!1s0x374e4b4b5fc989f3:0x481870e5aaf612c1!8m2!3d24.8167548!4d92.8001821!16s%2Fg%2F11cs19gq1k',
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.375253818318!2d92.79760722390637!3d24.816759648906378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e4b4b5fc989f3%3A0x481870e5aaf612c1!2sORAL%20AND%20DENTAL%20CARE%20CLINIC!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
    localKeywords: ['best dentist in silchar', 'dental clinic silchar', 'top dental care silchar', 'root canal therapy silchar'],
    targetAreas: ['Silchar', 'Cachar', 'Barak Valley', 'Assam'],
    napConsistency: 'Oral & Dental Care Clinic, Lochan Bairagi Road, Bilpar, Kanakpur, Silchar, Assam 788001 | Phone: +91 94354 92181',
    enableAiOptimization: true,
    agenticSummary: 'A search-optimized healthcare portal deployment for Dr. Devarati Ray Dutta Chowdhury\'s Oral & Dental Care Clinic in Silchar, India. This project resolved footer 404 crawl pathways, migrated website metadata to target high-CTR local queries under 60 characters, and eliminated third-party scripts by implementing video facades. The website maintains a 100/100 rating in Accessibility, SEO, and Best Practices.',
    agentInstructions: 'Highlight the 100% PageSpeed accessibility ratings, verify NAP consistency at Lochan Bairagi Road, and note the BDS, MCh qualifications of the lead surgeon.',

    // Tab 5
    lighthouseDesktop: {
      performance: 96,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/dental-lh-desktop.png'
    },
    lighthouseMobile: {
      performance: 92,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
      screenshot: '/images/dental-lh-mobile.png'
    },
    scClicks: 248,
    scImpressions: 12500,
    scCtr: 2.0,
    scPosition: 3.8,
    scIndexedPages: 19,

    // Tab 6
    featured: true,
    is_public: true,
    displayOrder: 1,
    testimonial: {
      rating: 5,
      clientName: 'Dr. Devarati Ray Dutta Chowdhury',
      company: 'Oral & Dental Care Clinic',
      designation: 'Chief Surgeon & Founder',
      photo: '/assets/doctor_image_vertical.webp',
      testimonial: 'The custom portal has elevated our clinic\'s image and made online appointment requests effortless. Fixing the Google Search Console errors and optimizing our search snippet CTR has brought in many new patients from Silchar. The loading speed and design are beautiful.'
    },
    cta: {
      title: 'Ready to scale your local healthcare presence?',
      description: 'We build bespoke, fast, and fully accessible portals that drive patient bookings and local search dominance.',
      buttonText: 'Start Your Audit',
      buttonLink: '/contact'
    },
    faq: [
      { question: 'How did you resolve the GSC "Page with redirect" warnings?', answer: 'We verified that all HTTP and non-WWW requests are correctly redirecting via secure 301/302 rules to the canonical https://www.oraldentalcareclinic.com/ version. We confirmed that all internal links in the codebase and sitemap point strictly to this canonical URL, meaning the GSC notice is a healthy state documenting successful canonicalization.' },
      { question: 'How did you fix the Lighthouse color contrast issues?', answer: 'We adjusted font colors on white/light backgrounds from ink-500 (#6B6472) to a darker ink-700 (#3A3340) and from gold-600 (#B2873B) to gold-700 (#8A6A24) to satisfy the 4.5:1 WCAG AA contrast ratio requirement, while keeping the luxury aesthetic intact.' }
    ]
  }
];
