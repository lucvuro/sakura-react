import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { cardCollectionRef } from "../../../../../firebase-collections";
import {selectCard} from '../../../../../features/card/cardSlice'

const useListCards = () => {
  const dispatch = useAppDispatch()
  const cardModel = useAppSelector(selectCard)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onSnapshot(cardCollectionRef, (snapshot: any) => {
      const list = snapshot.docs.map((doc: any) => ({ id: doc.id, data: doc.data() }));
      dispatch({type: 'card/fetchListCard',payload: list})
      setLoading(false)
    });
    return () => unsubscribe();
  }, []);
  return {
    cardModel,
    loading
  };
};

export default useListCards;
