import React, { useContext, useState } from 'react';
import context from '../context/context';

function AddLista() {
  const {setLista} = useContext(context);
  const [novaTarefa, setNovaTarefa] = useState();

  function handleChange(e) {
    setNovaTarefa(e.target.value);
  }
  
  function handleClickADD() {
    setLista((state) => [...state, novaTarefa]);
    setNovaTarefa('');
  }

  function handleClickRemove() {
    setLista([]);
  }

  return (
    <div>
      <input value={novaTarefa} onChange={handleChange} />
      <button onClick={handleClickADD}>Adicionar Tarefa</button>
      <button onClick={handleClickRemove}>Remover Tarefas</button>
    </div>
  )
}

export default AddLista;