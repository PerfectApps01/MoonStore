import React from 'react';
import {Banner} from "./ReferralBanner.styles";



export default function ReferralBanner({ username }) {
    if (!username) return null;
    return (
        <Banner>
            You were invited by <strong>{username}</strong>. You will receive a bonus after registration!
        </Banner>
    );
}
