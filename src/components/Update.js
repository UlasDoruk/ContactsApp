import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams} from 'react-router-dom'
import { contactSelector,updateContacts } from '../redux/contactsSlice'

function Update() {

    let dispatch = useDispatch()

    const {id} = useParams()
    const item = useSelector((state)=>contactSelector.selectById(state,id))

    const [name, setName] = useState(item.name);
    const [phone, setPhone] = useState(item.phone);

    const handleSumbit = (e) => {
      e.preventDefault();
      dispatch(
        updateContacts({
          id: item.id,
          changes: {
            name,
            phone,
          },
        })
      );
    };

  return (
    <div>
      <h1>Edit Form </h1>
      <form onSubmit={handleSumbit}>
        <input
          placeholder="Name"
          value={name}
          type={"text"}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div>
          <input
            placeholder="Phone"
            value={phone}
            type={"tel"}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <button type="submit">Update</button>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
}

export default Update