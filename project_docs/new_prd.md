# Product Requirements Document
# Locallify Pages — Smart Business Profile Platform

**Version:** 1.0  
**Author:** Habib / Locallify  
**Date:** April 2026  
**Status:** Draft

---

## 1. Executive Summary

Locallify Pages is a hosted micro-site and digital presence product built for local Indian businesses who need an online presence but are unwilling or unable to invest in a full website. Each business gets a branded, mobile-first profile page at `locallify.in/businessname` bundled with AI-generated social media creatives, WhatsApp lead delivery, UPI payment integration, and India-first features like multilingual support and festive mode.

This product is sold as an add-on or standalone package by Locallify agency, targeting SMBs across Assam, NE India, and eventually all of India.

---

## 2. Problem Statement

### 2.1 The Market Gap

Local businesses in Tier 2 and Tier 3 Indian cities face a specific challenge:

- They know they need online presence
- They do NOT want the complexity of managing a full website
- They DO want something shareable on WhatsApp and Instagram
- They need leads delivered in a format they already use (WhatsApp)
- They cannot afford ₹15,000–₹50,000 for a custom website

Existing tools like Linktree and Bio.link are generic, not localized, and do not serve the Indian SMB context (no UPI, no WhatsApp integration, no regional language support, no festive themes).

Google Business Profile exists but requires verification, has no custom design, and sends users off the page quickly.

### 2.2 The Opportunity

Locallify Pages fills the gap between "nothing" and "full website" — delivering 80% of the online presence benefit at 20% of the cost and complexity.

---

## 3. Goals & Success Metrics

### 3.1 Business Goals

- Generate recurring monthly revenue through page hosting subscriptions
- Increase Locallify agency client retention by locking clients into the ecosystem
- Build a portfolio of 50+ live pages within 6 months that rank on Google
- Create a pipeline for upselling clients from Pages to full website packages

### 3.2 Success Metrics (6-Month Targets)

| Metric | Target |
|--------|--------|
| Active Locallify Pages | 50+ |
| Monthly Recurring Revenue from Pages | ₹25,000+ |
| Average Locallify Score per page | 65+ |
| WhatsApp leads delivered via platform | 200+/month |
| Upsells from Page → Full Website | 5+ |

---

## 4. Target Users

### 4.1 Primary User — Business Owner

- Small local businesses: restaurants, salons, coaching centres, retail shops, service providers
- Location: Silchar, Guwahati, and Tier 2/3 cities in Assam and NE India
- Age: 25–50
- Tech comfort: Low to medium — comfortable with WhatsApp and Instagram, not with website backends
- Language: Assamese, Bengali, Hindi, or English
- Budget: ₹1,500–₹5,000/month

### 4.2 Secondary User — Locallify Team (Internal)

- Locallify staff who create and manage pages on behalf of clients
- Need a fast, templated workflow to deliver pages within 48–72 hours

### 4.3 End User — Business Customer (Visitor)

- A person who receives a Locallify page link via WhatsApp or sees it in an Instagram bio
- Needs to quickly find contact info, location, hours, and a way to reach the business
- Must have a frictionless mobile experience

---

## 5. Feature Requirements

### 5.1 Tier 1 — Core Page Features (MVP — Month 1)

These are required for launch. No page goes live without these.

#### 5.1.1 Business Profile Section
- Business name, tagline, logo/profile photo
- Cover photo or short cover video (max 15 seconds)
- Category tag (Restaurant / Salon / Shop / Coaching / etc.)
- Short bio / description (max 150 characters)

#### 5.1.2 WhatsApp Direct Chat Button
- Prominent CTA button — "Chat on WhatsApp"
- Pre-filled message: "Hi, I found you on Locallify!"
- Tracks click count (visible in owner dashboard)

#### 5.1.3 Click-to-Call Button
- One tap phone call
- Primary and secondary number support

#### 5.1.4 Google Maps Embed
- Embedded map pinned to the business location
- "Get Directions" button that opens Google Maps

