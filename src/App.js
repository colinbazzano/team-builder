import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [members, setMembers] = useState([])


  const addNewMember = person => {
    setMembers([...members, person])
}
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
