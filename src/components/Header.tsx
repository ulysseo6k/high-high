import React, { useState } from 'react';
import { Smartphone, Laptop, Watch, Headphones, ShoppingCart, Menu, User } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { Cart } from './Cart';
import { useCart } from '../context/CartContext';
import { products as allProducts } from '../data/products';

export function Header({ onSearch }: { onSearch: (results: typeof allProducts) => void }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();
  
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">HighTech FR</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="flex items-center space-x-1 hover:text-indigo-200">
                <Smartphone size={20} />
                <span>Smartphones</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-indigo-200">
                <Laptop size={20} />
                <span>Ordinateurs</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-indigo-200">
                <Watch size={20} />
                <span>Montres</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-indigo-200">
                <Headphones size={20} />
                <span>Audio</span>
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:block w-64">
              <SearchBar onSearch={onSearch} />
            </div>
            <button className="hover:text-indigo-200">
              <User size={24} />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="hover:text-indigo-200 relative">
              <ShoppingCart size={24} />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}