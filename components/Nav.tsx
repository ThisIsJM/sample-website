import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link href = '/'>HOME</Link>
            </li>
            <li>
                <Link href = '/about'>ABOUT</Link>
            </li>
            <li>
                <Link href = '/addPerson'>ADD PERSON</Link>
            </li>
            <li>
                <Link href = '/deletePerson'>DELETE PERSON</Link>
            </li>

        </ul>
    </nav>
  )
}

export default Nav