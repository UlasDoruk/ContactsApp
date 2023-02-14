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
    <div className="grid justify-items-center">
      <h1 className="bg-slate-700 rounded-md p-2 m-2 text-cyan-400">
        Edit Form{" "}
      </h1>
      <form onSubmit={handleSumbit}>
        <input
          className="m-2 p-2 rounded-md"
          placeholder="Name"
          value={name}
          type={"text"}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div>
          <input
            className="m-2 p-2 rounded-md"
            placeholder="Phone"
            value={phone}
            type={"tel"}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <button
          type="submit"
          className="rounded-md p-2 m-2 bg-slate-700 text-cyan-300"
        >
          Update
        </button>
        <Link to={"/"}>
          <button className="rounded-md p-2 m-2 bg-slate-700 text-cyan-300">
            Back
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Update