'use client'

import React from 'react'
import Link from 'next/link'
import { BiBookOpen } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'
import SalgadoFundo from '../../assets/salgados3.jpg'

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
      aria-label="Seção principal do site"
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-center bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${SalgadoFundo.src})`,
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7)',
          transform: 'translateZ(0)',
        }}
      />

      <div className="relative z-10 max-w-xl text-center md:text-left text-white drop-shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Sabores que <span className="text-yellow-300">encantam</span> a cada mordida
        </h1>
        <p className="mt-4 text-lg">
          Salgados artesanais, crocantes por fora e irresistíveis por dentro.
          Ideal para festas, eventos ou aquele lanche especial.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/cardapio"
            className="bg-white hover:bg-yellow-100 text-orange-600 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold transition-colors shadow-md flex items-center gap-2 justify-center"
          >
            Ver cardápio
            <BiBookOpen size={18} className="sm:w-5 sm:h-5 w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold transition-colors shadow-md flex items-center gap-2 justify-center"
          >
            Pedir agora
            <IoLogoWhatsapp size={18} className="sm:w-5 sm:h-5 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
