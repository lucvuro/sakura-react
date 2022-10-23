import React from 'react'
import { useNavigate } from 'react-router'

const useCard = () => {
    const navigate = useNavigate()
    const onClickCard = (id: string) => {
        navigate(`/detail/${id}`)
    }
  return {
    onClickCard
  }
}

export default useCard