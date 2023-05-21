import React from "react";
import "./NavBar.css";
import sentinelNetIcon from "./assets/sentinelnetIcon.png";
import { Link } from "react-router-dom";

// Prop Drilling
const NavBar = ({ visible, accounts, setAccounts }) => {
  /* const isConnected = Boolean(accounts[0]);

   async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  } */

  const isConnected = accounts;

  function connectAccount() {
    setAccounts(!accounts);
  }

  return (
    <nav className={`navbar ${!visible ? "hidden" : ""}`}>
      <div className="name">
        <Link to="/" className="nav-link">
          <img src={sentinelNetIcon} alt="Logo" />
          <p>SentinelNet</p>
        </Link>
      </div>
      {/* Left Side Icons */}
      {/* <div></div> */}

      {/* Right Side - Sections to Connect */}
      <div className="nav-items">
        <div>
          <Link to="/" className="nav-link">
            How It Works
          </Link>
        </div>
        <div>
          {/*hey copilot can you change this link to a dropdown with 3 values a,b,c */}

          <Link to="/mint" className="nav-link">
            Mint Your Token{" "}
          </Link>
        </div>
        {isConnected ? (
          <button onClick={connectAccount}>Disconnect</button>
        ) : (
          <button onClick={connectAccount}>Connect</button>
        )}
      </div>

      {/* Connect */}
    </nav>
  );
};

export default NavBar; // Necessary for Importing
