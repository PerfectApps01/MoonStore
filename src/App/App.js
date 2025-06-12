import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { products } from './data/products';
import ProductCard from './components/ProductCard/ProductCard';
import ReferralBanner from './components/ReferralBanner/ReferralBanner';
import useReferrer from './hooks/useReferrer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #f8f8f8;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #27ae60;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
`;

function App() {
  const [cart, setCart] = useState([]);
  const referrer = useReferrer();

  const handleAddToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  return (
      <>
        <GlobalStyle />
        <Container>
          <Title>Бестселлеры луны 🌙</Title>
          <ReferralBanner username={referrer} />
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
