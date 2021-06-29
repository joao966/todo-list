import { useState } from 'react';

function UseCustumer() {
  const [state, setState] = useState();

  function handleChange(e) {
    if(e === '') {
      setState('');
    }
    setState(e.target.value);
  }
  return [state, handleChange];
}

export default UseCustumer;
