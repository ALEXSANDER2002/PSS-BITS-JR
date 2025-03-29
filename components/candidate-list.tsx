import type React from "react"
import { Users, User } from "lucide-react"
import WhatsAppButton from "./whatsapp-button"

interface CandidateListProps {
  titulo: string
  candidatos: string[]
  corFundo: string
  descricao?: string
  whatsappLink: string
  icone?: React.ReactNode
}

export default function CandidateList({
  titulo,
  candidatos,
  corFundo,
  descricao,
  whatsappLink,
  icone = <Users className="h-5 w-5" />,
}: CandidateListProps) {
  const areaName = titulo.split(" ").pop() || ""

  return (
    <div
      className={`rounded-xl p-4 sm:p-6 ${corFundo} border border-gray-100 shadow-sm transition-all hover:shadow-md backdrop-blur-sm relative overflow-hidden group`}
    >
      {/* Elemento decorativo */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 sm:mb-6">
        <div className="flex items-center">
          <div className="mr-3 bg-white p-2 rounded-full shadow-md">{icone}</div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-900">{titulo}</h2>
            {descricao && <p className="text-xs sm:text-sm text-gray-600">{descricao}</p>}
          </div>
        </div>

        <div className="flex justify-start">
          <WhatsAppButton texto={`Grupo de ${areaName}`} link={whatsappLink} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2">
        {candidatos.map((candidato, index) => (
          <div key={index} className="flex items-center p-1.5 sm:p-2 rounded-lg hover:bg-white/60 transition-colors">
            <User className="h-4 w-4 mr-2 text-blue-700 flex-shrink-0" />
            <span className="text-sm sm:text-base text-gray-800">{candidato}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

