import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const properties = [
    {
      id: 1,
      title: "Luxury Villa with Ocean View",
      location: "Bali, Indonesia",
      price: "0.5 ETH",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 2,
      title: "Modern Downtown Loft",
      location: "New York, USA",
      price: "0.3 ETH",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 3,
      title: "Beachfront Paradise",
      location: "Maldives",
      price: "0.8 ETH",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      location: "Swiss Alps",
      price: "0.6 ETH",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 5,
      title: "City View Apartment",
      location: "Tokyo, Japan",
      price: "0.4 ETH",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: 6,
      title: "Desert Oasis Villa",
      location: "Dubai, UAE",
      price: "1.2 ETH",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by location or property name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Explore;