import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = '5584996056478';
const mensagemPadrao = 'Olá! Gostaria de fazer um pedido.';

export const WhatsappIcon = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagemPadrao)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};
