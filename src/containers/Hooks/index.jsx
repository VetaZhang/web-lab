import React, { useState, useEffect } from 'react';
import { hot } from "react-hot-loader/root";
import Child from './Child';
import Input from './Input';

function Parent() {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('change counter');
    // return () => console.log('over counter');
  }, [counter]);

  useEffect(() => {
    console.log('change age');
    // return () => console.log('over age');
  }, [age]);

  return <div>
    counter: {counter}
    <button onClick={()=>setCounter(counter + 1)}>Add counter 1</button>
    <br />
    age: {age}
    <button onClick={()=>setAge(age + 1)}>Add age 1</button>
    <Input
      value={value}
      onChange={(val) => {
        console.log(val);
        setValue(val);
      }}
    />
  </div>;
}

export default hot(Parent);