import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect hook with []");
  }, []);

  useEffect(() => {
    console.log("useEffect hook without []");
  });

  useEffect(() => {
    console.log("useEffect hook with [btnName]");
  }, [btnName]);

  console.log("Component rendered");

  const changeBtnName = () => {
    console.log("btn name change");
    if (btnName == "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <button className="login-btn" onClick={changeBtnName}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
