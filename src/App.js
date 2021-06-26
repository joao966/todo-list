import React from 'react';

import Provider from './context/Provider';
import context from './context/context';

import Lista from './components/Lista'
import AddList from './components/AddList'

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
     <Provider>
        <Lista context={context} />
        <AddList />
     </Provider>
    </div>
  );
}

export default App;
