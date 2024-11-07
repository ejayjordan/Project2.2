'use client'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
let homePage = true
//let viewCards = false
//let addCards = false

export default async function Home() {
  const cards = await prisma.flashcards.findMany();
  console.log(cards)
  const cardDisplay = cards.map((cards, index) => <li key  = {index}>{cards.prompt}</li> )


function homePageShow(){
  homePage = true;
  //let viewCards = false;
  //let addCards = false;
  window.location.reload();
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
    <li><button onClick={homePageShow}>
    Play Flashcards
    </button></li>

    <li><button>
    Change Difficulty
    </button></li>

    <li><button>
    Add Flashcards
    </button></li>

    { homePage && 
    <div>
      Click on the button to test your answer.

      {cardDisplay}
    </div>
    }
    
    </main>

    

  );
}
