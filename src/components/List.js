import { useDispatch, useSelector } from 'react-redux'
import {contactSelector,deleteContact,} from "../redux/contactsSlice";
import { Link } from 'react-router-dom';

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
            <h1>{item.name}</h1>
            <h2>{item.phone}</h2>
            <button onClick={() => handleDelete(item.id)}>X</button>
            <Link to={`/update/${item.id}`}>
              <button >Update</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default List