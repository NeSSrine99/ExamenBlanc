"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 lg:flex-row lg:gap-16">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full mb-8"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-secondary">Nom</label>
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
          <label className="block mb-1 font-semibold text-secondary">
            Email (8 chiffres)
          </label>
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
          <label className="block mb-1 font-semibold text-secondary">
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
          <label className="block mb-1 font-semibold text-secondary">
            Message
          </label>
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
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full flex flex-col items-center border border-gray-100">
        <img
          src="/images/logo3.png"
          alt="Adresse"
          className="w-20 h-20 mb-4 rounded-full object-cover border-4 border-blue-100 shadow-md"
        />
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Nos informations
        </h2>
        <div className="space-y-3 text-center">
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <CiLocationOn color="red" size={18} /> Adresse:
            </span>
            <span className="text-gray-700">
              123 Rue de l'Immobilier, Tunis
            </span>
          </p>
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <MdOutlineLocalPhone color="red" size={18} /> Téléphone:
            </span>
            <span className="text-gray-700">22 334 556</span>
          </p>
          <p className="flex items-start justify-center gap-2">
            <span className="font-semibold text-gray-600 flex items-center gap-1">
              <IoMailOutline color="red" size={18} /> Email:
            </span>
            <span className="text-blue-600 hover:underline">
              contact@immobilier.tn
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
