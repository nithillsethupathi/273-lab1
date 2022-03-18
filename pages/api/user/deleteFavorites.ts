import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";
import { getMaxListeners } from "process";

const prisma = new PrismaClient();
export default async function createFavorites(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'DELETE'){
        res.status(500).json({message: 'DELETE request expected'});
    }
    const shopFav = req.body.id
    const shop = await prisma.favorites.delete({
        where: {
            id: String(shopFav)
        }
    })
    
    return res.status(200).json(shop);
}