export const PLAY_PACKAGE = 'com.gharbanoo.gharbanoo';
export const SUPPORT_EMAIL = 'gharbanoo@gmail.com';
export const WHATSAPP_NUMBER = '919241562747';
export const WHATSAPP_DISPLAY = '+91 92415 62747';

/**
 * Play Store link tagged with where on the site it was tapped. Play Console
 * reports installs by utm_source/utm_medium, so we can see which section works.
 */
export function playStoreUrl(placement: string): string {
  const referrer = `utm_source=website&utm_medium=${placement}`;
  return `https://play.google.com/store/apps/details?id=${PLAY_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
