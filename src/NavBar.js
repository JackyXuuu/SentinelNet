import React from "react";

// Prop Drilling
const NavBar = ({accounts, setAccounts}) => {
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
        <div>
            {/* Left Side Icons */ }
            {/* <div></div> */}
            
            {/* Right Side - Sections to Connect */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/* Connect */}
            {isConnected ? (
                <p>Connected</p>
            ) : (
                <button onClick={connectAccount}>Connect</button>
            )}

        </div>
    )
}
