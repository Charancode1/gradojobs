/**
 * GradoHire - Central Platform Configuration
 *
 * Manage official platform links, branding, and metadata from one central place.
 */
export const CONFIG = {
  // Brand Details
  BRAND_NAME: "GradoHire",
  HEADLINE: "A Fresher's Job Portal. Without the 2-Year Experience Paradox.",
  SUPPORTING_MESSAGE:
    "Why should a job require 2 years of experience in a technology that has existed for just 1 year? GradoHire connects freshers with opportunities that value potential, skills, and ambition.",
  TAGLINE: "A job portal built for freshers.",

  // Official Distribution & Community Channels
  // Add URLs for active platforms; leave empty ("") for platforms not yet launched.
  SOCIAL_LINKS: {
    whatsapp: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
    linkedin: "https://www.linkedin.com/company/gradohire",
    instagram: "",
    x: "",
  },

  // Backwards-compatible direct references
  WHATSAPP_CHANNEL_URL: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
  LINKEDIN_URL: "https://www.linkedin.com/company/gradohire",
};

// Expose globally for browser console or inline script access if needed
if (typeof window !== "undefined") {
  window.GRADOHIRE_CONFIG = CONFIG;
}
