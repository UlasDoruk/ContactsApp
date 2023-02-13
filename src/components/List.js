import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactSelector,deleteContact } from "../redux/contactsSlice";

function List() {

  let dispatch = useDispatch()

    const contacts = useSelector(contactSelector.selectAll) 

    const handleDelete=(id)=>{
      dispatch(deleteContact(id))
    }

  return (
    <div>
      {contacts.map((item) => {
        return (
          <div key={item.id}>
            <h1>
              {item.name}
            </h1>
            <h2>{item.phone}</h2>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default List