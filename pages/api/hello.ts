import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
export default async function checkAvailability(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET'){
        res.status(500).json({message: 'get request expected'});
    }
    const customer = await prisma.user.findMany();
    res.json(customer)
}