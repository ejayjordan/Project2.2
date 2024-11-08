'use server'
import { PrismaClient } from '@prisma/client'
import View from './view/page'

const prisma = new PrismaClient()

export default async function Home() {

  const cardList = await prisma.flashcards.findMany()
  return (
    <div>
      Dog, Idk what to put here :|
      <View data={cardList}></View>
    </div>
  );
}
