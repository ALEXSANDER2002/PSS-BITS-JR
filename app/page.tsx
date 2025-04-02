"use client"

import Header from "@/components/header"
import CandidateList from "@/components/candidate-list"
import { Briefcase, Code, ShoppingBag, Lightbulb, Calendar, ArrowDown, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Dados estatísticos do processo seletivo
  const estatisticas = {
    gestao: {
      vagas: 8,
      inscritos: 12,
    },
    projetos: {
      vagas: 12,
      inscritos: 15,
    },
    comercial: {
      vagas: 4,
      inscritos: 8,
    },
    inovacao: {
      vagas: 8,
      inscritos: 10,
    },
    eventos: {
      vagas: 2,
      inscritos: 6,
    }
  };

  // Aqui forçamos o total, em caso de inconsistência nas somas individuais
  const TOTAL_VAGAS = 35;
  const TOTAL_INSCRITOS = 51;

  const candidatos = {
    gestao: [
      "Enzo Gabriel Diniz Bruno",
      "Júlio César Santos Ferreira",
      "Emile Cristine Carolino de Paula",
      "Rebeca da Silva Pereira",
      "Elson da Silva Sousa",
      "Nalanda Vitória Silva Melo",
      "Pedro Henrique de Sousa Pinto",
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
      "Carlos Eduardo Rocha Lopes",
      "Yasmim Magalhães Barreiros",
      "Frank Fábio Santos da Silva",
      "Luan Pereira Diniz",
    ],
    comercial: [
      "Reyane Thainah Lemos Barbosa",
      "Andrya Almeida Silva",
      "Michelly Carvalho da Silva",
      "Luiza Reis Alencar",
    ],
    inovacao: [
      "Walison de Sousa Costa",
      "Armando Brito Abdelnor Neto",
      "Mateus de Almada Andrade",
      "João Gabriel Lourenço Rodrigues",
      "Matheus Guimarães Silva",
      "Pedro Henrique Silva dos Santos",
      "Luiz Antônio de Souza Machado",
      "Felipe Mattei Ximenes",
    ],
    eventos: [
      "Emanuel Oliveira Santos",
      "Gustavo Bastos do Amaral",
    ],
  }

  // Cálculo de totais para o resumo - usamos as constantes definidas
  const totalVagas = TOTAL_VAGAS;
  const totalInscritos = TOTAL_INSCRITOS;
  const totalAprovados = Object.values(candidatos).reduce((acc, curr) => acc + curr.length, 0);
  const taxaAprovacaoGeral = ((totalAprovados / totalInscritos) * 100).toFixed(1);

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Resultado Final</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Parabéns a todos os candidatos aprovados para a Bits Jr!
            </p>
          </div>

          {/* Card de Resumo do Processo Seletivo */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-10 border border-blue-200 overflow-hidden relative">
            {/* Elementos decorativos */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/10 rounded-full blur-lg"></div>
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-indigo-400/10 rounded-full blur-lg"></div>
            
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <Trophy className="h-6 w-6 text-yellow-300" /> Resumo do Processo Seletivo
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 relative z-10">
              <div className="bg-white/15 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors hover:transform hover:scale-105 transition-transform duration-200">
                <p className="text-xs text-blue-100 uppercase tracking-wider mb-2">Total de Vagas</p>
                <p className="text-2xl font-bold flex items-end">
                  {totalVagas}
                  <span className="text-xs ml-1 text-blue-200 mb-1">vagas</span>
                </p>
              </div>
              
              <div className="bg-white/15 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors hover:transform hover:scale-105 transition-transform duration-200">
                <p className="text-xs text-blue-100 uppercase tracking-wider mb-2">Total de Inscritos</p>
                <p className="text-2xl font-bold flex items-end">
                  {totalInscritos}
                  <span className="text-xs ml-1 text-blue-200 mb-1">candidatos</span>
                </p>
              </div>
              
              <div className="bg-white/15 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors hover:transform hover:scale-105 transition-transform duration-200">
                <p className="text-xs text-blue-100 uppercase tracking-wider mb-2">Total de Aprovados</p>
                <p className="text-2xl font-bold flex items-end">
                  {totalAprovados}
                  <span className="text-xs ml-1 text-blue-200 mb-1">aprovados</span>
                </p>
              </div>
              
              <div className="bg-white/15 backdrop-blur-lg p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors hover:transform hover:scale-105 transition-transform duration-200">
                <p className="text-xs text-blue-100 uppercase tracking-wider mb-2">Taxa de Aprovação</p>
                <p className="text-2xl font-bold">{taxaAprovacaoGeral}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-8 mb-8 sm:mb-12 border border-gray-100">
            <p className="text-gray-700 mb-6 sm:mb-8 text-center text-base sm:text-lg font-medium">
              Confira abaixo a lista de aprovados por área.
            </p>

            <div className="flex items-center justify-center mb-8 animate-bounce">
              <ArrowDown className="h-6 w-6 text-blue-600" />
            </div>

            <div className="space-y-8 sm:space-y-12">
              <CandidateList
                titulo="Candidatos Aprovados para Gestão"
                candidatos={candidatos.gestao}
                corFundo="bg-blue-50"
                icone={<Briefcase className="h-5 w-5 text-blue-700" />}
                vagas={estatisticas.gestao.vagas}
                inscritos={estatisticas.gestao.inscritos}
              />

              <CandidateList
                titulo="Candidatos Aprovados para Projetos"
                candidatos={candidatos.projetos}
                corFundo="bg-indigo-50"
                icone={<Code className="h-5 w-5 text-indigo-700" />}
                vagas={estatisticas.projetos.vagas}
                inscritos={estatisticas.projetos.inscritos}
              />

              <CandidateList
                titulo="Candidatos Aprovados para Comercial"
                candidatos={candidatos.comercial}
                corFundo="bg-purple-50"
                icone={<ShoppingBag className="h-5 w-5 text-purple-700" />}
                vagas={estatisticas.comercial.vagas}
                inscritos={estatisticas.comercial.inscritos}
              />

              <CandidateList
                titulo="Candidatos Aprovados para Inovação"
                candidatos={candidatos.inovacao}
                corFundo="bg-cyan-50"
                descricao="(área de pesquisa de novas tecnologias, marketing digital e design)"
                icone={<Lightbulb className="h-5 w-5 text-cyan-700" />}
                vagas={estatisticas.inovacao.vagas}
                inscritos={estatisticas.inovacao.inscritos}
              />

              <CandidateList
                titulo="Candidatos Aprovados para Gestão de Eventos"
                candidatos={candidatos.eventos}
                corFundo="bg-teal-50"
                icone={<Calendar className="h-5 w-5 text-teal-700" />}
                vagas={estatisticas.eventos.vagas}
                inscritos={estatisticas.eventos.inscritos}
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

