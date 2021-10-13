import React from "react";
import "./header.css";
function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </div>
        <div className="searchbar">
          <div className="search">sea</div>
          <button className="go">go</button>
        </div>
        <div className="links">
            <a href="" className="each">SHOP</a>
            <a href="" className="each">Order</a>
            <a href="" className="each"></a>
            </div>
        <div className="basket">safa</div>
      </nav>
    </div>
  );
}

export default Header;
