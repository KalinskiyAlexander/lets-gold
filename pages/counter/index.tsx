import React from 'react';
import {useRecoilState} from "recoil";
import {counterState} from "components/state";

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const incHandler = () => {
    setCounter((prev: number) => prev + 1)
    console.log(counter, 'counter')
  }

  return (
   <div>
     counter: {counter}
     <button onClick={incHandler}>inc</button>
   </div>
  );
};

export default Counter;
