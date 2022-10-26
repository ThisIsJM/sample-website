import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseCollectedData } from '../../../firebaseManager'

export default function handler(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json(firebaseCollectedData)
}