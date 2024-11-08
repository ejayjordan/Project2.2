import { PrismaClient } from "@prisma/client";
async function createCard(formData : FormData) {
    'use server';
    const prisma = new PrismaClient()
    await prisma.flashcards.create({
        data: {
            prompt: String(formData.get('promptInput')),
            answer: String((formData.get('answerInput'))),
            correct: 10,
            time: 0
        }
    })
}
    

export default async function Page( ) {

    return(<div>
        <form action={createCard}>
            <label>Prompt: <input type="text" name="promptInput" placeholder="Prompt" /></label>
            <label>Answer: <input type="text" name="answerInput" placeholder="Answer" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}