import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
// have to import the SentinelNet NFT

const sentinelNetAddress = "" // FILL IN ADDRESS

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1); // Determines the number of quantity the user is selecting to mint
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum); // Provides a way for Ethers to connect to the blockchain
            const signer = provider.getSigner(); // Need a signer, something to sign the transaction
            const contract = new ethers.Contract(
                sentinelNetAddress,
                //theJSON.abi,
                signer
            );
        }

        try {
            const response = await contract.mint(BigNumber.mintAmount); // Solidity required
            console.log("Response: ", response);
        } catch (err) {
            console.log("Error found: ", err);
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1);
    };

    return (
        <div>
            <h1>SentinelNet</h1>
            <p>Foolproof your transactions</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount}></input>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )
}

export default MainMint; // Necessary for importing
