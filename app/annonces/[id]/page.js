import ButtonAlert from "@/app/components/ButtonAlert";
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
    <main className="flex flex-wrap items-start justify-start min-h-screen bg-gray-50 lg:px-[120px] sm:px-[60px] px-4  py-[100px] ">
      <img
        src={annonce.image}
        alt={annonce.name}
        className=" max-h-[600px] object-cover rounded-xl mb-6"
      />
      <article className="px-6">
        <span className="inline-block  text-gray-500  px-3 py-1 rounded-full mb-4">
          {annonce.category}
        </span>
        <h1 className="text-2xl font-bold mb-2">{annonce.name}</h1>

        <p className="text-lg text-primary font-bold mb-4">${annonce.prix}</p>
        <p className="text-gray-700 mb-6">{annonce.description}</p>
        <div className="flex gap-4 items-center">
          <ButtonAlert annonceId={annonceId} />
          <a href="/annonces" className="text-primary hover:underline">
            Back to annonces
          </a>
        </div>
      </article>
    </main>
  );
};

export default AnnonceDetailsPage;