#### 5.1.5 Business Hours
- Days and hours input
- Live "Open Now" / "Closed" badge based on current time and timezone (IST)

#### 5.1.6 Social Media Links
- Instagram, Facebook, YouTube, Twitter/X
- Clean icon-based link buttons

#### 5.1.7 QR Code Generation
- Auto-generated QR code for every page
- Downloadable as PNG (print-ready, 300 DPI)
- Use case: print on visiting cards, shop banners, packaging, menus

#### 5.1.8 Lead Capture Form → WhatsApp Delivery
- Simple form: Name, Phone Number, Message / Service Enquiry
- On submission: lead is instantly delivered to the business owner's WhatsApp as a formatted message
- No app install required for the business owner
- Format example:
  ```
  🔔 New Lead via Locallify!
  Name: Ravi Kumar
  Phone: 9876543210
  Message: I need a haircut tomorrow
  Page: locallify.in/trendy-salon
  ```

#### 5.1.9 UPI Payment Button
- One-tap payment via GPay, PhonePe, Paytm
- Business enters their UPI ID; visitors can pay directly from the page
- Use case: advance booking deposits, product payments, service fees

---

### 5.2 Tier 2 — India-First Differentiators (Month 2)

These are the features that separate Locallify Pages from every global competitor.

#### 5.2.1 AI Creative Studio
- Every active page subscription includes 4 AI-generated social media creatives per month
- Creatives are branded with the business logo, colors, and name
- Delivered as ready-to-post images (1080x1080 for feed, 1080x1920 for stories/reels)
- Client submits content request via WhatsApp; Locallify team delivers within 24 hours
- Generated using Locallify's internal AI image workflow (Google Nano Banana / other tools)
- This is the single highest-perceived-value feature of the product

#### 5.2.2 Multilingual Toggle
- Page supports language switching between English + one regional language
- Supported languages: Hindi, Bengali, Assamese
- Business owner provides translated content during onboarding
- Visitor sees a language toggle button on the page
- Default language auto-detected based on browser locale

#### 5.2.3 Festive Mode
- Pre-scheduled festive banner themes for major Indian occasions:
  - Eid, Durga Puja, Diwali, Christmas, New Year, Holi, Bihu, Independence Day, etc.
  - Full calendar of 12+ events per year
- On the festive date, the page automatically switches to a themed hero banner
- Theme reverts automatically after the occasion
- Business owner can opt out or customize the message
- Zero extra cost — included in all plans

#### 5.2.4 "Today's Special" Card
- A highlighted card on the page for daily or weekly offers/updates
- Examples: "Today's Thali ₹120", "20% off haircuts today", "New batch starts Monday"
- Business owner sends update via WhatsApp to Locallify number
- Locallify team updates the card within 2 hours (manual for now, self-serve later)
- Card displays timestamp — "Updated today at 11:30 AM"

#### 5.2.5 Locallify Verified Badge
- A "✓ Verified Business" badge displayed on the page
- Verification criteria (basic):
  - Business phone number confirmed
  - Business location confirmed via Google Maps
  - At least one photo of the physical location submitted
- Builds end-customer trust
- Creates perceived authority for the Locallify platform brand

---

### 5.3 Tier 3 — Power Features (Month 3+)

These features create a long-term moat and drive retention.

#### 5.3.1 Locallify Score
- A 0–100 digital presence score visible only to the business owner in their dashboard
- Scoring criteria:
  - Profile completeness: name, logo, cover, bio, hours (20 points)
  - WhatsApp button configured (10 points)
  - UPI button configured (10 points)
  - Google Maps linked (10 points)
  - At least one lead received this month (15 points)
  - AI creative delivered this month (10 points)
  - Today's Special updated this week (10 points)
  - Verified badge earned (15 points)
- Used by Locallify team as an upsell trigger: "Your score is 42. Here's how to get to 80."
- Drives habit loop and client retention

