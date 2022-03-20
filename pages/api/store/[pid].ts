import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient()
export default async function getItembyId(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get request expected' })
  }
  const {pid} = req.query
  const fav = await prisma.store.findMany({
    where: {
        productId: Number(pid)
      },
    })
    res.json(fav)
    res.end()
  }