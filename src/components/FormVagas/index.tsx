import React, { useState, FormEvent } from 'react'
import * as S from './styles'

type Props = {
  onFilter: (filter: string) => void
}

const FormVagas = ({ onFilter }: Props) => {
  const [filter, setFilter] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onFilter(filter.toLocaleLowerCase())
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Campo
        placeholder="Filtrar vagas"
        onChange={(e) => setFilter(e.target.value)}
        type="search"
      />
      <S.BtnPesquisar type="submit">Filtrar</S.BtnPesquisar>
    </S.Form>
  )
}

export default FormVagas
