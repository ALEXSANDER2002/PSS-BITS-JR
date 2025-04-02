import type React from "react"
import { Users, User, ChartBar, TrendingUp } from "lucide-react"

interface CandidateListProps {
  titulo: string
  candidatos: string[]
  corFundo: string
  descricao?: string
  icone?: React.ReactNode
  vagas?: number
  inscritos?: number
}

export default function CandidateList({
  titulo,
  candidatos,
  corFundo,
  descricao,
  icone = <Users className="h-5 w-5" />,
  vagas = 0,
  inscritos = 0,
}: CandidateListProps) {
  // Taxa de aprovação em porcentagem
  const taxaAprovacao = inscritos > 0 ? ((candidatos.length / inscritos) * 100).toFixed(1) : "0";
  // Competitividade (número de candidatos por vaga)
  const competitividade = vagas > 0 ? (inscritos / vagas).toFixed(1) : "N/A";
  
  // Determinar cor de destaque baseada no corFundo
  const getHighlightColor = () => {
    switch(corFundo) {
      case 'bg-blue-50': return 'from-blue-600 to-blue-400';
      case 'bg-indigo-50': return 'from-indigo-600 to-indigo-400';
      case 'bg-purple-50': return 'from-purple-600 to-purple-400';
      case 'bg-cyan-50': return 'from-cyan-600 to-cyan-400';
      case 'bg-teal-50': return 'from-teal-600 to-teal-400';
      default: return 'from-blue-600 to-blue-400';
    }
  };

  // Determinar cor de texto baseada no corFundo
  const getTextColor = () => {
    switch(corFundo) {
      case 'bg-blue-50': return 'text-blue-700';
      case 'bg-indigo-50': return 'text-indigo-700';
      case 'bg-purple-50': return 'text-purple-700';
      case 'bg-cyan-50': return 'text-cyan-700';
      case 'bg-teal-50': return 'text-teal-700';
      default: return 'text-blue-700';
    }
  };

  const highlightColor = getHighlightColor();
  const textColor = getTextColor();

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl group relative`}
    >
      {/* Cabeçalho com gradiente */}
      <div className={`bg-gradient-to-r ${highlightColor} p-4 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full transform -translate-x-10 translate-y-10"></div>
        
        <div className="flex items-center gap-3 relative z-10">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-md">{icone}</div>
          <div>
            <h2 className="text-xl font-bold">{titulo}</h2>
            {descricao && <p className="text-xs text-white/80 mt-1">{descricao}</p>}
          </div>
        </div>
      </div>
      
      {/* Estatísticas */}
      {(vagas > 0 || inscritos > 0) && (
        <div className="flex flex-wrap justify-between px-4 py-3 bg-white border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ChartBar className={`h-4 w-4 ${textColor}`} />
            <div>
              <p className="text-xs text-gray-500">Aprovados/Inscritos</p>
              <p className="text-sm font-medium text-gray-800">
                {candidatos.length}/{inscritos} 
                <span className={`text-xs ml-1 ${textColor}`}>({taxaAprovacao}%)</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <TrendingUp className={`h-4 w-4 ${textColor}`} />
            <div>
              <p className="text-xs text-gray-500">Candidatos/Vaga</p>
              <p className="text-sm font-medium text-gray-800">
                {competitividade} 
                <span className="text-xs ml-1 text-gray-600">{vagas > 0 ? `(${vagas} vagas)` : ""}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Lista de candidatos */}
      <div className={`${corFundo} p-4`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {candidatos.map((candidato, index) => (
            <div 
              key={index} 
              className="flex items-center p-2 rounded-lg bg-white/70 backdrop-blur-sm border border-gray-100 hover:bg-white hover:shadow-md transition-all"
            >
              <User className={`h-4 w-4 mr-2 flex-shrink-0 ${textColor}`} />
              <span className="text-sm text-gray-800 font-medium">{candidato}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

