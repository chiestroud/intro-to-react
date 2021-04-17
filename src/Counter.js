import React, { useState } from 'react'

export default function Counter({ appName, number }) {
  const [counter, setCounter] = useState(number); // inside bracket is an initial state;
  const [counterName, setCounterName] = useState(appName);
  const [userInput, setUserInput] = useState(number)
  return (
    <div>
      <input
        onChange={(e) => setCounterName(e.target.value)}>
      </input><br />
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />

      {/* Increment Button */}
      <button
        onClick={() => setCounter((prevState) => prevState + userInput)}>Increment by {userInput}
      </button>

     
      {counter <= 0 ? '' :
        <button onClick={() => setCounter((prevState) => prevState - userInput)}>Decrement by {userInput}
        </button>
      }
      
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
}
