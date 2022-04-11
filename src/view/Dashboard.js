import React from 'react';
import { useState } from 'react';
import logo from '../logo.svg'
import Navigation from '../components/Navigation';
import { tasks } from '../tasks.json';
//import Card from '../components/Card';

const Dashboard = () => {
    const [count, setCount] = useState(0);

  const 
  sumar = () => {
        setCount(count + 1);
    }

    return (
        <div className="Dashboard">
            <Navigation />
             
             <p>Count of click {count} </p>
             <button onClick={sumar}>Add</button>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>My First React App</h1>
        </div>
    );
}

export default Dashboard