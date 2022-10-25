import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import PersonList from '../components/PersonList' 
import { data } from '../data'

const Home: NextPage = ({persons} : InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    
    <div>
      <h1>This is the Home Page</h1>

      <PersonList persons = {persons}/>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(`${server}/api/persons`)
  // const persons = await res.json()
  const persons = data
  return{
    props:{
      persons
    }
  }
}
