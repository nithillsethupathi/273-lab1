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
  const fav = await prisma.orders.findFirst({
    where: {
      email: String(session?.user?.email),
    },
  })
  res.json(fav)
  res.end()
}