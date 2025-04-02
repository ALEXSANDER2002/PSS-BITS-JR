"use client"

import Image from "next/image"
import { Trophy } from "lucide-react"

export default function Header() {
  const currentYear = new Date().getFullYear();
  
  return (
    <header className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-800 text-white shadow-xl sticky top-0 z-50 backdrop-blur-sm bg-opacity-90 border-b border-white/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl -translate-x-20 translate-y-20"></div>
      </div>
      
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Logo da Bits Jr */}
            <div className="h-14 flex items-center justify-center overflow-hidden group">
              <Image 
                src="/logocfundo.png" 
                alt="Logo Bits Jr" 
                width={55} 
                height={55} 
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
                Bits Jr
              </h1>
              <p className="text-xs text-blue-200 hidden sm:block font-medium">
                Empresa Júnior de Engenharia da Computação • {currentYear}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative group">
              <span className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></span>
              <a
                href="#"
                className="relative text-sm md:text-base font-medium py-2 px-4 rounded-lg bg-blue-800/40 hover:bg-blue-700/60 transition-all text-white flex items-center gap-2 border border-white/10 shadow-md"
              >
                <Trophy className="h-4 w-4 text-yellow-300" />
                <span>Resultado Final</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

