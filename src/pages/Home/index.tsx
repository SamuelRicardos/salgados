"use client";
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Produtos } from '@/components/Produtos';
import { Sobre } from '@/components/Sobre';
import React from 'react'

export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Sobre/>
        <Produtos/>
    </div>
  )
}
