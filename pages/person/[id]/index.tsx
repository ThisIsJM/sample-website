import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import { data } from '../../../data'
const person = ({person}:  InferGetStaticPropsType<typeof getStaticProps> ) => {
    console.log(person)
  return (
    <>
    <img src = {person[0].profileImage}></img>
    <h1>{person[0].firstName} {person[0].lastName}</h1>
    <p>Age: {person[0].age}</p>
    <p>About Me: {person[0].aboutMe}</p>
    <Link href = '/'>Go Back</Link>
    </>
  )
}


export const getStaticProps : GetStaticProps = async(context:any) => {
    // const  res = await fetch(`${server}/api/persons/${context.params.id}`)
    // const person = await res.json()
    //const person = await data()
    const person = data.filter(person => person.userId.toString() === context.params.id.toString() )
    
    return {
        props:{
            person
        }
    }
    
}

export const getStaticPaths: GetStaticPaths = async () =>{
    // const res = await fetch(`${server}/api/persons`)
    // const persons = await res.json()

    const ids = data.map((person: any) => person.userId)
    const paths = ids.map((userId: { toString: () => any }) => ({params: {id: userId.toString()}}))

    return{
        paths,
        fallback: false
    }
}

export default person;