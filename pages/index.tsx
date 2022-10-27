import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useEffect, useState } from 'react'
import GetPersons from '../components/GetPersons'
import PersonList from '../components/PersonList' 


const Home: NextPage = () => {

  // const defaultData : { id: string; }[] = [{id : ''}]
  // const [personsData, setPersonsData] = useState<any>(defaultData)

  // useEffect(() => {
  //   setPersonsData(firebaseCollectedData)
  //   console.log(personsData)
  // },[])

  //console.log(personsData)
  return (
    <div>
      <h1>This is the Home Page</h1>

      <GetPersons/>
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
