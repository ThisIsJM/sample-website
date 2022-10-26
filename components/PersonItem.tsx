import Link from 'next/link'
import React from 'react'
import HomeStyles from '../styles/Home.module.css'


const PersonItem = (person: {id: string, firstName: string, lastName: string, age: number, aboutMe: string, profileImage: string}) => {
  return (
    <div>
      <Link href= "/person/[id]" as = {`/person/${person.id}`}>
        <h1 className = {HomeStyles.profileLink}>{person.firstName} {person.lastName}</h1>
      </Link>
      <button>Edit</button>
    </div>

  )
}

export default PersonItem