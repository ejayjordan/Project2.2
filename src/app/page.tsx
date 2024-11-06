'use client'
import React from 'react'
import { useRouter } from 'next/navigation'



export default function Home() {
  const router = useRouter();

  function homePage(){
    let homePage = true;
    let viewCards = false;
    let addCards=false;
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
    <>
    <li><button onClick={homePage}>
    Play Flashcards
    </button></li>

    <li><button onClick={viewCards}>
    Change Difficulty
    </button></li>

    <li><button onClick={addCards}>
    Add Flashcards
    </button></li>
    
    </>

  );
}
