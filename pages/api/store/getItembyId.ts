import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient()
export default async function getItem(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get request expected' })
  }
  const fav = await prisma.store.findMany({
    where: {
        productId: Number(req.query.id)
      },
    })
    res.json(fav)
    res.end()
  }