import { useEffect, useState } from 'react';
import { saveReferrer, getStoredReferrer, extractReferrerFromURL } from '../utils/referral';

export default function useReferrer() {
    const [referrer, setReferrer] = useState(null);

    useEffect(() => {
        const refFromURL = extractReferrerFromURL();

        if (refFromURL) {
            saveReferrer(refFromURL);
            setReferrer(refFromURL);
        } else {
            const stored = getStoredReferrer();
            if (stored) setReferrer(stored);
        }
    }, []);

    return referrer;
}
