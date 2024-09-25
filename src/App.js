import "./App.css";
import Userlist from "./components/Userlist";
import Chance from "chance";
import {adduser} from "./store/slices/userSlice";
//import { Dispatch } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const chance = new Chance();

  const addNewUser = (...name) => {
    //console.log(name);
    dispatch(adduser(name));
  };

  return (
    <div className="App">
      <h1>Redux toolkit for state management</h1>
      <button
        onClick={() =>
          addNewUser(
            chance.name({ prefix: true }),
            chance.ssn({ ssnFour: true })
          )
        }>
        Add User
      </button>
      <Userlist></Userlist>
    </div>
  );
}

export default App;
