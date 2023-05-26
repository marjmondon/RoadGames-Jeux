import React, {useEffect, useState} from 'react';

import './App.css';

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

    </div>
  );
}

export default App;
