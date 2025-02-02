import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Plus, User } from 'lucide-react';
import { useWallet } from '../context/WalletContext';

const Navbar = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Home className="h-8 w-8 text-rose-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">CryptoStays</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/explore"
              className={`flex items-center space-x-1 ${
                isActive('/explore') ? 'text-rose-500' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Search className="h-5 w-5" />
              <span>Explore</span>
            </Link>
            <Link
              to="/list-property"
              className={`flex items-center space-x-1 ${
                isActive('/list-property') ? 'text-rose-500' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Plus className="h-5 w-5" />
              <span>List Property</span>
            </Link>
            {account ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className={`flex items-center space-x-1 ${
                    isActive('/profile') ? 'text-rose-500' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 border border-rose-500 text-rose-500 rounded-md hover:bg-rose-50"
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;