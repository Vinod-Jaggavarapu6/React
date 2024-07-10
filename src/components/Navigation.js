import { useState } from "react";

const Navigation = () => {
  const [btnName, setBtnName] = useState("Login");

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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button className="login-btn" onClick={changeBtnName}>
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Navigation;
