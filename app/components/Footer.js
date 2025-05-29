import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" flex items-center justify-between py-2 px-4 bg-primary text-white">
      <p>Copiyright Renthouse © 2025 </p> 
      <p className="flex items-center gap-1"> <IoMdCall /><span>Contactez-nous</span> </p>
      <div className="flex items-center gap-4">
        <FaFacebookF size={20} />
        <FaInstagram size={20} />
        <AiFillTikTok size={20}/>
      </div>
    </footer>
  );
};

export default Footer;
