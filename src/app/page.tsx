'use server'
import { PrismaClient } from '@prisma/client'
import View from './view/page'

const prisma = new PrismaClient()

export default async function Home() {
  const cards = await prisma.flashcards.findMany()

  const cardList = cards.map((cards) => 
    <li>
        {cards.prompt}
    </li> 
)

  return (
    <div>
      Dog, Idk what to put here :|
      {cardList}
    </div>
  );
}
