import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { cardCollectionRef } from "../../../../../firebase-collections";

const useListCards = () => {
  const [listCards, setListCards] = useState<any>([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(cardCollectionRef, (snapshot) => {
      console.log(snapshot)
      setListCards(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
    return () => unsubscribe();
  }, []);
  return {
    listCards,
  };
};

export default useListCards;
