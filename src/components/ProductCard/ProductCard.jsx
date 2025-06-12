import React from 'react';
import {
    Card,
    Name,
    Image,
    Price,
    Button
} from './ProductCard.styles';

export default function ProductCard({ product, isInCart, onAddToCart }) {
    return (
        <Card>
            <Image src={product.image} alt={product.name} />
            <Name>{product.name}</Name>
            <Price>${product.price.toFixed(2)}</Price>
            <Button
                $inCart={isInCart}
                onClick={() => onAddToCart(product.id)}
            >
                {isInCart ? "In Cart" : "Add to Cart"}
            </Button>
        </Card>
    );
}
