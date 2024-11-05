import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">À propos</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Qui sommes-nous</a></li>
              <li><a href="#" className="hover:text-white">Nos magasins</a></li>
              <li><a href="#" className="hover:text-white">Recrutement</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Service client</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Livraison</a></li>
              <li><a href="#" className="hover:text-white">Retours</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Légal</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">CGV</a></li>
              <li><a href="#" className="hover:text-white">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white">Mentions légales</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white text-lg font-semibold mb-4">Newsletter</h5>
            <p className="mb-4">Restez informé de nos dernières offres</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
              />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2024 HighTech FR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}