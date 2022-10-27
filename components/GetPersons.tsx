import { onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { q } from '../firebaseManager';
import PersonList from './PersonList';


const GetPersons = () => {

    const [firebaseDataCollection, setFirebaseDataCollection] = useState<any[]>([])

    useEffect(() => {
    onSnapshot(q, (snapshot) => {
       setFirebaseDataCollection(snapshot.docs.map(
            (doc) => ({ id: doc.id, ...doc.data() })
       ))
        //persons.map(person => console.log(person))
    })
    },[])

    console.log(firebaseDataCollection);
  return (
    <PersonList persons={firebaseDataCollection}/>
  )
}

export default GetPersons