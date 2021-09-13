import React from 'react';
import './App.css';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetrux</h1>
      </header>
      <GridBoard/>
      <NextBlock/>
      <Scoreboard/>
    </div>
  );
}

export default App;
