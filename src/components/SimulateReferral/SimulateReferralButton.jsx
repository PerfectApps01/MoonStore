import React from 'react';
import {SimulateButton} from "./SimulateReferralButton.styles";

export default function SimulateReferralButton({ username }) {
    const handleSimulate = () => {
        const url = new URL(window.location);
        url.searchParams.set('ref', username);
        window.history.pushState({}, '', url);
    };

    return (
        <SimulateButton onClick={handleSimulate}>
            Simulate Referral ({username})
        </SimulateButton>
    );
}
