import React from 'react'

export const Contato = () => {
  return (
    <section
      id="contato"
      className="bg-[#FFF8F2] text-[#5D3A00] py-16 px-6 sm:px-12 lg:px-24"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#D2691E] mb-4">
          Fale conosco
        </h2>
        <p className="text-lg sm:text-xl text-[#7A4E1D]">
          Tem dúvidas, sugestões ou deseja fazer um pedido especial? Entre em contato com a gente!
        </p>
      </div>

      <form className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 space-y-6 border border-[#F3E5AB]">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-2 font-medium">Nome</label>
            <input
              type="text"
              id="nome"
              className="border border-[#E0CBAF] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Seu nome"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="border border-[#E0CBAF] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="seu@email.com"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="mensagem" className="mb-2 font-medium">Mensagem</label>
          <textarea
            id="mensagem"
            rows={5}
            className="border border-[#E0CBAF] rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
            placeholder="Escreva sua mensagem aqui..."
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
    </section>
  )
}
