import type { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next'
import PersonList from '../components/PersonList' 
import { data } from '../data'
import HomeStyles from '../styles/Home.module.css'
import {firebaseCollectedData} from '../firebaseManager'

const Home: NextPage = ({persons} :InferGetServerSidePropsType<typeof getServerSideProps>) => {

  return (
    
    <div>
      <h1>This is the Home Page</h1>

      <PersonList   persons = {persons}/>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context : any) => {
  const persons = firebaseCollectedData
  return{
    props:{
      persons
    }
  }
}


