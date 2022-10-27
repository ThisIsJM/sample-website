import firebase, { initializeApp } from 'firebase/app'
import {getFirestore, collection, getDocs, addDoc, doc, deleteDoc, query, orderBy, onSnapshot} from 'firebase/firestore'

export interface PersonData{
    firstName: string,
    lastName: string,
    age: number,
    aboutMe: string,
    profileImage: string
}

const firebaseConfig = {
    apiKey: "AIzaSyAnk5gsB8fLb5C2CBFxGa1s2hUyf-t-9LA",
    authDomain: "samplewebsite-c0ded.firebaseapp.com",
    projectId: "samplewebsite-c0ded",
    storageBucket: "samplewebsite-c0ded.appspot.com",
    messagingSenderId: "1050317530170",
    appId: "1:1050317530170:web:edafa94f6e0a78f8cd8103"
};
  
initializeApp(firebaseConfig) //INIT FIREBASE APP
  
const db = getFirestore() // INIT SERVICES

const colRef = collection(db, 'Persons') //COLLECTION REFERENCE

const q = query(colRef,orderBy('lastName','asc'))

const firebaseCollectData = () => { //FETCH DATA FROM FIREBASE DATABASE
    let persons: { id: string; }[] = []

    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) =>{
            persons.push({...doc.data(), id: doc.id})
        })
        //persons.map(person => console.log(person))
    })

    return(
        persons
    )
}

export var firebaseCollectedData  = firebaseCollectData() //COLLECTED DATA FROM FIREBASE

export const firebaseAddData = (props : PersonData, action : () => void) => { //ADD DATA TO FIREBASE
    addDoc(colRef, {
        firstName : props.firstName,
        lastName : props.lastName,
        age : props.age,
        aboutMe : props.aboutMe,
        profileImage : props.profileImage
    })
    .then(() => {
        action()
        console.log(firebaseCollectData())
    })
}

export const firebaseDeleteData = (id : string, action: () => void) =>{ //DELETE DATA FROM FIREBASE
    const docRef = doc(db, 'Persons', id)
    deleteDoc(docRef).then(() => {action()})
}