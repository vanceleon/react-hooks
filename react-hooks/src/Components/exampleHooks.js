import React, { useState } from 'react';


export default function ExampleWithManyStates() {
    // declare multiple state variables
    const [age, setAge ] = useState(42);
    const [fruit, setFruit] = useState('apple');
    const [todos, setTodos ] = useState([{text: 'Learn Hooks'}]);

    return (
        <div>
            <p>{fruit}</p>
            <input type="text" />
        </div>
    );
}