import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { selectCard, setCard } from '../../../features/card/cardSlice'
const useDetail = (props: any) => {
    const dispatch = useAppDispatch()
    const cardModel = useAppSelector(selectCard)
    const [cardDetail, setCardDetail] = useState()
    const loading = cardModel.loading
    useEffect(() => {
        dispatch({type: "card/getCardFormFireStore", payload: props.params.id})
    }, [])
    useEffect(() => {
        if(cardModel.currentCard){
            setCardDetail(cardModel.currentCard)
        }  
    }, [cardModel.currentCard])
  return {
    cardDetail,
    loading
  }
}

export default useDetail