import type { IndustryPage } from "./types";
import { dental } from "./dental";
import { medSpa } from "./med-spa";
import { roofing } from "./roofing";
import { cleaning } from "./cleaning";

export { INDUSTRIES_LIVE } from "./flags";

export const industryPages: IndustryPage[] = [dental, medSpa, roofing, cleaning];

export function getIndustryPage(slug: string): IndustryPage | undefined {
  return industryPages.find((page) => page.slug === slug);
}

export type { IndustryPage } from "./types";
