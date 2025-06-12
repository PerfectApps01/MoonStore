import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
`;

export const Logo = styled.h1`
    font-size: 1.8rem;
    color: #27ae60;
`;

export const CartWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const CartIcon = styled.div`
    font-size: 2rem;
`;

export const CartCount = styled.div`
    background: #e74c3c;
    color: #fff;
    border-radius: 50%;
    padding: 4px 8px;
    font-size: 0.9rem;
    font-weight: bold;
    position: absolute;
    top: -8px;
    right: -12px;
`;
