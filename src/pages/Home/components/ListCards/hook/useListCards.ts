import React, { useState } from 'react'

const useListCards = () => {
    const [listCards, setListCards] = useState([])
  return {
    listCards
  }
}

export default useListCards