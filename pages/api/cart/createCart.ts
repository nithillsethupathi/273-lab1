import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
export default async function createCart(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST'){
        res.status(500).json({message: 'Post request expected'});
    }
    const shopFav = JSON.parse(JSON.stringify(req.body));
    const shop = await prisma.cart.create({
        data: shopFav
    })
    
    return res.status(200).json(shop);
}