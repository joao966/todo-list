import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Provider from './context/Provider';
import context from './context/context';

import Lista from './components/Lista'
// import AddList from './components/AddList'
import Details from './Pages/Details';

function App() {
  return (
    <div className="App">
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
