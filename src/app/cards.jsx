'use client';
import React from 'react';
import {useState } from 'react'
import {useRouter} from "next/navigation";
let currentCards = []
let drawnCard
let cardData = { 
  id:0, prompt:"", answer:"", correct:0}

let difficulty
let newCardButton = true
let showAnswer = false
let checkAnswer = false

let playFlashcards = true
let studyFlashcards = false
let beginProgram = false

let cardDifficulty = []
let cardTiming = []



for(let i=0; i<10; i++){
cardDifficulty.push(1) 
}
for(let i=0; i<10; i++){
cardTiming.push(0) 
}



export default function Home(props){

  const router = useRouter();



    const cardPrompts = props.data.map((card, index) => {
      return <div key = {"prompt:"+index}>{card.prompt}</div>
    })
    const cardAnswer = props.data.map((card,index) =>{
      return <div key = {"answer:"+index}>{card.answer}</div>
    })

const [cardDisplay, setCardDisplay] = useState({
                   id:0, prompt:"", answer:"", correct:0});

                

  return (
    <div><text>

<p className="center"><button className="linkButtons" onClick={quizPageShow}>
          Play Flashcards
        </button>
        <button className="linkButtons" onClick={viewPageShow}>
          Study Flashcards
        </button></p>

        {!beginProgram}
      
        {playFlashcards && <div>

          <div className="center"><h3>To start Flashcards, click New Card</h3></div>

        
       {beginProgram && <div className="center"><div>{beginProgram}</div>

       <div>{showAnswer && <div>
        <p className="center">This is a series of 10 questions.
        <br></br>When you're ready -- click Reveal Card
        </p></div>}
      
      <div className="center">
      <p>Your Prompt is:</p>
      <h3>{cardDisplay["prompt"]}</h3></div>

      <p className="center">{showAnswer && <button className="answerButton" onClick={revealAnswer}>
        Reveal Answer
      </button>}</p>

      <h3>{cardDisplay["answer"]}</h3>
      </div></div>}

      <p className="center">{newCardButton && <button className="cardButton" onClick={chooseCard}>
        New Card!
      </button>}</p>

      {checkAnswer && <div>Did you answer correctly?</div>}
      {checkAnswer &&<p className = "center"><button className="checkButtons" onClick={rightAnswer}>
        Yes!
      </button>
      <button className="checkButtons" onClick={wrongAnswer}>
        No...
      </button></p>}</div>}

      {studyFlashcards && <div>

        <p><h3>Here you can see all the flashcards.</h3>
          <br></br>Unfortunately, it will not join the ten cards maximum in the game.</p>

          <p>There is a 10 card maximum for this page.</p>

        {beginProgram && <div className="center">
          <h3>Card Id: {cardDisplay["id"]}</h3>
          <h3>Prompt: {cardDisplay["prompt"]}</h3>
          <h3>Answer:{cardDisplay["answer"]}</h3>

          <p>This card is currently set at {cardDisplay["correct"]} difficulty.</p>
          <p>You may reassign this card's difficulty</p>
          <p><button className="checkButtons" onClick={() => easy(cardDisplay["id"])}>
            <label>Easy</label></button>
            <button className="checkButtons" onClick={() => medium(cardDisplay["id"])}>
            <label>Medium</label></button>
            <button className="checkButtons" onClick={() => hard(cardDisplay["id"])}>
            <label>Hard</label></button></p></div>}

          
        
        <div id="viewCards" className="center">
          <button className="viewCardButton" onClick={() => showCard(0)}><label>{cardPrompts[0]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(1)}><label>{cardPrompts[1]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(2)}><label>{cardPrompts[2]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(3)}><label>{cardPrompts[3]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(4)}><label>{cardPrompts[4]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(5)}><label>{cardPrompts[5]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(6)}><label>{cardPrompts[6]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(7)}><label>{cardPrompts[7]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(8)}><label>{cardPrompts[8]}</label></button>
          <button className="viewCardButton" onClick={() => showCard(9)}><label>{cardPrompts[9]}</label></button>
        </div>
        </div>}

     </text></div>
  )


function viewPageShow(){
  playFlashcards=false
  newCardButton = true
  beginProgram = false
  studyFlashcards=true
  router.refresh()
}

function quizPageShow(){
  playFlashcards=true
  beginProgram = false
  studyFlashcards=false
  router.refresh()
}

function chooseCard(){
    currentCards=[]
      for(let i=0; i<10; i++){
         if (cardTiming[i]==0){
          currentCards.push(i)
         }

      }

      drawnCard = currentCards[Math.floor(Math.random()*currentCards.length)]

      cardData["id"] = drawnCard
      cardData["prompt"] = cardPrompts[drawnCard]
      cardData["answer"] = ""
      setCardDisplay(cardData)
      newCardButton = false
      beginProgram = true
      showAnswer = true
      router.refresh()
}

function revealAnswer(){
  cardData["id"] = drawnCard
  cardData["prompt"] = cardPrompts[drawnCard]
  cardData["answer"] = cardAnswer[drawnCard]
  setCardDisplay(cardData)
  showAnswer = false
  checkAnswer = true
  router.refresh()
}

function rightAnswer(){
  difficulty = cardDifficulty[drawnCard]
  difficulty = difficulty-1;
  if (difficulty==0){
      difficulty=1;
  }
  reset()
}

function wrongAnswer(){
  difficulty = 5;
  reset()
}

function reset(){
  cardDifficulty[drawnCard] = difficulty

  for(let i=0; i<10; i++){
  if (cardTiming[i] != 0) {
    cardTiming[i]=cardTiming[i]-1
}}

if (difficulty == 1) {
  cardTiming[drawnCard] = 10;
}
if (difficulty == 2) {
  cardTiming[drawnCard] = 5;
}
if (difficulty == 3) {
  cardTiming[drawnCard] = 1;
}
checkAnswer = false
newCardButton = true
router.refresh()
}

function showCard(drawnCard){
  cardData["id"] = drawnCard
  cardData["prompt"] = cardPrompts[drawnCard]
  cardData["answer"] = cardAnswer[drawnCard]
  cardData["correct"] = cardDifficulty[drawnCard]
    setCardDisplay(cardData)
    beginProgram = true
    router.refresh()
}

function easy(drawnCard){
  cardDifficulty[drawnCard] = 1;
  cardTiming[drawnCard] = 10;
  cardData["correct"] = cardDifficulty[drawnCard]
    setCardDisplay(cardData)
  router.refresh()
}
function medium(drawnCard){
  cardDifficulty[drawnCard] = 2;
  cardTiming[drawnCard] = 5;
  cardData["correct"] = cardDifficulty[drawnCard]
    setCardDisplay(cardData)
  router.refresh()
}
function hard(drawnCard){
  cardDifficulty[drawnCard] = 3;
  cardTiming[drawnCard] = 1;
  cardData["correct"] = cardDifficulty[drawnCard]
    setCardDisplay(cardData)
  router.refresh()
}

}