import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import context from '../context/context';

function Details(props) {
  const { location: {id} } = props;
  const { lista, setLista } = useContext(context);
  const [detailLista, setDetailLista] = useState('');
  const [redirect, setredirect] = useState(false);

  const detailsFunc  = () => {
    const detail = lista.find((cur) => cur.id === id);
    setDetailLista(detail);
  }

  const handleRemove = () => {
    const remove = lista.filter((cur) => cur.id !== id);
    setLista(remove);
    setredirect(true)
  }

  useEffect(() => {
    detailsFunc();
  },[])

  if(redirect) return <Redirect to="/" />

  return (
    <div>
      <h1>Details</h1>
      <h2>{detailLista.tarefa}</h2>
      <h2>{detailLista.data}</h2>
      <button onClick={handleRemove}>Remover</button>
    </div>
  )
}

export default Details;
