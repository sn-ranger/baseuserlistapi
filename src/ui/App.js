import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './users';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={'/'} component={Users}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
