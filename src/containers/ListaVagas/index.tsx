import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'
import * as S from './styles'

type VagaType = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaType[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 6000,
    salarioMax: 8000,
    requisitos: ['NodeJS', 'Express', 'MongoDB']
  },
  {
    id: '3',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filteredVagas, setFilteredVagas] = useState<VagaType[]>(vagas)

  const handleFilter = (filter: string) => {
    const filtered = vagas.filter((vaga) =>
      vaga.titulo.toLowerCase().includes(filter.toLowerCase())
    )
    setFilteredVagas(filtered)
  }

  return (
    <>
      <FormVagas onFilter={handleFilter} />
      <S.Vagas>
        {filteredVagas.map((vaga) => (
          <Vaga key={vaga.id} {...vaga} />
        ))}
      </S.Vagas>
    </>
  )
}

export default ListaVagas
