import React, { useEffect, useState } from 'react'
import { firebaseUpdateData, PersonData } from '../firebaseManager'
import AddForm from './AddForm'

const EditForm = (props : {id: string, firstName: string, lastName: string, age: number, aboutMe: string, profileImage: string}) => {

    const [toggleEdit, setToggleEdit] = useState(false) //TOGGLE FOR EDIT FORM

    useEffect(() => {
        console.log(toggleEdit)
    },[toggleEdit])

    const submitEdit = (person?: PersonData) => {
        console.log("This is called")
        person !== undefined && firebaseUpdateData(props.id, person)
        setToggleEdit(false)
    }

    if(toggleEdit === false){
        return(
            <button onClick={() => {setToggleEdit(true)}}>Edit</button> //SETS TOGGLE TO TRUE
        )
    } else{ //RETURN THIS INSTEAD WHEN TOGGLE IS TRUE
        return(
            <div> 
                <h1>hello</h1>
                <AddForm person = {props} callback={submitEdit} buttonName = {"Edit"}/>
            </div>
        )
    }
  
    
}

export default EditForm