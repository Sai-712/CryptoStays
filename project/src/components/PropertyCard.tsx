import React from 'react';
import { Star } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, location, price, rating, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img className="h-full w-full object-cover" src={image} alt={title} />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-rose-500">{price}</span>
          <button className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;