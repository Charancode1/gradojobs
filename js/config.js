/**
 * GradoJobs - Central Platform & Community Configuration
 *
 * Manage official platform links and brand settings from one central place.
 * Add URLs for active channels; leave empty ("") for platforms not yet launched.
 */
export const CONFIG = {
  // Brand Details
  BRAND_NAME: "GradoJobs",
  MOTTO: "Your Career. Your Next Move.",
  TAGLINE: "Your Career. Your Next Move.",
  SUPPORTING_MESSAGE:
    "Opportunities, internships, and career resources to help freshers and early-career graduates take their next step with confidence.",

  // Official Distribution & Community Channels
  // Add URLs for active platforms; leave empty ("") for platforms not yet launched.
  SOCIAL_LINKS: {
    whatsapp: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
    linkedin: "https://www.linkedin.com/company/gradojobs",
    instagram: "", // Leave empty until official handle is launched
    x: "",         // Leave empty until official handle is launched
  },

  // Backwards-compatible direct references
  WHATSAPP_CHANNEL_URL: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",
  LINKEDIN_URL: "https://www.linkedin.com/company/gradojobs",
};

// Also expose globally for inline script access if needed
if (typeof window !== "undefined") {
  window.GRADOJOBS_CONFIG = CONFIG;
}
