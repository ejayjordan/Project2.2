'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const router = useRouter();

export default async function Home() {
  const cards = await prisma.flashcards.findMany();
  console.log(cards)
  const cardDisplay = cards.map((cards, index) => <li key  = {index}>{cards.prompt}</li>)


function homePage(){
  let homePage = true;
  let viewCards = false;
  let addCards=false;
  router.refresh()
 }

  //function viewCards(){
    //let homePage = false;
    //let viewCards = true;
    //let addCards = false;
    //router.refresh()
  //}

  //function addCards(){
    //let homePage = false;
    //let viewCards = false;
    //let addCards = true;
    //router.refresh()
  //}

  return (
    <main>
    <li><button onClick={homePage}>
    Play Flashcards
    </button></li>

    <li><button>
    Change Difficulty
    </button></li>

    <li><button>
    Add Flashcards
    </button></li>

    {cardDisplay}
    
    </main>

  );
}
