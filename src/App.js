import './App.css';
import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Welcome from './Welcome';

function App() {
  const name="Andrea"
  return (
    <div>
      <Hello/>
      <Message />
      <Welcome name={name}/>
    </div>
  );
}

export default App;
