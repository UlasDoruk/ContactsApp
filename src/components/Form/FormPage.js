import {useState} from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch,useSelector } from "react-redux"
import { addContact, contactSelector,removeAllContacts } from "../../redux/contactsSlice";
import List from "../List"

function Contacts() {

  const [name,setName] = useState("")
  const [phone, setPhone] = useState("");
  const total = useSelector(contactSelector.selectTotal);

  let dispatch = useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addContact({id:nanoid(),name,phone : phone}))
    setName("")
    setPhone("")
  }

  const handleRemoveAll=()=>{
    dispatch(removeAllContacts());
  }
      
  return (
    <div>
      <h1>Contacts ({total === 0 ? 0 : total}) </h1>
      <button onClick={handleRemoveAll}>Remove All</button>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div>
          <input
            placeholder="Phone"
            type={"tel"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
      <List />
    </div>
  );
}

export default Contacts;
