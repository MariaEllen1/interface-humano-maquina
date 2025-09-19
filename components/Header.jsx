"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50 shadow-sm text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-800 text-white rounded-md flex items-center justify-center font-bold">N</div>
            <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">Escola Nobre</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:underline">Sobre</a>
            <a href="#missao" className="hover:underline">Missão</a>
            <a href="#estrutura" className="hover:underline">Estrutura</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#eventos" className="hover:underline">Eventos</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/visite" className="hidden sm:inline-block text-sm text-gray-700 hover:underline dark:text-gray-100">Visite-nos</Link>
            <Link href="/login" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm">Logar</Link>

            <button className="md:hidden p-2 rounded hover:bg-gray-100" onClick={() => setOpen(prev => !prev)} aria-label="menu">
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#sobre" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Sobre</a>
              <a href="#missao" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Missão</a>
              <a href="#estrutura" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Estrutura</a>
              <a href="#blog" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Blog</a>
              <a href="#eventos" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Eventos</a>
              <a href="#contato" onClick={() => setOpen(false)} className="block py-2 px-2 rounded hover:bg-gray-100">Contato</a>
              <Link href="/login" className="block py-2 px-2 mt-2 bg-blue-600 text-white text-center rounded">Logar</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}