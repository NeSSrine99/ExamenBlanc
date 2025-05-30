"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Le nom doit contenir au moins 4 caractères")
    .required("Le nom est requis"),
  email: Yup.string()
    .matches(/^\d{8}$/, "L'email doit contenir exactement 8 chiffres")
    .required("L'email est requis"),
  phone: Yup.string()
    .matches(/^\d{8}$/, "Le numéro doit contenir exactement 8 chiffres")
    .required("Le numéro de téléphone est requis"),
  message: Yup.string()
    .max(30, "Le message ne doit pas dépasser 30 caractères")
    .required("Le message est requis"),
});

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert("Message envoyé!\n" + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mb-8"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nom</label>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full border rounded px-3 py-2"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email (8 chiffres)</label>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full border rounded px-3 py-2"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">
            Téléphone (8 chiffres)
          </label>
          <input
            type="text"
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full border rounded px-3 py-2"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phone}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full border rounded px-3 py-2"
            maxLength={30}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-xl hover:bg-indigo-700 transition"
        >
          Envoyer
        </button>
      </form>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <img
          src="/images/logo2.png"
          alt="Adresse"
          className="w-20 h-20 mb-4 rounded-full object-cover"
        />
        <h2 className="text-xl font-bold mb-2">Nos informations</h2>
        <p className="mb-1">
          <span className="font-semibold">Adresse:</span> 123 Rue de
          l'Immobilier, Tunis
        </p>
        <p className="mb-1">
          <span className="font-semibold">Téléphone:</span> 22 334 556
        </p>
        <p className="mb-1">
          <span className="font-semibold">Email:</span> contact@immobilier.tn
        </p>
      </div>
    </main>
  );
};

export default ContactPage;
