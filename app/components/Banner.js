import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
            Find your <strong className="text-primary">perfect home</strong>{" "}
            <br />
            with ease and confidence
          </h1>

          <p className="mt-6 text-base text-gray-700 sm:text-lg leading-relaxed">
            Browse a wide range of stunning houses, villas, and apartments for
            rent. Whether you're looking for comfort, luxury, or both — your
            dream home is just a few clicks away.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="inline-block rounded-md border border-primary bg-primary px-6 py-3 text-white font-semibold shadow hover:bg-secondary transition"
              href="/annonces"
            >
              Annonces
            </a>

            <a
              className="inline-block rounded-md border border-gray-300 px-6 py-3 text-gray-700 font-semibold shadow hover:bg-gray-100 transition"
              href="/publier"
            >
              Publier
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-auto">
          <Image
            src="/images/banner2.jpg"
            alt="Beautiful rental house"
            width={600}
            height={600}
            className="w-full md:min-w-[500px] h-auto object-cover rounded-lg shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
