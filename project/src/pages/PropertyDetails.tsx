import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar } from 'lucide-react';
import { useWallet } from '../context/WalletContext';
import AuthModal from '../components/AuthModal';
import BookingConfirmation from '../components/BookingConfirmation';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isConnected } = useWallet();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingDates, setBookingDates] = useState({
    checkIn: '',
    checkOut: ''
  });

  // Mock data - In a real app, this would come from your smart contract
  const property = {
    title: "Luxury Villa with Ocean View",
    location: "Bali, Indonesia",
    price: "0.5 ETH",
    rating: 4.9,
    description: "Experience luxury living in this stunning ocean-view villa. Perfect for families or groups looking for a peaceful retreat.",
    amenities: ["Pool", "WiFi", "Kitchen", "Air Conditioning", "Beach Access"],
    images: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
    ]
  };

  const handleBooking = () => {
    if (!bookingDates.checkIn || !bookingDates.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    setShowAuthModal(true);
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    setShowConfirmation(true);
    // In a real app, you would send an SMS here
    console.log('Sending booking confirmation SMS...');
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate('/profile');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center mt-2 space-x-4">
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-gray-900">{property.rating}</span>
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5" />
                <span className="ml-1">{property.location}</span>
              </div>
            </div>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <img
              src={property.images[0]}
              alt={property.title}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About this property</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center text-gray-600">
                  <span className="mr-2">•</span>
                  {amenity}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <div className="sticky top-24">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">{property.price}</span>
                <span className="text-gray-600"> / night</span>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-in</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      value={bookingDates.checkIn}
                      onChange={(e) => setBookingDates({ ...bookingDates, checkIn: e.target.value })}
                      className="focus:ring-rose-500 focus:border-rose-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Check-out</label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      value={bookingDates.checkOut}
                      onChange={(e) => setBookingDates({ ...bookingDates, checkOut: e.target.value })}
                      className="focus:ring-rose-500 focus:border-rose-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <button
                  onClick={handleBooking}
                  className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isConnected
                      ? 'bg-rose-500 hover:bg-rose-600'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!isConnected}
                >
                  {isConnected ? 'Book Now' : 'Connect Wallet to Book'}
                </button>

                {!isConnected && (
                  <p className="text-sm text-gray-500 text-center">
                    Please connect your wallet to make a booking
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      <BookingConfirmation
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        bookingDetails={{
          propertyName: property.title,
          checkIn: bookingDates.checkIn,
          checkOut: bookingDates.checkOut,
          price: property.price
        }}
      />
    </div>
  );
};

export default PropertyDetails;