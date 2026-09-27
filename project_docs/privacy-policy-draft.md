# Privacy Policy — DRAFT

> **TODO(owner): legal review required.** This is a draft built from what the site's code actually does as of 27 Sep 2026. Don't publish it as final until a lawyer has reviewed it and every `TODO(owner)` below is resolved. When it's approved, it replaces the body of `app/(legal)/privacy-policy/page.tsx`.

**Last updated:** TODO(owner): set on publish

---

## 1. Who we are

Locallify Agency ("Locallify", "we") is a software studio at Fakirtilla, near NIT, Silchar, Cachar, Assam 788010, India. We build custom software, web apps and mobile apps for clients in India and worldwide.

This policy explains what personal data we collect through **www.locallifyagency.com**, why, who we share it with, how long we keep it, and what you can ask us to do with it. It's written with India's Digital Personal Data Protection Act, 2023 (DPDP Act) in mind.

TODO(owner): confirm "Locallify Agency" is the exact registered name, and add the registration type (sole proprietorship / LLP / Pvt Ltd).

## 2. What we collect

**When you fill in the project form (`/contact`):**
- Your name and email address
- Company name (optional)
- Project type and budget range
- Your project description (optional)
- Your IP address, to stop spam and abuse

**When you book a call:** the booking goes through Cal.com. Cal.com collects your name, email, chosen time slot and anything you write in the booking notes.

**When you submit a review (`/reviews`):** your name, rating and review text. Reviews are hidden until we approve them.

**When you message us directly:** anything you send over WhatsApp or email (hello@locallifyagency.com), including your phone number or email address.

**Automatically:** our host (Vercel) keeps standard server logs, including IP address, browser type and the pages you requested, to run and secure the site.

**Analytics and cookies:** the site itself sets no advertising or analytics cookies. The Cal.com booking widget on `/contact` may set its own cookies when it loads. TODO(owner): if analytics are added (e.g. Vercel Analytics, Plausible, Google Analytics), list them here and add a cookie notice if any of them set non-essential cookies.

## 3. Why we use it

| Purpose | Data used | Basis |
|---|---|---|
| Replying to your enquiry and scoping a project | Form fields, messages | Your consent, given when you submit the form or message us |
| Scheduling a discovery call | Booking details | Your consent |
| Stopping spam and abuse of the form | IP address | Legitimate use: keeping the service secure |
| Showing approved reviews | Name, rating, review text | Your consent, which you can withdraw at any time |
| Running and securing the website | Server logs | Legitimate use: operating the service |
| Contracts, invoices and legal obligations | Contact and billing details | Performing a contract / legal obligation |

We don't sell your data, and we don't use it for advertising.

## 4. Who we share it with (processors)

We use these services to run the site. Each one only processes data on our behalf:

| Service | What for | Data |
|---|---|---|
| Sanity | Stores form leads, reviews and site content | Form fields, IP address, reviews |
| Upstash | Rate-limits the contact form | IP address (short-lived) |
| Cal.com | Call booking | Booking details |
| Vercel | Website hosting | Server logs |
| Google Workspace | Email and calendar | Emails, meeting invites |
| WhatsApp (Meta) | Chat with clients | Messages, phone number |

TODO(owner): confirm this list is complete. Resend (email notifications) and Google Sheets (lead log) are referenced in the code but not switched on. Add them here if you turn them on. Some of these providers store data outside India; say so and name the regions if a lawyer advises it.

## 5. How long we keep it

- **Enquiries that don't become projects:** TODO(owner): e.g. deleted 12 months after the last contact.
- **Client project records and invoices:** as long as the law requires for accounting and tax. TODO(owner): confirm the period (commonly 8 years in India).
- **IP addresses used for rate-limiting (Upstash):** minutes to hours, automatically.
- **IP address stored with a lead in Sanity:** TODO(owner): decide a period, or stop storing it once the spam check has passed.
- **Published reviews:** until you ask us to remove them.

## 6. Your rights

Under the DPDP Act you can:
- ask what personal data we hold about you
- ask us to correct or update it
- ask us to delete it, or withdraw consent you gave earlier
- nominate someone to exercise these rights for you if you're unable to

To do any of this, email **hello@locallifyagency.com** with the subject "Data request". We'll confirm we've received it and reply within TODO(owner): e.g. 30 days.

## 7. Grievance officer

If you're unhappy with how we've handled your data, contact our grievance officer:

- **Name:** TODO(owner)
- **Email:** TODO(owner): e.g. hello@locallifyagency.com or a dedicated privacy@ address
- **Address:** Fakirtilla, near NIT, Silchar, Cachar, Assam 788010, India

If we don't resolve your complaint, you can take it to the Data Protection Board of India.

## 8. Security

Access to stored leads and reviews is limited to the people who run Locallify. All traffic to the site uses HTTPS. No system is perfectly secure. If a breach affects your data, we'll tell you and the authorities as the law requires.

## 9. Children

The site isn't meant for anyone under 18, and we don't knowingly collect their data.

## 10. Changes

If we change this policy, we'll update the date at the top. If a change is significant, we'll also say so on the site.

---

### Notes for the reviewer (not part of the policy)

- The live policy still describes the old storefront product ("your customers' interactions with your shop"). It doesn't cover the contact form, IP logging, Cal.com, the review form or cookies. This draft fixes that.
- The contact form currently stores the submitter's IP address in the Sanity `lead` document (`app/api/contact/route.ts`). Consider dropping it after the rate-limit check, or set a retention period.
- A consent line under the contact form's submit button ("By sending this you agree to our Privacy Policy") would support the consent basis in §3.
