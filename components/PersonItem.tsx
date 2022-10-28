import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import HomeStyles from '../styles/Home.module.css'
import EditForm from './EditForm'
import {firebaseDeleteData} from '../firebaseManager'

const PersonItem = (props: {id: string, firstName: string, lastName: string, age: number, aboutMe: string, profileImage: string}) => {

  const deletePerson = () => {firebaseDeleteData(props.id)}

  return (
    <div>
      <Link href= "/person/[id]" as = {`/person/${props.id}`}>
        <h1 className = {HomeStyles.profileLink}>{props.firstName} {props.lastName}</h1>
      </Link>
      <EditForm id = {props.id} firstName = {props.firstName} lastName = {props.lastName} age = {props.age} aboutMe = {props.aboutMe} profileImage = {props.profileImage}/>
      <button onClick={deletePerson}>Delete</button>
    </div>

  )
}

export default PersonItem