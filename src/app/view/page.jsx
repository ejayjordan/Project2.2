'use client'
import React from 'react';
import { useEffect, useState } from 'react' 

/*export default async function View(){
    const cards = await prisma.flashcards.findMany();
    console.log(cards)
    const promptDisplay = cards.map((cards, index) => <li key  = {index}>{cards.prompt}</li>)
    const answerDisplay = cards.map((cards, index) => <li key  = {index}>{cards.answer}</li>)

    return(
        <div>
        {promptDisplay}
        {answerDisplay}
        </div>
    );
}*/

export default function View(props){
    const data = props.data.map((cards, index) =>{
        return {cards} })

    console.log(data)

    const cardPrompts = props.data.map((cards, index) =>{
    return <div>{card.prompt}</div>})

    const cardAnswers = props.data.map((card, index) =>{
        return <div>{card.answer}</div>
      })

    const [displayCard, setDisplayCard] = useState({
        id:0, prompt:"", answer:""});

        console.log(cardPrompts)
        console.log(cardAnswers)

        return(
            <div>
                {cardAnswers[0]}
                <button className="viewAnswer" onClick={() => showCard(0)}>
                <label>{cardPrompts[0]}</label>
                <label>{cardAnswers[0]}</label>
                </button>
            </div>
        )
}