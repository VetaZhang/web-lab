import React, { useState, useEffect, useLayoutEffect } from 'react';

function useDebounce(fn, val) {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(setTimeout(() => {
      fn && fn();
    }, 1000));
  }, [val]);
}

function Input({ value, onChange, onEnter }) {
  const [val, setVal] = useState(value);
  // const onChangeDebounce = useDebounce();

  useDebounce((val) => onChange(val), val);

  function handleChange(val) {
    setVal(val);
    // onChangeDebounce((val) => onChange(val), 1000);
    // useDebounce(() => {
    //   onChange && onChange(val);
    // });
  }

  return <input
    value={val}
    onChange={(e) => handleChange(e.target.value)}
  />;
}

export default Input;