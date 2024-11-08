import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function Home(){
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
}