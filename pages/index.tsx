import { orderBy, query } from 'firebase/firestore'
import type { NextPage } from 'next'
import GetPersons from '../components/GetPersons'
import { colRef } from '../firebaseManager'


const Home: NextPage = () => {

  const q = query(colRef, orderBy('firstName', 'asc'))
  return (
    <div>
      <h1>This is the Home Page</h1>

      <GetPersons query={q}/>
    </div>
  )
}

export default Home
