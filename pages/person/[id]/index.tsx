import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import { firebaseCollectedData } from '../../../firebaseManager'


export const getStaticProps : GetStaticProps = async(context:any) => {
   
    const person = firebaseCollectedData.filter(person => person.id.toString() === context.params.id.toString() )
    return {
        props:{
            person
        }
    }
    
}

export const getStaticPaths: GetStaticPaths = async () =>{

    const ids = firebaseCollectedData.map((person: any) => person.id)
    const paths = ids.map((id: { toString: () => any }) => ({params: {id: id.toString()}}))

    return{
        paths,
        fallback: true
    }
}

const person = ({person}:  InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <div>
    <img src = {person[0].profileImage}></img>
    <h1>{person[0].firstName} {person[0].lastName}</h1>
    <p>Age: {person[0].age}</p>
    <p>About Me: {person[0].aboutMe}</p>
    <Link href = '/'>Go Back</Link>
    </div>
  )
}

export default person;