#### 5.3.2 Google Reviews Showcase Wall
- Pulls the business's Google Reviews and displays them in a beautiful card layout on the page
- Auto-updates when new reviews are added
- Shows star rating, reviewer name, review text, and date
- Requires the business to have a verified Google Business Profile

#### 5.3.3 Photo Gallery Section
- Grid of up to 12 photos of the business (products, premises, team, events)
- Tap to view fullscreen
- Locallify team uploads photos during onboarding and on request

#### 5.3.4 WhatsApp Catalogue Link
- For businesses using WhatsApp Business with a product catalogue
- A "View Our Catalogue" button that opens their WhatsApp catalogue directly
- No extra setup required beyond sharing the catalogue link

#### 5.3.5 Owner Dashboard (Self-Serve)
- Simple web dashboard for business owners
- View: total page visits, WhatsApp button clicks, lead form submissions, call clicks
- Update: Today's Special card, business hours, phone number
- Download: QR code, AI creatives
- View: Locallify Score and improvement tips
- Login via OTP on WhatsApp (no password required — fits the audience)

---

## 6. Pricing Structure

### 6.1 Plans

| Plan | Price | Best For |
|------|-------|----------|
| Starter Page | ₹1,999 one-time setup + ₹499/mo | Businesses wanting basic presence |
| Growth Pack | ₹3,999/month | Businesses wanting growth tools |
| Pro Pack | ₹6,999/month | Established businesses wanting full management |

### 6.2 What's Included Per Plan

| Feature | Starter | Growth | Pro |
|---------|---------|--------|-----|
| Locallify Page | ✅ | ✅ | ✅ |
| WhatsApp Button | ✅ | ✅ | ✅ |
| UPI Button | ✅ | ✅ | ✅ |
| QR Code | ✅ | ✅ | ✅ |
| Lead Form → WhatsApp | ✅ | ✅ | ✅ |
| Festive Mode | ✅ | ✅ | ✅ |
| Verified Badge | ❌ | ✅ | ✅ |
| AI Creatives/month | ❌ | 4 | 8 |
| Today's Special Updates | ❌ | 4/month | Unlimited |
| Multilingual Toggle | ❌ | ✅ | ✅ |
| Google Reviews Wall | ❌ | ✅ | ✅ |
| Locallify Score Dashboard | ❌ | ✅ | ✅ |
| Dedicated Manager | ❌ | ❌ | ✅ |

---

## 7. Technical Architecture

### 7.1 Phase 1 — Manual (Launch)

- Pages built as static Next.js or HTML pages
- One template, fields filled manually per client
- Hosted on Vercel or Cloudflare Pages
- URL structure: `locallify.in/[business-slug]`
- Lead form submissions sent via WhatsApp using Twilio or direct WhatsApp API webhook
- QR code generated using a free QR library (qrcode.js or similar)
- No client login required in Phase 1 — all updates go through Locallify team

### 7.2 Phase 2 — Semi-Automated (Month 3+)

- Admin panel for Locallify team to create/update pages without code
- Basic client-facing dashboard with OTP WhatsApp login
- Analytics: page views, button clicks tracked via Plausible or simple custom tracker
- Today's Special update via WhatsApp bot (client sends message → auto-updates page)

### 7.3 Phase 3 — Self-Serve Platform (Month 6+)

- Full self-serve onboarding: client signs up, fills form, page goes live
- AI creative generation integrated into dashboard
- Locallify Score calculated in real time
- Google Business Profile API integration for reviews pull

---

## 8. Design Principles

- **Mobile-first, always** — 90%+ of visitors will be on smartphones
- **Fast load** — under 2 seconds on 4G; no heavy frameworks in Phase 1
- **Cinematic and premium** — not generic; every page should look like it was designed, not auto-generated
- **Minimal friction for the visitor** — WhatsApp button is above the fold on every page
- **Minimal friction for the owner** — they never need to log into anything in Phase 1
- **Locallify brand is subtle but present** — small "Powered by Locallify" footer on every page

---

## 9. Go-to-Market Strategy

