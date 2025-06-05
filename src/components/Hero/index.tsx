'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Salgado from '../../assets/salgados2.png'

export const Hero = () => {
  return (
    <section
      className="relative bg-[#FFF7ED] min-h-screen flex flex-col-reverse md:flex-row items-center justify-around px-4 sm:px-6 lg:px-8 py-16 overflow-hidden"
      aria-label="Seção principal do site"
    >

      <div className="absolute top-[-30%] right-[-30%] w-[60%] h-[200%] bg-[#F97316] z-0 hidden md:block rotate-[20deg] origin-top-right" />

      <div className="relative z-10 max-w-xl text-center md:text-left text-[#1F2937]">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight">
          Sabores que <span className="text-yellow-300">encantam</span> a cada mordida
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Salgados artesanais, crocantes por fora e irresistíveis por dentro.
          Ideal para festas, eventos ou aquele lanche especial.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/cardapio"
            className="bg-white hover:bg-yellow-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md"
          >
            Ver cardápio
          </Link>
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors shadow-md"
          >
            Pedir agora
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-xl h-64 md:h-80 z-10">
        <Image
          src={Salgado}
          alt="Salgados fresquinhos servidos em uma bandeja"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
