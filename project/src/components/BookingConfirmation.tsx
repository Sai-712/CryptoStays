import React from 'react';
import { Check } from 'lucide-react';

interface BookingConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    propertyName: string;
    checkIn: string;
    checkOut: string;
    price: string;
  };
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ isOpen, onClose, bookingDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Booking Confirmed!</h3>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Your booking for {bookingDetails.propertyName} has been confirmed.
                A confirmation has been sent to your mobile phone.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-900">Booking Details</h4>
            <dl className="mt-2 space-y-2">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Check-in</dt>
                <dd className="text-sm font-medium text-gray-900">{bookingDetails.checkIn}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">Check-out</dt>
                <dd className="text-sm font-medium text-gray-900">{bookingDetails.checkOut}</dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <dt className="text-sm font-medium text-gray-900">Total Price</dt>
                <dd className="text-sm font-medium text-rose-500">{bookingDetails.price}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6">
            <button
              onClick={onClose}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              View My Bookings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;