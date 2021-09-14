import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import './App.css';

import Controls from './components/Controls';
import GridBoard from './components/GridBoard';
import MessagePopup from './components/MessagePopup';
import NextBlock from './components/NextBlock';
import Scoreboard from './components/Scoreboard';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tetrux</h1>
        </header>
        <GridBoard/>
        <NextBlock/>
        <Scoreboard/>
        <Controls />
        <MessagePopup />
      </div>
    </Provider>
  );
}

export default App;
