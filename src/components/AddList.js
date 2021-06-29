import React, { useContext } from 'react';
import context from '../context/context';

import UseCustumer from '../custumer/UseCustumer';

function AddLista() {
  const {setLista} = useContext(context);
  const [novaTarefa, handleChange] = UseCustumer();

  function handleClickADD() {
    let index = 0;
    setLista((state) => {
      index = index + 1;
      const newId = state[index].id + 1;
      console.log(state)
      return [...state, {id: newId, tarefa: novaTarefa}]
    });
  }

  function handleClickRemove() {
    setLista([]);
    // const remover = lista.splice(lista.length -1, 1); remover de um em um começando pelo último
    // setLista(remover)
  }

  return (
    <div>
      <label htmlFor="task">
        Insira uma Tarefa:  
        <input id="task" placeholder="Ex: Adiantar conteúdo" value={novaTarefa} onChange={handleChange} />
      </label>
      <button onClick={handleClickADD}>Adicionar Tarefa</button>
      <button onClick={handleClickRemove}>Remover Tarefas</button>
    </div>
  )
}

export default AddLista;