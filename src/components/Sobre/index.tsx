'use client'

import React from 'react'
import Image from 'next/image'
import SalgadoImg from '../../assets/salgados.jpg'

export const Sobre = () => {
  return (
    <section
      aria-labelledby="sobre-title"
      className="bg-[#FFF3E0] text-[#5D3A00] min-h-screen flex flex-col justify-center py-16 px-6 sm:px-12 lg:px-24 font-serif"
    >
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h2
          id="sobre-title"
          className="text-4xl sm:text-5xl font-bold text-[#D2691E] mb-4"
        >
          Sobre Nós
        </h2>
        <p className="text-lg sm:text-xl text-[#7A4E1D]">
          Com amor e tradição, nossa família prepara salgados artesanais que aquecem o coração e encantam o paladar.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md h-64 sm:h-72 md:h-80">
          <Image
            src={SalgadoImg}
            alt="Variedade de salgados artesanais fresquinhos"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="md:w-1/2 text-[#5C3A00] space-y-6 text-justify text-base sm:text-lg leading-relaxed bg-[#FFF8F2] p-6 rounded-lg shadow-inner border border-[#F3E5AB]">
          <p>
            Desde a escolha cuidadosa dos ingredientes até o momento de servir, tudo é feito com dedicação e carinho, como nos tempos de antigamente.
          </p>
          <p>
            Perfeitos para festas, encontros de família ou aquele lanche da tarde especial, nossos salgadinhos são preparados com o mesmo amor que sua vó colocaria na cozinha.
          </p>
          <p>
            Qualidade, sabor e aconchego, é isso que oferecemos em cada mordida. Seja bem-vindo à nossa cozinha!
          </p>
        </div>
      </div>
    </section>
  )
}
