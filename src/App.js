import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';



function App() {
  const [accounts, setAccounts] = useState([]); // Update/Changes 

  return (<div className="App">
    <NavBar accounts={accounts} setAccounts={setAccounts}/> {/* Prop Drilling*/}
    <MainMint accounts={accounts} setAccounts={setAccousnts}/> {/* Prop Drilling*/}
  </div>);
}

export default App;
