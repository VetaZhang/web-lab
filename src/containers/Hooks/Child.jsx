import React, { useState } from 'react';

function Parent() {
  const [counter, setCounter] = useState(0);
  return <div>
    {counter}
    <button onClick={()=>setCounter(counter + 1)}>Add 1</button>
  </div>;
}

export default Parent;