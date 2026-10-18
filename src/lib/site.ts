// Canonical production origin shared by metadata, structured data and sitemap.
export const SITE_URL = "https://www.intorza.com";
export const SITE_NAME = "Intorza";
export const SITE_DESCRIPTION =
  "All-in-one interior design project management software. Create quotations, generate invoices, manage clients, projects and team collaboration. Trusted by 500+ interior designers and contractors worldwide.";
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_LOGO = `${SITE_URL}/intorza-logo.webp`;
export const SITE_EMAIL = "intorza.com@gmail.com";
export const SITE_PHONE = "+91 9886579923";
export const SITE_PHONE_E164 = "+919886579923";
export const SITE_ADDRESS = {
  streetAddress:
    "Shop No 1, 1st Floor, 10/1, 10th Cross, LR Bande C L Ramaiah Layout, RT Nagar Post",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560032",
  addressCountry: "IN",
};
export const SITE_ADDRESS_TEXT = `${SITE_ADDRESS.streetAddress}, ${SITE_ADDRESS.addressLocality}, ${SITE_ADDRESS.addressRegion} ${SITE_ADDRESS.postalCode}`;
export const SITE_MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS_TEXT)}`;
export const SITE_OG_IMAGE_WIDTH = 1536;
export const SITE_OG_IMAGE_HEIGHT = 1024;
export const PRO_MONTHLY_PRICE = 499;
export const PRO_ORIGINAL_PRICE = 2999;
