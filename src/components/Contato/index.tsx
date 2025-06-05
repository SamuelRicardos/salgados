import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'

export const Contato = () => {
  return (
    <section
      id="contato"
      className="bg-[#FFF8F2] text-[#5D3A00] py-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#D2691E] mb-4">
          Entre em contato
        </h2>
        <p className="text-lg sm:text-xl text-[#7A4E1D] mb-8">
          Dúvidas, pedidos ou sugestões? Fale com a gente direto pelo WhatsApp!
        </p>

        <a
          href="https://wa.me/5584996056478"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            bg-green-500 hover:bg-green-600 text-white 
            font-semibold py-3 px-10 rounded-full shadow-md 
            transition duration-300 ease-in-out transform hover:-translate-y-1
          "
        >
          <span>Falar no WhatsApp</span>
          <IoLogoWhatsapp size={22} className="sm:w-5 sm:h-5 w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
