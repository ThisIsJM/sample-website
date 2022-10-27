import React from 'react'
import AddForm from '../components/AddForm';
import { firebaseAddData, PersonData } from '../firebaseManager';

const addperson = () => {
 
  const handleSubmit = (person?: PersonData) => { //ADD DATA USING FIREBASEMANAGER

    person !== undefined && firebaseAddData(person)
}

return(
  
    <div>
      <h1>Add a Person</h1>
      <AddForm buttonName = "Add" callback= {handleSubmit}/>
    </div>
  )
}

export default addperson
