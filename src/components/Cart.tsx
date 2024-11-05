import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Commande validée ! Merci de votre achat.');
    dispatch({ type: 'CLEAR_CART' });
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">Panier</h2>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 h-full overflow-auto">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">Votre panier est vide</p>
          ) : showCheckout ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nom</label>
                <input required type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Numéro de carte</label>
                <input required pattern="[0-9]{16}" placeholder="1234567890123456" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date d'expiration</label>
                  <input required type="text" placeholder="MM/YY" pattern="(0[1-9]|1[0-2])\/([0-9]{2})" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">CVC</label>
                  <input required type="text" pattern="[0-9]{3}" placeholder="123" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                Payer {state.total.toFixed(2)}€
              </button>
            </form>
          ) : (
            <>
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">{item.price}€</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                      className="text-red-500"
                    >
                      <X size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-lg font-semibold mb-4">
                  <span>Total</span>
                  <span>{state.total.toFixed(2)}€</span>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Procéder au paiement
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}