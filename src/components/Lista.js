import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import AddList from '../components/AddList'

function Lista({context}) {
  const {lista} = useContext(context);
  return (
    <div>
      Tarefas
      <ul>
        {lista.map((cur, index) => (
          <li key={index} > {cur.tarefa}  <Link to={ {
            pathname: '/details', 
            id: cur.id} }>Detalhes</Link> </li>
        ))}
      </ul>
      <AddList />
    </div>
  )
}

export default Lista;
