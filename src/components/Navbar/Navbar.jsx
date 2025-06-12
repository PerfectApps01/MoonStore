import React from 'react';
import { Header, Logo, CartWrapper, CartIcon, CartCount } from './Navbar.styles';

export default function Navbar({ cartCount }) {
    return (
        <Header>
            <Logo>MoonStore 🌙</Logo>
            <CartWrapper>
                <CartIcon>🛒</CartIcon>
                <CartCount>{cartCount}</CartCount>
            </CartWrapper>
        </Header>
    );
}
