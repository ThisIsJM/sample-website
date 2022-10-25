import React from 'react'
import PersonItem from './PersonItem'

const PersonList = (props : any) => {
    console.log(props.persons)
  return (
    <div>
        {props.persons.map((person: any) =>
            <PersonItem key = {person.userId} userId={person.userId} firstName={person.firstName} lastName={person.lastName} age={person.age} aboutMe= {person.aboutMe} profileImage = {person.profileImage}/>
        )}
    </div>

  )
}

export default PersonList