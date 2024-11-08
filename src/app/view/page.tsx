import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function Home(){
    const cards = await prisma.flashcards.findMany();
    console.log(cards)
    const cardDisplay = cards.map((cards, index) => <li key  = {index}>{cards.prompt}</li>)

    return(
        <div>
        {cardDisplay}
        </div>
    );
}