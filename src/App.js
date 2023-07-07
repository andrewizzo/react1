import './App.css';
import React from 'react';
import Hello from './Hello';
import Message from './Message';
import Welcome from './Welcome';
import Counter from './Counter';
import ClickerCounter from './ClickCounter';
import ClickerTracker from './ClickerTracker';
import InteractiveWelcome from './InteractiveWelcome';

function App() {
  
  return (
    <div>
      <Hello/>
      <Message />
      <ClickerTracker />
      <InteractiveWelcome />
    </div>
  );
}

export default App;
