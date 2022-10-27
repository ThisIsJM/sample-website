import { onSnapshot } from 'firebase/firestore'
import { GetServerSideProps, GetStaticPaths, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { q } from '../../../firebaseManager'


const Person = ({id}:  InferGetServerSidePropsType<typeof getServerSideProps> ) => {

  const [firebaseDataCollection, setFirebaseDataCollection] = useState<any[]>([])

  useEffect(() => {
  onSnapshot(q, (snapshot) => {
     setFirebaseDataCollection(snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() })
     ))
      //persons.map(person => console.log(person))
  })
  },[])

  const person = firebaseDataCollection.filter(person => person.id.toString() === id.toString())
  if(person[0] !== undefined)
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

export const getServerSideProps: GetServerSideProps = async(context : any) => {

    const id = context.params.id

    return{
        props:{id}
    }
}

export default Person;
