import React from "react";
import AnnonceCard from "../components/AnnonceCard";
import Annonces from "./data";

export const metadata = {
  title: "Annonces | Discover Beautiful Rental Houses  ",
  description:
    "Browse fascinating apartments, villas, and more with great views and affordable prices. Find your next rental home now!",
  keywords: [
    "rental homes",
    "apartments",
    "villas",
    "real estate",
    "house for rent",
  ],
};

const page = () => {
  return (
    <main className="flex items-center justify-center flex-wrap lg:gap-8 md:gap-6 gap-4 lg:px-[120px] sm:px-[60px] px-4  py-[100px]">
      {Annonces.map((annonce) => (
        <AnnonceCard key={annonce.id} {...annonce} />
      ))}
    </main>
  );
};

export default page;
