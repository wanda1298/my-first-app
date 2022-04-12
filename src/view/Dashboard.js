import React from 'react';
import { useState } from 'react';
import logo from '../logo.svg'
import Navigation from '../components/Navigation';
import tasks from '../tasks.json';


const Dashboard = () => {
    const [todos, setTodos] = useState({ tasks });

    const showTasks = () => {
        {
            todos.map((todo, index) => (
                <div className='card'>
                    {todo.title}
                </div>
            ))
        }
    }

    return (
        <div className="Dashboard">
            <Navigation />
            {showTasks}
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello, World!</h1>
        </div>
    );
}

export default Dashboard