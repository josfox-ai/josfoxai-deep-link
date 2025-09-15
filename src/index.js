/**
 * josfoxai-deep-link
 * Deep link utility for JOSFOX AI (iOS/Android) with fallback.
 */

const DEFAULTS = {
  schemeUrl: 'josfoxai://open?resource=home',
  packageName: 'ai.josfox.app',
  fallbackUrl: 'https://josfox.ai'
};

function getPlatform() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  const isIOS = /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /Android/.test(ua);
  return isIOS ? 'ios' : (isAndroid ? 'android' : 'other');
}

/**
 * Abre la app JOSFOX AI o redirige al fallback.
 * @param {Object} opts { schemeUrl, packageName, fallbackUrl }
 */
export function openJosfoxAI(opts = {}) {
  const { schemeUrl, packageName, fallbackUrl } = { ...DEFAULTS, ...opts };
  const platform = getPlatform();

  if (platform === 'android' && /Chrome|Edg\//.test(navigator.userAgent)) {
    const intentUrl =
      `intent://open?resource=home#Intent;scheme=josfoxai;package=${packageName};` +
      `S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;
    window.location.href = intentUrl;
    return;
  }

  const timeout = platform === 'ios' ? 1200 : 1000;
  let didHide = false;
  const onHide = () => { didHide = true; };
  document.addEventListener('visibilitychange', onHide, { once: true });

  try { window.location.href = schemeUrl; } catch (e) {}

  setTimeout(() => {
    document.removeEventListener('visibilitychange', onHide);
    if (!didHide) window.location.href = fallbackUrl;
  }, timeout);
}

// Para UMD build
export default { openJosfoxAI };
