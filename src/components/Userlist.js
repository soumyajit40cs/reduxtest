import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addproduct } from "../store/slices/cartSlice";
import Chance from "chance";

export default function Userlist() {
  const dispatch = useDispatch();
  const chance = new Chance();

  const userdata = useSelector((state) => state.user);
  if (localStorage.getItem("key-user")) {
    console.log(localStorage.getItem("key-user"));
  }

  const addtoCart = (...name) => {
    dispatch(addproduct(name));
  };

  return (
    <>
      <ul>
        {userdata.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
      <button onClick={() => addtoCart(chance.company(), chance.domain())}>
        Add To CART
      </button>
    </>
  );
}
