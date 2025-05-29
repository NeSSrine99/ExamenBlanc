'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav className='flex items-center justify-between px-4 py-3 bg-white shadow-md relative'>
      {/* Logo Section */}
      <div className='flex items-center gap-2'>
        <Image src="/images/logo3.png"  alt="logo"  width={80} height={50} className='mb-4' />
        <p className='text-secondary font-black text-xl'>Rent House</p>
      </div>

      {/* Desktop Links */}
      <div className='hidden md:flex items-center gap-6 font-medium text-secondary'>
        {['/accueil', '/annonces', '/publier', '/inscription'].map((path, index) => {
          const names = ['Accueil', 'Annonces', 'Publier', 'Inscription']
          return (
            <Link key={index} href={path} className='font-medium text-secondary  hover:text-primary hover:underline transition duration-300'>
              {names[index]}
            </Link>
          )
        })}
      </div>

      {/* Login Button */}
      <div className='hidden md:block'>
        <button className='bg-primary py-2 px-4 rounded-2xl text-white font-semibold hover:opacity-90 transition'>
          Login
        </button>
      </div>

      {/* Burger Menu Button */}
      <div className='md:hidden'>
        <button onClick={() => setOpenMenu(!openMenu)} className='text-3xl text-secondary'>
          <CgMenuRightAlt />
        </button>
      </div>

      {/* Mobile Menu*/}
      <div
        className={`
          absolute top-full left-0 w-full bg-white shadow-md px-4 py-6 flex flex-col items-start gap-4 md:hidden z-50 
          transition-all duration-500 ease-in-out transform origin-top
          ${openMenu ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}
        `}
      >
        <Link href="/accueil" className='font-medium text-secondary hover:text-primary hover:underline transition duration-300 w-full'>Accueil</Link>
        <Link href="/annonces" className='font-medium text-secondary  hover:text-primary hover:underline transition duration-300 w-full'>Annonces</Link>
        <Link href="/publier" className='font-medium text-secondary  hover:text-primary hover:underline transition duration-300 w-full'>Publier</Link>
        <Link href="/inscription" className='font-medium text-secondary  hover:text-primary hover:underline transition duration-300 w-full'>Inscription</Link>
        <button className='bg-primary py-2 px-4 rounded-2xl text-white font-semibold  hover:opacity-90 transition'>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
