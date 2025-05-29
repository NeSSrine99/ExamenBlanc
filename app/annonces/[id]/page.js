import Annonces from "../data";

export async function generateMetadata({ params }) {
  const annonceId = parseInt(params.id, 10);
  const annonce = Annonces.find((a) => a.id === annonceId);
  return {
    title: annonce ? annonce.name : "Annonce Not Found",
    description: annonce
      ? `Details for ${annonce.name} - ${annonce.category}`
      : "Annonce not found",
  };
}

const AnnonceDetailsPage = async ({ params }) => {
  const annonceId = parseInt(params.id, 10);
  const annonce = Annonces.find((a) => a.id === annonceId);

  if (!annonce) {
    return (
      <div className="text-center mt-10 text-red-500">Annonce not found.</div>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <article className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <img
          src={annonce.image}
          alt={annonce.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-2xl font-bold mb-2">{annonce.name}</h1>
        <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-4">
          {annonce.category}
        </span>
        <p className="text-lg text-indigo-600 font-bold mb-4">
          ${annonce.prix}
        </p>
        <p className="text-gray-700 mb-6">
          Luxury {annonce.category.toLowerCase()} located in a prime area. More
          details can be added here.
        </p>
        <a href="/annonces" className="text-primary hover:underline">
          &larr; Back to annonces
        </a>
      </article>
    </main>
  );
};

export default AnnonceDetailsPage;
