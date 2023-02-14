import './App.css';
import Contacts from "./components/FormPage";
import Update from './components/Update';
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App bg-blue-500">
      <Routes>
        <Route path="/" element={<Contacts />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </div>
  );
}

export default App;
