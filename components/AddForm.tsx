import React, { useEffect, useState } from 'react'
import { PersonData } from '../firebaseManager';

const AddForm = (props: { person?: any, callback : (person?: PersonData) => void, buttonName?: string}) => {

    const [firstName, setFirstName] = useState(''); //CREATED USE STATE FOR EACH VALUES
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [aboutMe, setAboutMe] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        if(props.person !== undefined) //SETS INITIAL VALUE FOR EACH INPUTS AT THE VERY FIRST RENDER
        {
            setFirstName(props.person.firstName)
            setLastName(props.person.lastName)
            setAge(props.person.age as number)
            setAboutMe(props.person.aboutMe)
            setProfileImage(props.person.profileImage)
        }
    },[])

    useEffect(()=>{
        console.log(firstName);
    },[firstName])
   
    
    const clearForm = () => { //CLEARS FORM
        setFirstName(''); setLastName(''); setAge(0); setAboutMe(''); setProfileImage('');
    }
    
    const SubmitForm = (e: { preventDefault: () => void; }) => { //CALLBACK FUNCTION IS CALLED WHEN FORM IS SUBMITTED
        e.preventDefault();
        const person: PersonData  = {firstName, lastName, age, aboutMe, profileImage }
        props.callback(person)
        clearForm()
    }
    
      return ( //FILL UP FORM
        <div>
        <form onSubmit={SubmitForm}>
            <label>First Name: </label>
            <input type = "text" name = "firstName" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} required/>
            <br/>
            <label>Last Name: </label>
            <input type = "text" name = "lastName" value = {lastName} onChange = {(e) => setLastName(e.target.value)} required/>
            <br/>
            <label>Age: </label>
            <input type = "number" name = "age" value = {age == 0? '' : age} onChange = {(e) => setAge((e.target.value) as any as number)} required/>
            <br/>
            <label>About: </label>
            <input type = "text" name = "aboutMe" value = {aboutMe} onChange = {(e) => setAboutMe(e.target.value)} required/>
            <br/>
            <label >Image Link: </label>
            <input type = "text" name = "profileImage" value = {profileImage} onChange = {(e) => setProfileImage(e.target.value)} required/>
            <br/>
            <button>{props.buttonName}</button> <br/>
            <button onClick={clearForm}>Clear</button>
        </form>
        </div>
       
      )
}

export default AddForm