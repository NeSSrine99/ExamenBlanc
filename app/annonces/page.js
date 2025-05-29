'use client';


import React, { useEffect, useState } from 'react'
import AnnonceCard from '../components/AnnonceCard';

const page = () => {
    const [annonces, setAnnonces ] =useState([]);

    useEffect(() => {
    fetch("/api/Annonces")
      .then((response) => response.json())
      .then((data) => setAnnonces(data));
  }, []);

  return (
    <main>
        <h1>nesrina</h1>
        <div>
            {annonces.map((annonce) => (
                <AnnonceCard key={annonce.id} {...annonce} />
            ))}
        </div>
    </main>
  )
}

export default page