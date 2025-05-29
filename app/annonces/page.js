"use client";

import React from "react";
import AnnonceCard from "../components/AnnonceCard";
import Annonces from "./data";

const page = () => {
  return (
    <main className="flex items-center justify-center flex-wrap">
      {Annonces.map((annonce) => (
        <AnnonceCard key={annonce.id} {...annonce} />
      ))}
    </main>
  );
};

export default page;
