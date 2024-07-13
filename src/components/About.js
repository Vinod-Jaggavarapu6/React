import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This is the about page</p>
//       {/* <User name={"Vinod Jaggavarapu"} /> */}
//       <UserClass name={"Vinod Jaggavarapu (Class)"} location={"Boston"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About componentDidMount");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <User name={"Vinod Jaggavarapu"} />
        <UserClass name={"Vinod Jaggavarapu (Class)"} location={"Boston"} />
      </div>
    );
  }
}
export default About;
