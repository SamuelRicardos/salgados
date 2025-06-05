import React from 'react';
import { FaBoxOpen, FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '5584996056478';

const gerarLinkWhatsApp = (quantidade: number, valor: number) => {
  const mensagem = `Olá! Gostaria de encomendar a caixa com ${quantidade} unidades por R$ ${valor},00.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
};

export const Cardapio = () => {
  return (
    <section className="py-16 px-4 bg-white" id="cardapio">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-5">Cardápio</h2>
        <p className="text-lg sm:text-xl text-[#7A4E1D] mb-10">
          Escolha a caixa ideal para sua ocasião. Feitos com carinho, sempre fresquinhos!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {[{ qtd: 25, valor: 15, desc: "Ideal para lanches rápidos e reuniões pequenas." },
            { qtd: 50, valor: 30, desc: "Perfeito para aniversários, eventos e confraternizações." },
            { qtd: 100, valor: 60, desc: "Ideal para festas maiores ou revenda." }
          ].map(({ qtd, valor, desc }) => (
            <div
              key={qtd}
              className="border border-pink-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition flex flex-col h-full justify-between items-center ring-1 ring-pink-100"
            >
              <div className="flex flex-col items-center">
                <FaBoxOpen className="text-5xl text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  Caixa com {qtd} unidades
                </h3>
                <p className="text-gray-700 mb-4">{desc}</p>
              </div>
              <div className="flex flex-col items-center mt-auto">
                <span className="text-2xl font-bold text-green-600 mb-4">R$ {valor},00</span>
                <a
                  href={gerarLinkWhatsApp(qtd, valor)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  Pedir no WhatsApp
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};