import {useState} from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch,useSelector } from "react-redux"
import { addContact, contactSelector,removeAllContacts } from "../redux/contactsSlice";
import List from "./List"

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
    <div className="grid justify-center">
      <h1 className="bg-sky-200 m-5 grid text-lg rounded-md text-gray-900 font-bold p-2 justify-items-center">
        Contacts {total === 0 ? "" : total}{" "}
      </h1>
      {total > 1 ? (
        <button
          className="bg-stone-300 rounded-md p-1 m-2"
          onClick={handleRemoveAll}
        >
          Remove All
        </button>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="bg-sky-100 m-2 rounded p-1"
          placeholder="Name"
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div>
          <input
            className="bg-sky-100 m-2 rounded p-1"
            placeholder="Phone"
            type={"tel"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        {name && phone ? (
          <button
            className="rounded-lg bg-rose-500 p-3 uppercase m-2"
            type="submit"
          >
            Add
          </button>
        ) : (
          ""
        )}
      </form>
      <List />
    </div>
  );
}

export default Contacts;
