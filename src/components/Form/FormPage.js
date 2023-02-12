import {useState} from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contactsSlice"
import List from "../List"

function Contacts() {

  const [name,setName] = useState("")

  let dispatch = useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addContact({id:nanoid(),name}))
    setName("")
  }
    
  return (
    <div>
      <h1>Contacts</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </form>
      <List/>
    </div>
  );
}

export default Contacts;
