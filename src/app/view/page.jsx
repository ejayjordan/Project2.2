'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
let readyCards = []
let currentCard
let DataHotel = { 
  id:0, prompt:"", answer:"", correct:0}

let level
let showAnswerButton = false
let showCheckButtons = false

let cardDifficulty = []
let cardSchedule = []



for(let i=0; i<data.length; i++){
  cardDifficulty.push(1) 
}
for(let i=0; i<data.length; i++){
  cardSchedule.push(0) 
}



export default function Home(props){

  const router = useRouter();



    const cardPrompts = props.data.map((card, index) => <div key = {index}>{card.prompt}</div>)
    const cardAnswers = props.data.map((card,index) => <div key = {index}>{card.answer}</div>)


    const [cardDisplay, setCardDisplay] = useState({
                   id:0, prompt:"", answer:"", correct:0});

                

  return (
       <div>{showAnswerButton && <div><p className="center">Think about the answer. </p>
        <p className="center">When you're ready click the button!</p></div>}
      {showCheckButtons && <div>Good job! Now mark your answer as right or wrong!</div>}
      <br /> <br />

    

      <div className="center">Your card is number {cardDisplay["id"]}: </div>
      <div className="center">{cardDisplay["prompt"]}</div>
      <br /> <br />

      <p className="center">{showAnswerButton && <button className="answerButton" onClick={showAnswer}>
        Show Answer
      </button>}</p>

      {cardDisplay["answer"]}
      <br />

      <p className="center">{showCardButton && <button className="cardButton" onClick={chooseCard}>
        New Card!
      </button>}</p>

      <br />

      {showCheckButtons &&<p className = "center"><button className="checkButtons" onClick={rightAnswer}>
        Correct!
      </button>
      <button className="checkButtons" onClick={wrongAnswer}>
        Wrong...
      </button></p>}</div>);



function chooseCard(){
    readyCards=[]
      for(let i=0; i<22; i++){
         if (cardSchedule[i]==0){
          readyCards.push(i)
         }

      }

      currentCard = readyCards[Math.floor(Math.random()*readyCards.length)]

      console.log(currentCard)
      DataHotel["id"] = currentCard
      DataHotel["prompt"] = cardPrompts[currentCard]
      DataHotel["answer"] = cardPrompts[currentCard]
      setCardDisplay(DataHotel)
      showAnswerButton = true
      router.refresh()
}

function showAnswer(){
  DataHotel["id"] = currentCard
  DataHotel["prompt"] = cardPrompts[currentCard]
  DataHotel["Answer"] = cardAnswers[currentCard]
  setCardDisplay(DataHotel)
  showAnswerButton = false
  showCheckButtons = true
  router.refresh()
}

function rightAnswer(){
  level = cardDifficulty[currentCard]
  level = level-1;
  if (level==0){
      level=1;
  }
  reset()
}

function wrongAnswer(){
  level = 3;
  reset()
}

function reset(){
  cardDifficulty[currentCard] = level

  for(let i=0; i<data.length; i++){
  if (cardSchedule[i] != 0) {
    cardSchedule[i]=cardSchedule[i]-1
}}

if (level == 1) {
  cardSchedule[currentCard] = 10;
}
if (level == 2) {
  cardSchedule[currentCard] = 5;
}
if (level == 3) {
  cardSchedule[currentCard] = 1;
}

showCheckButtons = false
router.refresh()
console.log(data)
}

}