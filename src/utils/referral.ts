/**
 * Referral Parameter Utilities
 * Preserves and parses referral codes passed via URL parameters (e.g. ?ref=SQUAD2026 or ?referral=ALPHA)
 */

export function getReferralCodeFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  const params = new URLSearchParams(window.location.search);
  const ref = params.get('ref') || params.get('referral');
  if (ref && /^[a-zA-Z0-9_-]{2,32}$/.test(ref)) {
    // Cache in sessionStorage for internal navigation preservation
    try {
      sessionStorage.setItem('smart_battle_ref', ref);
    } catch {
      // Ignore storage errors in restricted contexts
    }
    return ref;
  }
  
  try {
    return sessionStorage.getItem('smart_battle_ref');
  } catch {
    return null;
  }
}

export function buildReferralUrl(code: string): string {
  if (typeof window === 'undefined') return `https://smartbattle.app/?ref=${encodeURIComponent(code)}`;
  const origin = window.location.origin;
  const pathname = window.location.pathname;
  return `${origin}${pathname}?ref=${encodeURIComponent(code)}`;
}
