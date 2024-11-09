'use server'
import { PrismaClient } from '@prisma/client'
import Home from './view/page'
const prisma = new PrismaClient()


export default async function Extract() {

const dataList = await prisma.flashcards.findMany()



return( <div>
    <Home data={dataList}></Home>
</div> )
}