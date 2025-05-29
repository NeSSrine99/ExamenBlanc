const Annonces = [
  {
    "id": 1,
    "image": "/images/property-1.jpg",
    "name": "Villa Moderne 1",
    "prix": "250,000",
    "category": "Villa"
  },
  {
    "id": 2,
    "image": "/images/property-2.jpg",
    "name": "Appartement Cosy 2",
    "prix": "270,000",
    "category": "Appartement"
  },
  {
    "id": 3,
    "image": "/images/property-3.jpg",
    "name": "Studio Meublé 3",
    "prix": "190,000",
    "category": "Studio"
  },
  {
    "id": 4,
    "image": "/images/property-4.jpg",
    "name": "Maison Familiale 4",
    "prix": "320,000",
    "category": "Maison"
  },
  {
    "id": 5,
    "image": "/images/property-5.jpg",
    "name": "Duplex Moderne 5",
    "prix": "410,000",
    "category": "Duplex"
  },
  {
    "id": 6,
    "image": "/images/property-1.jpg",
    "name": "Villa Moderne 6",
    "prix": "265,000",
    "category": "Villa"
  },
  {
    "id": 7,
    "image": "/images/property-2.jpg",
    "name": "Appartement Cosy 7",
    "prix": "280,000",
    "category": "Appartement"
  },
  {
    "id": 8,
    "image": "/images/property-3.jpg",
    "name": "Studio Meublé 8",
    "prix": "200,000",
    "category": "Studio"
  },
  {
    "id": 9,
    "image": "/images/property-4.jpg",
    "name": "Maison Familiale 9",
    "prix": "340,000",
    "category": "Maison"
  },
  {
    "id": 10,
    "image": "/images/property-5.jpg",
    "name": "Duplex Moderne 10",
    "prix": "430,000",
    "category": "Duplex"
  },
  {
    "id": 11,
    "image": "/images/property-1.jpg",
    "name": "Villa Moderne 11",
    "prix": "275,000",
    "category": "Villa"
  },
  {
    "id": 12,
    "image": "/images/property-2.jpg",
    "name": "Appartement Cosy 12",
    "prix": "290,000",
    "category": "Appartement"
  },
  {
    "id": 13,
    "image": "/images/property-3.jpg",
    "name": "Studio Meublé 13",
    "prix": "210,000",
    "category": "Studio"
  },
  {
    "id": 14,
    "image": "/images/property-4.jpg",
    "name": "Maison Familiale 14",
    "prix": "360,000",
    "category": "Maison"
  },
  {
    "id": 15,
    "image": "/images/property-5.jpg",
    "name": "Duplex Moderne 15",
    "prix": "450,000",
    "category": "Duplex"
  },
  {
    "id": 16,
    "image": "/images/property-1.jpg",
    "name": "Villa Moderne 16",
    "prix": "285,000",
    "category": "Villa"
  },
  {
    "id": 17,
    "image": "/images/property-2.jpg",
    "name": "Appartement Cosy 17",
    "prix": "300,000",
    "category": "Appartement"
  },
  {
    "id": 18,
    "image": "/images/property-3.jpg",
    "name": "Studio Meublé 18",
    "prix": "220,000",
    "category": "Studio"
  },
  {
    "id": 19,
    "image": "/images/property-4.jpg",
    "name": "Maison Familiale 19",
    "prix": "380,000",
    "category": "Maison"
  },
  {
    "id": 20,
    "image": "/images/property-5.jpg",
    "name": "Duplex Moderne 20",
    "prix": "470,000",
    "category": "Duplex"
  }
]

export async function GET(request) {
  return new Response(JSON.stringify(Annonces), { status: 200 });
}
