import React from 'react';
import Example from './Components/hook';
import ExampleWithManyStates from './Components/exampleHooks';
import './App.css';


function App() {
  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates/>
    </div>
  );
}

export default App;
