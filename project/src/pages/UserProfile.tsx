import React from 'react';
import { useWallet } from '../context/WalletContext';
import { User, Home, Clock, Settings } from 'lucide-react';

const UserProfile = () => {
  const { account, isConnected } = useWallet();

  if (!isConnected) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Wallet to View Profile</h2>
          <p className="text-gray-600">Please connect your wallet to view your profile and bookings.</p>
        </div>
      </div>
    );
  }

  // Mock data - In a real app, this would come from your smart contract
  const userBookings = [
    {
      id: 1,
      property: "Luxury Villa with Ocean View",
      location: "Bali, Indonesia",
      checkIn: "2024-03-15",
      checkOut: "2024-03-20",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1600&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="inline-block p-3 rounded-full bg-rose-100 mb-4">
                <User className="h-8 w-8 text-rose-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">My Profile</h2>
              <p className="text-sm text-gray-500 break-all">{account}</p>
            </div>

            <div className="mt-6 space-y-2">
              <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 rounded-md hover:bg-rose-50 hover:text-rose-500">
                <Home className="h-5 w-5 mr-3" />
                My Properties
              </button>
              <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 rounded-md hover:bg-rose-50 hover:text-rose-500">
                <Clock className="h-5 w-5 mr-3" />
                Bookings
              </button>
              <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 rounded-md hover:bg-rose-50 hover:text-rose-500">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">My Bookings</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {userBookings.map((booking) => (
                <div key={booking.id} className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={booking.image}
                      alt={booking.property}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900">{booking.property}</h4>
                      <p className="text-gray-500">{booking.location}</p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span>{booking.checkIn}</span>
                        <span className="mx-2">→</span>
                        <span>{booking.checkOut}</span>
                      </div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;