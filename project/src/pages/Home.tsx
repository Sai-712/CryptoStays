import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const Home = () => {
  const navigate = useNavigate();

  const featuredProperties = [
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
    }
  ];

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Rent your next stay</span>
                  <span className="block text-rose-500">with crypto</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover and book unique accommodations around the world using cryptocurrency. 
                  Secure, transparent, and decentralized.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <button
                    onClick={() => navigate('/explore')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 md:py-4 md:text-lg md:px-10"
                  >
                    Start Exploring
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury accommodation"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;