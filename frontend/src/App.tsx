import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Joueurs from './components/Joueurs/Joueurs';

function App() {
    const [users, setUsers] = useState([])
    const fetchUserData = () => {
        fetch("http://localhost:5112/")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])



  return (
    <div className="App">
        <h1>{users}</h1>
        <BrowserRouter>
            <Route path="/joueurs">
                <Joueurs />
            </Route>
        </BrowserRouter>
    </div>

  );
}

export default App;
