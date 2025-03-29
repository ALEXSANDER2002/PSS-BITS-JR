"use client"

import Header from "@/components/header"
import CandidateList from "@/components/candidate-list"
import { Briefcase, Code, ShoppingBag, Lightbulb, Calendar } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Adicione este comentário para instruir o usuário sobre como adicionar a logo
    console.log(
      "Para adicionar a logo da Bits Jr, substitua o placeholder no header.tsx por uma tag <Image> ou <img> com a imagem da logo.",
    )
  }, [])

  const candidatos = {
    gestao: [
      "Enzo Gabriel Diniz Bruno",
      "Júlio César Santos Ferreira",
      "Emile Cristine Carolino de Paula",
      "Rebeca da Silva Pereira",
      "Elson da Silva Sousa",
      "Nalanda Vitória Silva Melo",
      "Pedro Henrique de Sousa Pinto",
      "Carlos Eduardo Rocha Lopes",
      "Alana Brenda Pantoja dos Santos",
    ],
    projetos: [
      "Gabriel Martins da Costa",
      "Helton Pessoa Martins de Oliveira",
      "João Emanuel Oliveira Franco",
      "Adolfo Fernando Silva Araújo",
      "Lincoln Moreno Carvalho Sanches",
      "Alessandro Gabriel Rodrigues De Miranda",
      "Gustavo Ribeiro da Silva",
      "João Marcos Chaves da Luz",
    ],
    comercial: [
      "Reyane Thainah Lemos Barbosa",
      "Andrya Almeida Silva",
      "Michelly Carvalho da Silva",
      "Mateus Ronaldo Foro Costa",
      "Welington Bernardo Salazar Alves",
      "Luiza Reis Alencar",
      "Mariely Dauane Pereira Santos",
    ],
    inovacao: [
      "Walison de Sousa Costa",
      "Armando Brito Abdelnor Neto",
      "Mateus de Almada Andrade",
      "João Gabriel Lourenço Rodrigues",
      "Matheus Guimarães Silva",
      "Almerindo Cavalcante dos Santos Neto",
      "Pedro Henrique Silva dos Santos",
      "Luiz Antônio de Souza Machado",
      "Deivid Silva da Conceição",
      "Arthur Cobain Barreiros de Oliveira",
    ],
    eventos: [
      "Emanuel Oliveira Santos",
      "Gustavo Bastos do Amaral",
      "Yasmim Magalhães Barreiros",
      "Leonardo Farias da Silva",
      "Arthur Santos Gatti",
      "Elibelde Belisario Ramos",
    ],
  }

  // Links para os grupos de WhatsApp (substitua pelos links reais)
  const whatsappLinks = {
    gestao: "https://chat.whatsapp.com/JT3dbF0u1F30XpmrYrMdFU",
    projetos: "https://chat.whatsapp.com/L4nm8wI4qMf0gxZ8m8mcKC",
    comercial: "https://chat.whatsapp.com/FVMwwi0y4MCChKjQxPV5ZW",
    inovacao: "https://chat.whatsapp.com/FiVNzqsL1LRIMzBGddBYvG",
    eventos: "https://chat.whatsapp.com/HzaSQegqK7DJskgaHGQOWr",
  }

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <div className="container mx-auto px-4 py-6 sm:py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Resultado Preliminar</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Parabéns a todos os candidatos pré-selecionados para a Bits Jr!
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
            <p className="text-gray-700 mb-6 sm:mb-8 text-center text-sm sm:text-base">
              Confira abaixo a lista por área e entre no grupo de WhatsApp correspondente para receber mais informações
              sobre as próximas etapas.
            </p>

            <div className="space-y-4 sm:space-y-8">
              <CandidateList
                titulo="Candidatos Pré-selecionados para Gestão"
                candidatos={candidatos.gestao}
                corFundo="bg-blue-50"
                whatsappLink={whatsappLinks.gestao}
                icone={<Briefcase className="h-5 w-5 text-blue-700" />}
              />

              <CandidateList
                titulo="Candidatos Pré-selecionados para Projetos"
                candidatos={candidatos.projetos}
                corFundo="bg-indigo-50"
                whatsappLink={whatsappLinks.projetos}
                icone={<Code className="h-5 w-5 text-indigo-700" />}
              />

              <CandidateList
                titulo="Candidatos Pré-selecionados para Comercial"
                candidatos={candidatos.comercial}
                corFundo="bg-purple-50"
                whatsappLink={whatsappLinks.comercial}
                icone={<ShoppingBag className="h-5 w-5 text-purple-700" />}
              />

              <CandidateList
                titulo="Candidatos Pré-selecionados para Inovação"
                candidatos={candidatos.inovacao}
                corFundo="bg-cyan-50"
                descricao="(área de pesquisa de novas tecnologias, marketing digital e design)"
                whatsappLink={whatsappLinks.inovacao}
                icone={<Lightbulb className="h-5 w-5 text-cyan-700" />}
              />

              <CandidateList
                titulo="Candidatos Pré-selecionados para Gestão de Eventos"
                candidatos={candidatos.eventos}
                corFundo="bg-teal-50"
                whatsappLink={whatsappLinks.eventos}
                icone={<Calendar className="h-5 w-5 text-teal-700" />}
              />
            </div>
          </div>

          <div className="text-center text-gray-600 text-xs sm:text-sm bg-white/70 p-4 rounded-xl shadow-sm backdrop-blur-sm">
            <p className="font-medium">
              © {new Date().getFullYear()} Bits Jr - Empresa Júnior de Engenharia da Computação
            </p>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </main>
  )
}

