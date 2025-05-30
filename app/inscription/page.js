import React from "react";
import InscriptionForm from "../components/InscriptionForm";

export const metadata = {
  title: "Formulaire d'inscription | Mon Site",
  description:
    "Page de formulaire d'inscription pour créer un compte sur notre site.",
  keywords: ["inscription", "formulaire", "créer un compte", "mon site"],
  openGraph: {
    type: "website",
    url: "https://www.example.com/inscription",
    title: "Formulaire d'inscription | Mon Site",
    description:
      "Page de formulaire d'inscription pour créer un compte sur notre site.",
    images: [
      {
        url: "/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

const page = () => {
  return (
    <div className="lg:px-[120px] sm:px-[60px] px-4  py-[100px]">
      <InscriptionForm />
    </div>
  );
};

export default page;
