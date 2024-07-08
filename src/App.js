import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../c-logo.jpg";

/**
 *
 * Header
 *    - Logo
 *    - Navigation
 * Body
 *    - Search
 *    - RestaurantContainer
 *          - RestaurantCard
 * Footer
 *  - Links
 *  - Contact Info
 *  - CopyRight
 */

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} className="logo" alt="App Logo" />
    </div>
  );
};
const Navigation = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

const Search = () => {
  return <div className="search">Search</div>;
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bgh4fwkbqkrg0bxqnftd"
        alt="res-logo"
        className="res-logo"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.5 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <Search />
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div>Links</div>
      <div>Contact Info</div>
      <div>CopyRight</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
