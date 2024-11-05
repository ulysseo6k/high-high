import React from 'react';

export function Hero() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h2 className="text-5xl font-bold mb-6">Découvrez les Dernières Innovations Tech</h2>
          <p className="text-xl mb-8">Les meilleurs produits high-tech aux meilleurs prix, livrés chez vous en 24h.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-colors">
            Voir les Nouveautés
          </button>
        </div>
      </div>
    </section>
  );
}