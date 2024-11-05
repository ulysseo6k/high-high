import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';

interface SearchBarProps {
  onSearch: (results: typeof products) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase()) ||
      product.description.toLowerCase().includes(value.toLowerCase())
    );
    
    onSearch(filtered);
  };

  return (
    <div className="flex items-center bg-indigo-500 rounded-lg px-3 py-2">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Rechercher..."
        className="bg-transparent border-none focus:outline-none text-white placeholder-indigo-200 w-full"
      />
      <Search size={20} className="text-indigo-200 ml-2" />
    </div>
  );
}