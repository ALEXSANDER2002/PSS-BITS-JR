"use client"

import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo da Bits Jr */}
            <div className="h-12 flex items-center justify-center">
              <Image 
                src="/bits-branco.png" 
                alt="Logo Bits Jr" 
                width={55} 
                height={55} 
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                Bits Jr
              </h1>
              <p className="text-xs text-blue-200 hidden sm:block">Empresa Júnior de Engenharia da Computação</p>
            </div>
          </div>

          <div className="relative group">
            <a
              href="#"
              className="text-sm md:text-base font-medium py-1.5 px-2 rounded-md bg-blue-800/40 hover:bg-blue-700/60 transition-all text-white flex items-center"
            >
              <span>Processo Seletivo</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

