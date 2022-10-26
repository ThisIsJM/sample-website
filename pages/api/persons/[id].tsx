import { NextApiResponse } from "next"
import { firebaseCollectedData } from "../../../firebaseManager"

export default function handler({query: {id}} : any, res: NextApiResponse){

    const filtered = firebaseCollectedData.filter(person => person.id.toString() === id.toString())

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    } else{
      
        res.status(404).json({message: `Person with the id of ${id} is not found`})
    }
}