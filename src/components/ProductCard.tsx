import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../data/products';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { id, name, price, image, description } as Product
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2">{name}</h4>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-800 text-lg font-bold mb-4">{price}€</p>
        <button
          onClick={handleAddToCart}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}