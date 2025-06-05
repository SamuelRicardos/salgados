'use client'

import React from 'react'
import Image from 'next/image'
import SalgadoImg from '../../assets/Coxinhas.jpg'
import SalgadoImg2 from '../../assets/Pastel.jpg'
import SalgadoImg3 from '../../assets/SalgadoQueijo.jpg'
import SalgadoImg4 from '../../assets/bolinhoCalabresa.jpg'
import SalgadoImg5 from '../../assets/empada.jpg'
import SalgadoImg6 from '../../assets/kibe.jpg'
import SalgadoImg7 from '../../assets/salgadosVariados.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './swiper-custom.css'

const produtos = [
  {
    id: 1,
    imagem: SalgadoImg,
    alt: 'Coxinha tradicional',
    nome: 'Coxinha tradicional',
    descricao: 'Deliciosa coxinha recheada com frango temperado, crocante por fora e macia por dentro.',
  },
  {
    id: 2,
    imagem: SalgadoImg2,
    alt: 'Pastel crocante',
    nome: 'Pastel crocante',
    descricao: 'Pastel fresquinho e crocante, recheado com queijo e carne moída.',
  },
  {
    id: 3,
    imagem: SalgadoImg3,
    alt: 'Salgado de queijo',
    nome: 'Salgado de queijo',
    descricao: 'Salgado recheado com queijo derretido, perfeito para qualquer hora.',
  },
  {
    id: 4,
    imagem: SalgadoImg4,
    alt: 'Bolinho de calabresa',
    nome: 'Bolinho de calabresa',
    descricao: 'Explosão de sabor com calabresa temperada e massa crocante. Um clássico irresistível!',
  },
  {
    id: 5,
    imagem: SalgadoImg5,
    alt: 'Empada de frango',
    nome: 'Empada de frango',
    descricao: 'Frango cremoso e massa amanteigada que derrete na boca. Sabor que acolhe!',
  },
  {
    id: 6,
    imagem: SalgadoImg6,
    alt: 'Kibe tradicional',
    nome: 'Kibe tradicional',
    descricao: 'Receita caseira com toque especial: carne bem temperada e textura suculenta.',
  },
  {
    id: 7,
    imagem: SalgadoImg7,
    alt: 'Mais delícias esperando por você',
    nome: '...e muitas outras delícias!',
    descricao: 'Tem muito mais esperando por você: sabores variados, feitos com carinho e tradição. Venha descobrir!',
  }
]

export const Produtos = () => {
  return (
    <section id="produtos" className="bg-[#3E2700] text-white py-16 px-6 sm:px-12 lg:px-24">
      <header className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          Nossos Produtos
        </h2>
        <p className="text-lg sm:text-xl text-orange-100">
          Delícias feitas com carinho, para todos os momentos.
        </p>
      </header>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-[400px] sm:h-[500px] lg:h-[650px] rounded-lg overflow-hidden"
      >
        {produtos.map((produto) => (
          <SwiperSlide key={produto.id}>
            <div className="relative w-full h-full">
              <Image
                src={produto.imagem}
                alt={produto.alt}
                fill
                className="object-cover"
                priority
                quality={100}
              />

              <div
                className="
          absolute bottom-6 left-6 sm:right-6
          max-w-xs bg-black/50 backdrop-blur-md
          rounded-xl p-6 text-white drop-shadow-lg
          shadow-black/50 ring-1 ring-white/20
          flex flex-col space-y-4 animate-fadeInUp
        "
              >
                <h3 className="text-2xl font-bold tracking-wide drop-shadow-md">{produto.nome}</h3>
                <p className="text-sm leading-relaxed drop-shadow-sm">{produto.descricao}</p>

                {produto.id === 7 ? (
                  <button
                    type="button"
                    className="
              bg-gradient-to-r from-orange-400 to-orange-600
              hover:from-orange-500 hover:to-orange-700
              text-white font-semibold py-3 px-8 rounded-full
              shadow-lg hover:shadow-xl transition duration-300
              ease-in-out transform cursor-pointer hover:-translate-y-1
            "
                    onClick={() => alert('Veja o cardápio completo em breve!')}
                  >
                    Ver cardápio completo
                  </button>
                ) : (
                  <button
                    type="button"
                    className="
              bg-gradient-to-r from-orange-400 to-orange-600
              hover:from-orange-500 hover:to-orange-700
              text-white font-semibold py-3 px-8 rounded-full
              shadow-lg hover:shadow-xl transition duration-300
              ease-in-out transform cursor-pointer hover:-translate-y-1
            "
                    onClick={() =>
                      window.open(
                        `https://wa.me/5584996056478?text=Olá! Gostaria de comprar: ${encodeURIComponent(produto.nome)}`,
                        '_blank'
                      )
                    }

                  >
                    Comprar
                  </button>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
