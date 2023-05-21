import React from "react";
import "./Home.css";
import table1 from "./assets/table1.png";
import img1 from "./assets/magGlass.png";
import table2 from "./assets/table2.png";
import spike from "./assets/spikething.png";

const Home = () => {
  return (
    <div>
      <section className="sec01">
        <div>
          <h1>
            Web3 Transaction <br />
            Security
          </h1>
          <p>
            Visualized transcation simulation and firewall for
            anti-fraud/phishing JSON-RPC
          </p>
        </div>
      </section>
      <section className="sec02">
        <h2 className="title">Get peace of mind with every transaction.</h2>
        <img src={table1} alt="table1" className="table1" />
        <img src={img1} alt="Magnifying Glass" className="img1" />
        <img src={table2} alt="table2" className="table2" />
        <p>
          CentinelNet's <span classname="highlight">Transaction Simulator</span>{" "}
          <br /> keeps your assets safe when you sign <br /> web3 transactions.
        </p>
        <img src={spike} alt="spike" className="spike" />
      </section>

      <section className="sec03">
        {/* <div sec03block>
          <h2>User-safety warnings and security net</h2>
        </div> */}
      </section>
      <section className="final"></section>
    </div>
  );
};

export default Home;
