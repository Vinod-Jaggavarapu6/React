import { useState, useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Navigation = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  const changeBtnName = () => {
    console.log("btn name change");
    if (btnName == "Login") {
      setBtnName(loggedInUser);
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="p-4 ">
      <ul className="flex justify-between">
        <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <li className="px-4">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4">
          <Link to="/about">About</Link>
        </li>
        <li className="px-4">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-4">
          <Link to="/grocery">Grocery</Link>
        </li>
        <li className="px-4">Cart</li>
        <button className="px-4 font-bold " onClick={changeBtnName}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
