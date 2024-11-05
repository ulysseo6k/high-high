import React, { ReactNode } from 'react';

interface CategoryCardProps {
  icon: ReactNode;
  name: string;
  count: string;
}

export function CategoryCard({ icon, name, count }: CategoryCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-gray-600 text-sm">{count}</p>
    </div>
  );
}