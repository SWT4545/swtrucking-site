/**
 * Single source of truth for company information and compliance text.
 * Used across all legal pages and SMS compliance requirements.
 */

export const COMPANY = {
  legalName: "Smith & Williams Trucking",
  shortName: "S&W Trucking",
  addressLine1: "Olive Branch, MS",
  cityStateZip: "Olive Branch, MS 38654",
  fullAddress: "Olive Branch, MS 38654",
  domain: "smithwilliamstrucking.com",
  supportEmail: "dispatch@smithwilliamstrucking.com",
  website: "https://smithwilliamstrucking.com",
} as const;

export const SMS_COMPLIANCE = {
  stop: "Reply STOP to opt out.",
  help: "Reply HELP for help.",
  freq: "Message frequency varies.",
  rates: "Message and data rates may apply.",
} as const;

/**
 * Full compliance block for SMS policy pages.
 * Includes all required Telnyx/TCPA compliance language.
 */
export const SMS_COMPLIANCE_BLOCK = `
${SMS_COMPLIANCE.stop}
${SMS_COMPLIANCE.help}
${SMS_COMPLIANCE.freq}
${SMS_COMPLIANCE.rates}
`.trim();
