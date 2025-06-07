'use client'
import { FaMapMarkerAlt } from 'react-icons/fa'

import React from 'react'

export default function Localizacao() {
  return (
    <section className="bg-[#3E2700] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Onde estamos
        </h2>
        <p className="text-lg sm:text-xl text-orange-100 mb-4">
          Visite a Delícias da Lucinda e experimente os melhores salgados da cidade!
        </p>

        <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.671235248387!2d-35.2580835!3d-5.901716399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b256563ac96d6f%3A0xc6ce6452c23d05fe!2sR.%20C%C3%A2mara%20Cascudo%2C%20720%20-%20Parque%20de%20Exposicoes%2C%20Parnamirim%20-%20RN%2C%2059146-460!5e0!3m2!1spt-BR!2sbr!4v1749259292599!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps/place/R.+C%C3%A2mara+Cascudo,+720+-+Parque+de+Exposicoes,+Parnamirim+-+RN,+59146-460"
          target="_blank"
          rel="noopener noreferrer"
          className="              bg-gradient-to-r from-orange-400 to-orange-600
              hover:from-orange-500 hover:to-orange-700
              text-white font-semibold py-3 px-8 rounded-full
              shadow-lg hover:shadow-xl transition duration-300
              ease-in-out transform cursor-pointer hover:-translate-y-1"
        >
          Ver no Google Maps
        </a>
      </div>
    </section>
  )
}
