import Link from 'next/link'
import React from 'react'



const PersonItem = (person: {userId: number, firstName: string, lastName: string, age: number, aboutMe: string, profileImage: string}) => {
  return (
    <div>
      <Link href= "/person/[id]" as = {`/person/${person.userId}`}>
        <h1>{person.firstName} {person.lastName}</h1>
      </Link>
    </div>

  )
}

export default PersonItem