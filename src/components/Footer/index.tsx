import React from 'react'
import { BiPhone, BiMap } from 'react-icons/bi'
import { IoLogoWhatsapp } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className="bg-[#5D3A00] text-white pt-12 pb-6 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 mb-8">

        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Lucinda</h4>
          <p className="text-sm text-orange-100">
            Tradição, sabor e carinho em cada pedacinho. Salgados artesanais feitos com amor, como os da casa da vó.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Contato</h4>
          <ul className="space-y-2 text-sm text-orange-100">
            <li className="flex items-center gap-2">
              <BiPhone /> (84) 99605-6478
            </li>
            <li className="flex items-center gap-2">
              <IoLogoWhatsapp /> <a href="https://wa.me/5584996056478" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li className="flex items-center gap-2">
              <BiMap /> Rua Câmara Cascudo, 720, Parque de Exposições, Parnamirim - RN
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 text-orange-400">Horário de Atendimento</h4>
          <p className="text-sm text-orange-100">
            Segunda a Domingo: 08h - 22h<br />
          </p>
        </div>
      </div>

      <div className="border-t border-orange-300 pt-4 text-center text-sm text-orange-100">
        &copy; {new Date().getFullYear()} Lucinda. Todos os direitos reservados.
      </div>
    </footer>
  )
}
