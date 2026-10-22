/**
 * GradoJobs - Central Configuration
 *
 * To connect your WhatsApp channel, simply update WHATSAPP_CHANNEL_URL below.
 * All "Join WhatsApp Channel" buttons across the entire website will automatically
 * route to this link.
 */
export const CONFIG = {
  // Official GradoJobs WhatsApp Channel URL
  WHATSAPP_CHANNEL_URL: "https://whatsapp.com/channel/0029VbE8fquCBtxAqXgIpf38",

  // Contact & Brand Details
  BRAND_NAME: "GradoJobs",
  TAGLINE: "Your Next Opportunity Starts Here",
  // Official LinkedIn Company Page
  LINKEDIN_URL: "https://www.linkedin.com/company/gradojobs",
};

// Also expose globally for non-module inline scripts if needed
if (typeof window !== "undefined") {
  window.GRADOJOBS_CONFIG = CONFIG;
}