### 9.1 Phase 1 — Agency Clients First (Month 1–2)

- Offer Locallify Page to all existing Locallify agency clients as an add-on
- Use it as a lead magnet: "We'll build your Locallify Page for free with any agency package"
- Target: 5–10 pages live within first month

### 9.2 Phase 2 — Local Outreach (Month 2–4)

- Walk into local businesses in Silchar and Guwahati with a printed demo QR code
- Show them a sample page on their phone — tangible and visual
- Use WhatsApp broadcast to reach business owners
- Offer 30-day free trial for first 20 businesses

### 9.3 Phase 3 — Platform SEO (Month 4+)

- Each `locallify.in/businessname` page is optimized for local search
- Target keywords: "best restaurant in Silchar", "top salon in Guwahati", etc.
- As pages accumulate, Locallify.in builds domain authority and ranks for local searches
- Inbound leads come to Locallify naturally — self-sustaining growth loop

---

## 10. Rollout Timeline

| Month | Milestone |
|-------|-----------|
| Month 1 | Build core page template. Launch with 3–5 pilot clients. WhatsApp lead form live. QR codes delivered. |
| Month 2 | AI creatives workflow live. Verified badge launched. Festive Mode calendar set up. Onboard 10 clients. |
| Month 3 | Locallify Score live. Google Reviews wall. Multilingual support. Admin panel for internal team. 25 clients. |
| Month 4 | Client-facing dashboard (OTP login). Today's Special WhatsApp bot. 35 clients. |
| Month 5 | SEO push on all pages. Local outreach campaign. Self-serve onboarding beta. 50 clients. |
| Month 6 | Full self-serve platform live. Review pricing. Explore expansion to other cities. |

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Clients not willing to pay ₹499/mo recurring | Medium | High | Emphasize AI creatives as value — 4 creatives alone worth ₹2,000+ if outsourced |
| Manual workflow doesn't scale past 20 clients | High | Medium | Build admin panel by Month 3 before scale hits |
| Competitor copies the idea | Low (near term) | Low | First-mover advantage + brand trust + local relationships |
| WhatsApp API costs increase | Low | Medium | Monitor costs; switch to alternative if needed |
| Clients leave after 3 months | Medium | High | Locallify Score and monthly creatives create habit loop and retention |

---

## 12. Open Questions

- Should pages have a public directory / index on locallify.in where all businesses can be browsed?
- Should Locallify offer a white-label version of this product for other agencies?
- At what client count does it make sense to hire a dedicated page manager?
- Should festive mode be opt-in or opt-out by default?
- What is the right upsell trigger from Locallify Page → Full Website? (Locallify Score 80+? 50+ monthly leads?)

---

## 13. Appendix

### 13.1 Competitive Landscape Summary

| Product | UPI | WhatsApp Lead | Multilingual | Festive Mode | AI Creatives | India Focus |
|---------|-----|--------------|-------------|-------------|-------------|------------|
| Linktree | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bio.link | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Beacons.ai | ❌ | ❌ | ❌ | ❌ | Limited | ❌ |
| Google Business Profile | ❌ | ❌ | ❌ | ❌ | ❌ | Partial |
| Justdial | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Locallify Pages** | **✅** | **✅** | **✅** | **✅** | **✅** | **✅** |

### 13.2 Sample Page URL Structure

```
locallify.in/sharma-hardware-silchar
locallify.in/trendy-salon-guwahati
locallify.in/icon-computer-institute
locallify.in/soliel-academy
```

### 13.3 WhatsApp Lead Message Format

```
🔔 New Lead — Locallify
━━━━━━━━━━━━━━━
👤 Name: [Visitor Name]
📞 Phone: [Visitor Phone]
💬 Message: [Enquiry Text]
🔗 Page: locallify.in/[slug]
🕐 Time: [Date & Time IST]
━━━━━━━━━━━━━━━
Reply to this message to respond to your lead.
```

---

*Document prepared for internal Locallify product planning.*  
*Next review date: 30 days from creation.*