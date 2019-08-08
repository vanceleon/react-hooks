import React from 'react';
import Example from './Components/hook';
import ExampleWithManyStates from './Components/exampleHooks';
import './App.css';
import { NameForm } from './Components/NameForm';


function App(props) {
  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates/>
      <NameForm/>
      {props.name}
    </div>
  );
}

export default App;
