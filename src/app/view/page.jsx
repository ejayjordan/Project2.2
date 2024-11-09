'use client'
import React from 'react';
import { useEffect, useState } from 'react'

let currentCard
let difficulty
let readyCards = []
let cardData = { id:0, prompt:"", answer:"" }

export default function View(){
    const data = flashcards.map((data, index) => <li key={index}>{data}</li>);

    console.log(data)

    const cardPrompts = data.map((flashcards, index) =>{
    return <div>{flashcards.prompt}</div>})

    const cardAnswers = data.map((flashcards, index) =>{
        return <div>{flashcards.answer}</div>
      })

    const [displayCard, setDisplayCard] = useState({
        id:0, prompt:"", answer:""});

        console.log(cardPrompts)
        console.log(cardAnswers)

        return(
            <div>
                <button className="viewAnswer" onClick={() => showCard(0)}>
                <label>{cardPrompts[0]}</label>
                </button>
            </div>
        )
        
    function showCard(currentCard){
    if(data != null){
      cardData["id"] = currentCard
      cardData["prompt"] = data[currentCard]["prompt"]
      cardData["answer"] = data[currentCard]["answer"]
      setDisplayCard(cardData)
      window.location.reload()
    }
  }

  function randomCard(){
    if(data != null){
      readyCards=[]
        for(let i=0; i<data.length; i++){
           if (data[i]["time"]==0){
            readyCards.push(i)
           }
  
        }
  
        currentCard = readyCards[Math.floor(Math.random()*readyCards.length)]
  
        console.log(currentCard)
        cardData["id"] = currentCard
        cardData["prompt"] = data[currentCard]["prompt"]
        cardData["answer"] = data[currentCard]["answer"]
        setCardDisplay(cardData)
        window.location.reload()
  }}
  

  function easy(currentCard){
    data[currentCard]["correct"] = 1
    data[currentCard]["time"] = 10;
  }
  function medium(currentCard){
    data[currentCard]["correct"] = 2
    data[currentCard]["time"] = 5;
  }
  function hard(currentCard){
    data[currentCard]["correct"] = 3
    data[currentCard]["time"] = 1;
  }

  function Correct(){
    difficulty = data[currentCard]["correct"]
    difficulty = difficulty-1;
    if (difficulty==0){
        difficulty=10;
    }
    reset()
  }
  
  function Incorrect(){
    difficulty = 3;
    reset()
  }
}


