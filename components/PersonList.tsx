import React from 'react'
import PersonItem from './PersonItem'

const PersonList = (props : any) => {
  return (
    <div>
        {props.persons.map((person: any) => 
            <PersonItem key = {person.id} id={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age} aboutMe= {person.aboutMe} profileImage = {person.profileImage}/>
        )}
    </div>

  )
}

export default PersonList