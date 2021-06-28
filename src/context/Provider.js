import React, { useState } from 'react';
import context from './context';

function Provider({children}) {
  const [lista, setLista] = useState([{id: 0, tarefa: 'Estudar Front-End', data: '13/13/13' }, {id: 1, tarefa: 'Estudar Back-End', data: '12/12/12' }]);

  const GLOBAL_STATE = {
    lista,
    setLista,
  }

  return (
    <context.Provider value={GLOBAL_STATE}>
      {children}
    </context.Provider>
  )
}

export default Provider;
