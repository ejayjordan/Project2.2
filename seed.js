const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const seed = async () => {
    const createMany = await prisma.cards.createMany({
        data: [
            {prompt: '', answer: '', correct: 1, time: 2},
            {prompt: '', answer: '', correct: 1, time: 2},
            {prompt: '', answer: '', correct: 1, time: 2},
        ]
    })
}