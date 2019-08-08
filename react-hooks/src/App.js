import React from 'react';
import Example from './Components/hook';
import ExampleWithManyStates from './Components/exampleHooks';
import './App.css';
import { NameForm } from './Components/NameForm';
import { FriendStatus, ChatRecipientPicker } from './Components/buildNewhooks';
import Counter from './Components/Counter';

function App(props) {
  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates/>
      {/* <NameForm/>
      <ChatRecipientPicker/> */}
      <Counter/> 
    </div>
  );
}

export default App;
