import { DocumentData, onSnapshot, query, Query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { colRef, q } from '../firebaseManager';
import PersonList from './PersonList';


const GetPersons = (props : {query?: Query<DocumentData>}) => {

    const [firebaseDataCollection, setFirebaseDataCollection] = useState<any[]>([])
    const [queryInput, setQuery] = useState<Query<DocumentData>>(query(colRef))

    useEffect(() =>{
        props.query !== undefined && setQuery(props.query)   
    },[])


    useEffect(() => {
      onSnapshot(queryInput, (snapshot) => {
        setFirebaseDataCollection(snapshot.docs.map(
              (doc) => ({ id: doc.id, ...doc.data() })
        ))
    })
    },[])

    console.log(firebaseDataCollection);
  return (
    <PersonList persons={firebaseDataCollection}/>
  )
}

export default GetPersons