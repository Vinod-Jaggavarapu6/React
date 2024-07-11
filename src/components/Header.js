import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect } from "react";

const Header = () => {
  console.log("Header Rendered");
  useEffect(() => {
    console.log("useEffect hook in Header.js");
  }, []);
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
