import { Button } from 'antd'
import { addDoc } from 'firebase/firestore'
import React from 'react'
import db from '../db.json'
import { cardCollectionRef } from '../firebase-collections'
const AddCards = () => {
  const readFile = async () => {
      db.card.forEach((item) => {
        addDoc(cardCollectionRef, item)
      })
  }
  return (
    <Button onClick={() => readFile()}>Add</Button>
  )
}

export default AddCards