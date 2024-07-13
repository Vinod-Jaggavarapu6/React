import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Dummy Location",
        login: "dummy",
        avatar_url: "https://via.placeholder.com/150",
      },
      count: 0,
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://api.github.com/users/vinod-jaggavarapu6"
    );
    const data = await response.json();
    this.setState({
      userInfo: data,
    });

    // this.intervalId = setInterval(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("UserClass componentDidUpdate");
  }

  componentWillUnmount() {
    // clearInterval(this.intervalId);
    console.log("UserClass componentWillUnmount");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img
          src={avatar_url}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @{login}</h4>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default UserClass;
