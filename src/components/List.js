import React from 'react'
import { useSelector } from 'react-redux'
import { contactSelector } from "../redux/contactsSlice";

function List() {

    const contacts = useSelector(contactSelector.selectAll)

  return (
    <div>{contacts.map(item=>{
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
          </div>
        );
         
        
    })}</div>
  )
}

export default List