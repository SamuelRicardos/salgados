'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaUtensils } from 'react-icons/fa'

export const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  const alternarMenu = () => setMenuAberto(!menuAberto)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-2 text-orange-600 font-bold text-xl">
            <FaUtensils className="text-2xl" />
            <Link href="/" className="hover:text-orange-700 transition-colors">
              Delícia Salgados
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
              Início
            </Link>
            <Link href="/cardapio" className="text-gray-700 hover:text-orange-600 transition-colors">
              Cardápio
            </Link>
            <Link href="#produtos" className="text-gray-700 hover:text-orange-600 transition-colors">
              Produtos
            </Link>
            <Link href="#sobre-nos" className="text-gray-700 hover:text-orange-600 transition-colors">
              Quem somos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contato
            </Link>

            <Link
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors"
            >
              Pedir Agora
            </Link>
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-orange-600"
            onClick={alternarMenu}
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
          >
            {menuAberto ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="px-4 py-4 flex flex-col text-center gap-4">
            <Link href="/" className="text-gray-700 hover:text-orange-600" onClick={alternarMenu}>
              Início
            </Link>
            <Link href="/cardapio" className="text-gray-700 hover:text-orange-600" onClick={alternarMenu}>
              Cardápio
            </Link>
            <Link href="#sobre-nos" className="text-gray-700 hover:text-orange-600" onClick={alternarMenu}>
              Quem Somos
            </Link>
            <Link href="#produtos" className="text-gray-700 hover:text-orange-600" onClick={alternarMenu}>
              produtos
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-orange-600" onClick={alternarMenu}>
              Contato
            </Link>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-colors"
            >
              Pedir Agora
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
