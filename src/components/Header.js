import Logo from "./Logo";
import Navigation from "./Navigation";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {}, []);
  return (
    <div className="flex justify-between items-center shadow-lg mb-4">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
