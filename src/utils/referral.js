const REFERRER_KEY = 'referrer';

export function saveReferrer(ref) {
    if (ref) {
        localStorage.setItem(REFERRER_KEY, ref);
    }
}

export function getStoredReferrer() {
    return localStorage.getItem(REFERRER_KEY);
}

export function clearReferrer() {
    localStorage.removeItem(REFERRER_KEY);
}

export function extractReferrerFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('ref') || null;
}
