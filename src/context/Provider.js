import React, { useState } from 'react';
import context from './context';

function Provider({children}) {
  const [lista, setLista] = useState(['1', '2']);

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
