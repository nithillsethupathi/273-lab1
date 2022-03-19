import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";
import { getMaxListeners } from "process";

const prisma = new PrismaClient();
export default async function deleteAll(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'DELETE'){
        res.status(500).json({message: 'DELETE request expected'});
    }
    const shopFav = req.body.email
    const shop = await prisma.cart.deleteMany({
        where: {
            email: String(shopFav)
        }
    })
    
    return res.status(200).json(shop);
}