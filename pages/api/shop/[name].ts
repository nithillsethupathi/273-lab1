import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();
export default async function getShopByName(req: NextApiRequest, res: NextApiResponse){
            if(req.method !== 'GET'){
                res.status(500).json({message: 'get request expected'});
            }
            const shopName = await prisma.shop.findUnique({
                where: {
                    name: req.query.name
                }
            });
            return res.json(shopName)
}