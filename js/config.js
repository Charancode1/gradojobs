/**
 * GradoJobs - Central Configuration
 *
 * To connect your WhatsApp channel, simply update WHATSAPP_CHANNEL_URL below.
 * All "Join WhatsApp Channel" buttons across the entire website will automatically
 * route to this link.
 */
export const CONFIG = {
  // Central WhatsApp Channel URL (Update this placeholder with your actual WhatsApp link)
  WHATSAPP_CHANNEL_URL: "YOUR_WHATSAPP_CHANNEL_URL",

  // Contact & Brand Details
  BRAND_NAME: "GradoJobs",
  TAGLINE: "Your Next Opportunity Starts Here",
  CONTACT_EMAIL: "gradojobs.official@gmail.com",
};

// Also expose globally for non-module inline scripts if needed
if (typeof window !== "undefined") {
  window.GRADOJOBS_CONFIG = CONFIG;
}
