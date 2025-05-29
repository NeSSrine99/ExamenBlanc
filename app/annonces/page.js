'use client';


import React, { useEffect, useState } from 'react'
import AnnonceCard from '../components/AnnonceCard';

const page = () => {
    const [annonces, setAnnonces ] =useState([]);

    useEffect(() => {
    fetch("/api/annonces")
      .then((response) => response.json())
      .then((data) => setAnnonces(data));
  }, []);

  return (
    <main className="flex items-center justify-center   flex-wrap ">
      {annonces.map((annonce) => (
        <AnnonceCard key={annonce.id} {...annonce} />
      ))}
    </main>

  )
}

export default page