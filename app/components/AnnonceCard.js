import React from "react";

const AnnonceCard = ({
  id,
  image = "/images/banner2.jpg",
  name = "Villa 1",
  prix = "1,200,000",
  category = "Villa",
}) => {
  return (
    <article className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white w-full max-w-xs">
      <div className="relative h-56 w-full">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          Luxury {category.toLowerCase()} located in a prime area.
        </p>
        <p className="mt-3 text-indigo-600 font-bold text-md">${prix}</p>
        <a
          href={`/annonces/${id}`}
          className="mt-4 w-full inline-block bg-primary text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition text-center"
        >
          View Details
        </a>
      </div>
    </article>
  );
};

export default AnnonceCard;
