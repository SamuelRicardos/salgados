"use client";

import { Cardapio } from '@/components/Cardapio';
import { Contato } from '@/components/Contato';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Produtos } from '@/components/Produtos';
import { Sobre } from '@/components/Sobre';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Sobre />
      <Produtos />
      <Cardapio/>
      <Contato />
      <Footer />
    </div>
  );
}
