import React, { useContext } from 'react';

function Lista({context}) {
  const {lista} = useContext(context);
  return (
    <div>
      Tarefas
      <ul>
        {lista.map((cur, index) => <li key={index}>{cur}</li>)}
      </ul>
    </div>
  )
}

export default Lista;
