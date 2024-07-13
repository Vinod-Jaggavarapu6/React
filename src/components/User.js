import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [userInfo, setUserInfo] = useState({
    name: "Dummy User",
    location: "Dummy Location",
    login: "dummy",
    avatar_url: "https://via.placeholder.com/150",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchUserInfo() {
      const response = await fetch(
        "https://api.github.com/users/vinod-jaggavarapu6"
      );
      const data = await response.json();
      console.log(data);
      setUserInfo(data);
    }
    fetchUserInfo();
  }, []);

  // useEffect(() => {
  //   console.log("useEffect count changed");
  //   const intervalId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [count]);

  const { location, login, avatar_url } = userInfo;

  return (
    <div className="user-card">
      <img
        src={avatar_url}
        alt={userInfo?.name}
        style={{ width: "100px", height: "100px" }}
      />
      <h2>Name: {userInfo?.name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: @{login}</h4>
      <p>{count}</p>
    </div>
  );
};

export default User;
