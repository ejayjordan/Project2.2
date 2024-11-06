'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { PrismaClient } from "@prisma/client"

export default async function Home() {
  const prisma = new PrismaClient()
  let cards = await prisma.video.findMany();
  console.log(cards)
  const router = useRouter();

  function homePage(){
    let homePage = true;
    let viewCards = false;
    let addCards=false;
    const cardDisplay = cards.map((cards, index) => <li key  = {index}>{cards.name}</li>)
    router.refresh()
  }

  function viewCards(){
    let homePage = false;
    let viewCards = true;
    let addCards = false;
    router.refresh()
  }

  function addCards(){
    let homePage = false;
    let viewCards = false;
    let addCards = true;
    router.refresh()
  }

  return (
    <main>
    <li><button onClick={homePage}>
    Play Flashcards
    </button></li>

    <li><button onClick={viewCards}>
    Change Difficulty
    </button></li>

    <li><button onClick={addCards}>
    Add Flashcards
    </button></li>

    {cardDisplay}
    
    </main>

  );
}
