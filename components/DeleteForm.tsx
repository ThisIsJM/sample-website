import React, { useState } from 'react'
import { firebaseDeleteData } from '../firebaseManager';

const DeleteForm = () => {
    const [id, setId] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        firebaseDeleteData(id, () => {setId('')})
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>User Id:</label>
        <input type = "text" name = "id" value = {id} onChange = {(e) => setId(e.target.value)} required/>
        <br/>
        <button>Delete</button>
    </form>
  )
}

export default DeleteForm