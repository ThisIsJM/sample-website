import React, { useState } from 'react'
import { firebaseAddData, PersonData } from '../firebaseManager';

const addPerson = () => {

const [firstName, setFirstName] = useState(''); //CREATED USE STATE FOR EACH VALUES
const [lastName, setLastName] = useState('');
const [age, setAge] = useState(0);
const [aboutMe, setAboutMe] = useState('');
const [profileImage, setProfileImage] = useState('');

const clearForm = () => { //CLEARS FORM
    setFirstName(''); setLastName(''); setAge(0); setAboutMe(''); setProfileImage('');
}

const handleSubmit = (e: { preventDefault: () => void; }) => { //ADD DATA USING FIREBASEMANAGER
    e.preventDefault();

    const person: PersonData  = {firstName, lastName, age, aboutMe, profileImage }

    firebaseAddData(person, clearForm)
}

  return (
    <div>
        <h1>Add a Person</h1>
    <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input type = "text" name = "firstName" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} required/>
        <br/>
        <label>Last Name: </label>
        <input type = "text" name = "lastName" value = {lastName} onChange = {(e) => setLastName(e.target.value)} required/>
        <br/>
        <label>Age: </label>
        <input type = "number" name = "age" value = {age} onChange = {(e) => setAge((e.target.value) as any as number)} required/>
        <br/>
        <label>About: </label>
        <input type = "text" name = "aboutMe" value = {aboutMe} onChange = {(e) => setAboutMe(e.target.value)} required/>
        <br/>
        <label >Image Link: </label>
        <input type = "text" name = "profileImage" value = {profileImage} onChange = {(e) => setProfileImage(e.target.value)} required/>
        <br/>
        <button>Add</button> <br/>
        <button onClick={clearForm}>Clear</button>
    </form>
    </div>
   
  )
}

export default addPerson