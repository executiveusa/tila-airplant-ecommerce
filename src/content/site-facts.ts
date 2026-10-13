// Private staging inputs. A filled value alone never approves publication.
export type PendingFact = { status: "pending"; value: null; source: null };
export type VerifiedFact = { status: "verified"; value: string; source: string };
export type Fact = PendingFact | VerifiedFact;

export type SiteFacts = {
  vat: Fact;
  factura: Fact;
  shippingCoverage: Fact;
  shippingCarrier: Fact;
  shippingCost: Fact;
  shippingTime: Fact;
  guarantee: Fact;
  nurseryRegistration: Fact;
  contactWhatsApp: Fact;
  contactEmail: Fact;
  sizeGrades: Fact;
  clusterCounting: Fact;
  tierRules: Fact;
};

const pending: PendingFact = { status: "pending", value: null, source: null };
export const SITE_FACTS: SiteFacts = {
  vat: pending, factura: pending, shippingCoverage: pending,
  shippingCarrier: pending, shippingCost: pending, shippingTime: pending,
  guarantee: pending, nurseryRegistration: pending,
  contactWhatsApp: pending, contactEmail: pending,
  sizeGrades: pending, clusterCounting: pending, tierRules: pending,
};

export function verifiedValue(fact: Fact): string | null {
  return fact.status === "verified" && fact.value.trim() && fact.source.trim() ? fact.value.trim() : null;
}
