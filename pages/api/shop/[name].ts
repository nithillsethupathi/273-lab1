import { NextApiRequest, NextApiResponse } from "next";


export default function getShopByName(req: NextApiRequest, res: NextApiResponse){
    res.json({byName: req.query.name, message: 'GetShopByName'})
}