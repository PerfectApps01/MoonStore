import React, { useState } from 'react';
import SimulateReferralButton from "../components/SimulateReferral/SimulateReferralButton";
import ReferralBanner from '../components/ReferralBanner/ReferralBanner';
import ProductCard from '../components/ProductCard/ProductCard';
import { clearReferrer } from '../utils/referral';
import Navbar from '../components/Navbar/Navbar';
import useReferrer from '../hooks/useReferrer';
import { products } from '../data/products';
import {
    GlobalStyle,
    ClearButton,
    Container,
    Title,
    Grid,
} from './App.styles';

function App() {
    const [cart, setCart] = useState([]);
    const referrer = useReferrer();

    const handleAddToCart = (id) => {
        if (cart.includes(id)) {
            setCart(cart.filter(itemId => itemId !== id));
        } else {
            setCart([...cart, id]);
        }
    };

    const handleClearReferrer = () => {
        clearReferrer();

        const url = new URL(window.location);
        url.searchParams.delete('ref');
        window.history.replaceState({}, '', url);
    };



    return (
        <>
            <GlobalStyle />
            <Navbar cartCount={cart.length} />
            <Container>
                <Title>MoonStore 🌙</Title>
                <ReferralBanner username={referrer} />

                <SimulateReferralButton username="John" />
                {referrer && (
                    <ClearButton onClick={handleClearReferrer}>
                        Clear Referrer
                    </ClearButton>
                )}

                <Grid>
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isInCart={cart.includes(product.id)}
                            onAddToCart={handleAddToCart}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default App;
