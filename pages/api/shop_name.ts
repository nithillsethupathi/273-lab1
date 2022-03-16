import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
// export default async function checkAvailability(req: NextApiRequest, res: NextApiResponse){
//     if(req.method !== 'GET'){
//         res.status(500).json({message: 'get request expected'});
//     }
//     const shop = await prisma.shop.findUnique({
//         where: {
//             name: req.body.name
//         }
//     });
//     res.json(shop)
// }

export default async function createShop(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'POST'){
        res.status(500).json({message: 'Put request expected'});
    }
    const shopData = JSON.parse(JSON.stringify(req.body));
    const shop = await prisma.shop.create({
        data: shopData
    })
    
    return res.status(200).json(shop);
}