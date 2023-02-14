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
    <div className="grid justify-items-center">
      {contacts.map((item) => {
        return (
          <div
            className=" border-slate-800 rounded-lg border-4 border-solid  grid m-2 justify-items-center"
            key={item.id}
          >
            <h1 className="bg-stone-200 text-gray-900 font-bold m-2 p-4 rounded-md">
              {item.name}
            </h1>
            <h2 className="bg-stone-200 text-gray-900 font-bold m-2 p-4 rounded-md">
              {item.phone}
            </h2>{" "}
            <button
              className="bg-gray-800 text-cyan-200 rounded-md font-bold m-2 p-4 text-center"
              onClick={() => handleDelete(item.id)}
            >
              X
            </button>
            <Link to={`/update/${item.id}`}>
              <button className="bg-gray-800 text-cyan-200 text-center  font-bold rounded-md p-2 m-2">
                Update
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default List