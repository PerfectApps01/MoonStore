import React from 'react';
import { Header, Logo, Cart } from './Navbar.styles';

export default function Navbar({ cartCount }) {
    return (
        <Header>
            <Logo>MoonStore 🌙</Logo>
            <Cart>Cart ({cartCount})</Cart>
        </Header>
    );
}
