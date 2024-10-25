'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
let cards: string[] = []
let drawCard: any = " "
const cardData = [" ", " ", " ", " "]
let nextPrompt = true
let showAnswer = false
let understoodButtons = false
let Names: any[] = []

export default function Flashcards() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter()

  useEffect(() => {
    fetch('/cards.json')
      .then((res) => res.json())
      .then((data) => {
       setData(data)
      })
  }, [])

  const [cardInfo, setCardInfo] = React.useState([" ", " "]);
  if(data != null)
    {Names = Object.getOwnPropertyNames(data)}

  return (
    <>
    <p>{nextPrompt && <button onClick={shuffleCards}>Next Prompt</button>}</p>

    {cardInfo[0]}
    
    <p>{showAnswer && <button onClick={revealAnswer}>Reveal Answer</button>}</p>

    

    <p>{understoodButtons && <button onClick={correctAnswer}>Correct</button>}
       {understoodButtons && <button onClick={incorrectAnswer}>Incorrect</button>}
    </p>
    </>
  )

  function shuffleCards(){
    if(data !=null){
      cards=[]
      for(let i=0; i<10; i++){
        if(data[Names[i]]["time"]==0){
          cards.push(String(i))
        }
      }

      drawCard = cards[Math.floor(Math.random()*cards.length)]

      cardData[0] = data[drawCard]["prompt"]
      cardData[1] = ""
      setCardInfo(cardData)
      nextPrompt = false
      showAnswer = true
      understoodButtons = false
      router.refresh()
    }
  }

  function revealAnswer(){
    if(data !=null){
      cardData[0] = data[drawCard]["prompt"]
      cardData[1] = data[drawCard]["answer"]
      setCardInfo(cardData)
      nextPrompt = false
      showAnswer = false
      understoodButtons = true
      router.refresh()
    }
  }

  function correctAnswer(){
    reset()
  }

  function incorrectAnswer(){
    reset()
  }

  function reset(){
    for(let i=0; i<22; i++){
    if(data[i]["time"] !=0) {
      data[i]["time"]=data[i]["time"]
    }}
    understoodButtons = false
    nextPrompt = true
    router.refresh()
  }


}