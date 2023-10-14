import React,{useState} from 'react'
import './App.css'
const App = () => {
  const [age, setage] = useState('');
  const calculateage=()=>{
      const dobi=document.getElementById('dob').value;
      const db=new Date(dobi);
      const curr=new Date();
      const ageinmil=curr-db;
      setage(Math.floor(ageinmil/(365 * 24 * 60 * 60 * 1000)));
  }

  return (
    <div id='main'>
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <p><input type="date" id='dob'/></p>
        <button onClick={calculateage}>Calculate Age</button>
        <h3>You are {age} years old</h3>
    </div>
  )
}

export default App