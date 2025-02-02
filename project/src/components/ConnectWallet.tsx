import React from 'react';
import { X } from 'lucide-react';

interface ConnectWalletProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const wallets = [
    {
      name: 'MetaMask',
      icon: '🦊',
      description: 'Connect to your MetaMask Wallet'
    },
    {
      name: 'WalletConnect',
      icon: '🔗',
      description: 'Scan with WalletConnect to connect'
    },
    {
      name: 'Coinbase Wallet',
      icon: '📱',
      description: 'Connect to your Coinbase Wallet'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 w-full text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Connect your wallet
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Connect with one of our available wallet providers or create a new one
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {wallets.map((wallet) => (
              <button
                key={wallet.name}
                className="flex w-full items-center justify-between rounded-lg border border-gray-300 p-4 hover:border-rose-500 hover:shadow-md transition-all"
              >
                <div className="flex items-center">
                  <span className="text-2xl">{wallet.icon}</span>
                  <div className="ml-4 text-left">
                    <p className="text-sm font-medium text-gray-900">{wallet.name}</p>
                    <p className="text-sm text-gray-500">{wallet.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;