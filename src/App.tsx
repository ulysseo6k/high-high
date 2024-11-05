import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CategoryCard } from './components/CategoryCard';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { products as allProducts } from './data/products';
import { Smartphone, Laptop, Watch, Headphones } from 'lucide-react';

const categories = [
  { icon: <Smartphone size={32} />, name: "Smartphones", count: "4 produits" },
  { icon: <Laptop size={32} />, name: "Ordinateurs", count: "4 produits" },
  { icon: <Watch size={32} />, name: "Montres", count: "4 produits" },
  { icon: <Headphones size={32} />, name: "Audio", count: "4 produits" }
];

function App() {
  const [products, setProducts] = useState(allProducts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onSearch={setProducts} />
        <Hero />
        
        {/* Categories */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8">Nos Catégories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedCategory(
                    category.name.toLowerCase() === 'smartphones' ? 'smartphone' :
                    category.name.toLowerCase() === 'ordinateurs' ? 'computer' :
                    category.name.toLowerCase() === 'montres' ? 'watch' :
                    category.name.toLowerCase() === 'audio' ? 'audio' : null
                  )}
                >
                  <CategoryCard {...category} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold">
              {selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}s` : 'Tous nos Produits'}
            </h3>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-indigo-600 hover:text-indigo-800"
              >
                Voir tout
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;