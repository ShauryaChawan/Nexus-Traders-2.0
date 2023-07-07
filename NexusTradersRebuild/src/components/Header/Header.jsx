import React from "react";
import "./header.scss";

const Logo = "./assets/favicons/logo512.png";

const Header = () => {
  return (
    <section>
      <div className="header_container">
        <div className="text">
          <h1>Nexus Traders</h1>
          <h2>Turning Wealth Into Empire</h2>
          <p>
            We at Nexus Traders provide you with all the elements required to
            become an ELITE Trader and Investor in the Stock Market in the most
            simple way and methods, personally back-tested by us.{" "}
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
