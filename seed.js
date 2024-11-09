const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



const seed = async () => {
        const createMany = await prisma.flashcards.createMany({
            data: [
            { prompt: '2+2', answer: 'The answer is 4', correct: 1, time: 0},
            { prompt: '2x2', answer: 'The answer is 4', correct: 1, time: 0},
            { prompt: '2-2', answer: 'The answer is 0', correct: 1, time: 0},
            { prompt: '12-2', answer: 'The answer is 10', correct: 1, time: 0},
            { prompt: '12x2', answer: 'The answer is 24', correct: 1, time: 0},
            { prompt: '10-2', answer: 'The answer is 8', correct: 1, time: 0},
            { prompt: '10x2', answer: 'The answer is 20', correct: 1, time: 0},
            { prompt: '12-4', answer: 'The answer is 8', correct: 1, time: 0},
            { prompt: '12-6', answer: 'The answer is 6', correct: 1, time: 0},
            { prompt: '6x2', answer: 'The answer is 12', correct: 1, time: 0},
            ],
            skipDuplicates: true
        })
}

seed()