import Logo from "./Logo";
import Navigation from "./Navigation";
const Header = () => {
  console.log("Header Rendered");
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
