import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Member from './components/Member';

function App() {
  const [members, setMembers] = useState([])


  const addNewMember = person => {
    setMembers([...members, person])
}
  return (
    <div className="App">
      <h1>Our Team</h1>
      <Form addNewMember={addNewMember}/>
      <Member memberList={members}/>
    </div>
  );
}

export default App;
