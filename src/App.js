import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Provider from './context/Provider';
import context from './context/context';

import Lista from './components/Lista'
import Details from './Pages/Details';

import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h1>Todo List</h1>
        <Provider>
      <Switch>
          <Route exact path='/' render={()  => <Lista context={context} /> } />
          <Route path='/details' render={ (props) => <Details {...props} /> } />
      </Switch>
        </Provider>
    </div>
  );
}

export default App;
