import React from "react";
import "./NavBar.css";
import sentinelNetIcon from "./assets/sentinelnetIcon.png";

// Prop Drilling
const NavBar = ({ visible, accounts, setAccounts }) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  return (
    <nav className={`navbar ${!visible ? "hidden" : ""}`}>
      <div className="name">
        <img src={sentinelNetIcon} alt="Logo" />
        <h1>SentinelNet</h1>
      </div>
      {/* Left Side Icons */}
      {/* <div></div> */}

      {/* Right Side - Sections to Connect */}
      <div className="pages">
        <div>How It Works</div>
        <div>Mint Your Token</div>
        <div>Team</div>
        {isConnected ? (
          <p>Connected</p>
        ) : (
          <button onClick={connectAccount}>Connect</button>
        )}
      </div>

      {/* Connect */}
    </nav>
  );
};

export default NavBar; // Necessary for Importing
