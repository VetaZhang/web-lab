import React, { useState, useEffect, useLayoutEffect } from 'react';

function useDebounceSet(val, fn) {
  const [value, setValue] = useState(val);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(setTimeout(() => {
      fn && fn(value);
    }, 200));
  }, [value]);

  return [value, setValue];
}

function Input({ value, onChange, onEnter }) {
  const [val, setVal] = useDebounceSet(value, (newValue) => onChange(newValue)); 

  return <input
    value={val}
    onChange={(e) => setVal(e.target.value)}
  />;
}

export default Input;