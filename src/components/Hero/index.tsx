'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/LucindaLogo.png'
import SalgadoFundo from '../../assets/salgados3.jpg'

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
      aria-label="Seção principal do site"
    >

      <div
        aria-hidden="true"
        className="fixed inset-0 bg-center bg-cover bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${SalgadoFundo.src})`,
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.6)',
          transform: 'translateZ(0)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white drop-shadow-lg">
        <Image
          src={Logo}
          alt="Logo Lucinda"
          width={200}
          height={200}
          className="mb-6"
        />
        <p className="text-2xl max-w-md font-bold">
          Bem-vindo ao Delicias da Lucinda! Delícias artesanais feitas com carinho para encantar seu paladar.
        </p>
      </div>
    </section>
  )
}
