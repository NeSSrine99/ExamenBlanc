"use client";

import React from "react";
import Annonces from "../annonces/data";

const ButtonAlert = ({ annonceId }) => {
  const annonce = Annonces.find((a) => a.id === parseInt(annonceId, 10));
  const [showAlert, setShowAlert] = React.useState(false);

  if (!annonce) {
    return (
      <div className="text-center mt-10 text-red-500">Annonce non trouvée.</div>
    );
  }

  const handleOrder = () => {
    setShowAlert(true);

    // Optional: Automatically hide the alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="relative">
      {/* Alert Box */}
      {showAlert && (
        <div
          role="alert"
          className=" mb-4 rounded-md border border-gray-300 bg-white p-4 shadow-sm transition-opacity duration-300 ease-in-out"
        >
          <div className="flex items-start gap-4">
            {/* Success Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            {/* Alert Content */}
            <div className="flex-1">
              <strong className="font-medium text-gray-900">
                Commande confirmée
              </strong>
              <p className="mt-0.5 text-sm text-gray-700">
                Votre commande a été passée avec succès.
              </p>
            </div>

            {/* Dismiss Button */}
            <button
              className="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
              type="button"
              aria-label="Dismiss alert"
              onClick={() => setShowAlert(false)}
            >
              <span className="sr-only">Fermer</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Order Button */}
      <button
        onClick={handleOrder}
        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
      >
        Commander
      </button>
    </div>
  );
};

export default ButtonAlert;
