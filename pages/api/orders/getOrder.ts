import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '.prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient()
export default async function getOrder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get request expected' })
  }
  const fav = await prisma.orders.findMany({
    where: {
      orderNumber: parseInt(req.body.orderNumber)
    },
  })
  res.json(fav)
  res.end()
}