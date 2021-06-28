import React, { useContext, useState } from 'react';
import context from '../context/context';

function AddLista() {
  const {setLista} = useContext(context);
  const [novaTarefa, setNovaTarefa] = useState();
  
  function handleChange(e) {
    setNovaTarefa(e.target.value);
  }
  
  function handleClickADD() {
    let index = 0;
    setLista((state) => {
      index = index + 1;
      const newId = state[index].id + 1;
      console.log(state)
      return [...state, {id: newId, tarefa: novaTarefa}]
    });
    setNovaTarefa('');
  }

  function handleClickRemove() {
    setLista([]);
    // const remover = lista.splice(lista.length -1, 1); remover de um em um 
    // setLista(remover)
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