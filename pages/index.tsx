import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useEffect, useState } from 'react'
import PersonList from '../components/PersonList' 
import {firebaseCollectedData} from '../firebaseManager'


const Home: NextPage = () => {

  const defaultData : { id: string; }[] = [{id : ''}]
  const [personsData, setPersonsData] = useState(defaultData)

  useEffect(() => {
    setPersonsData(firebaseCollectedData)
    console.log(personsData)
  },[personsData])

  return (
    <div>
      <h1>This is the Home Page</h1>

      <PersonList   persons = {personsData}/>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context : any) => {
//   const persons = firebaseCollectedData
//   return{
//     props:{
//       persons
//     }
//   }
// }

export default Home
