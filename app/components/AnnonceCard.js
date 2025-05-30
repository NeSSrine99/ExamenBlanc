import React from "react";

const AnnonceCard = ({
  id,
  image = "/images/banner2.jpg",
  name = "Villa 1",
  prix = "1,200,000",
  category = "Villa",
}) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 w-full max-w-xs group transform  hover:scale-105">
      {/* الصورة */}
      <div className="h-64 w-full overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover " />
      </div>

      {/* المحتوى السفلي */}
      <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold truncate">{name}</h3>
          <span className="text-sm text-gray-200 bg-white/10 px-2 py-0.5 rounded">
            {category}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-md font-bold text-primary">${prix}</p>
          <a
            href={`/annonces/${id}`}
            className="text-sm px-3 py-1 rounded-lg bg-primary text-white hover:bg-primary/80 transition"
          >
            View More
          </a>
        </div>
      </div>
    </article>
  );
};

export default AnnonceCard;
