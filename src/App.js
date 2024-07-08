import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";

import Footer from "./components/Footer";
import Body from "./components/Body";

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
