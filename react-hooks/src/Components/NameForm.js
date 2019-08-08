import React, { useState } from 'react';

export function NameForm() {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitting Name ${name}`);
  };
  return (
    <form submit={handleSubmit}>
      <label>
        First Name
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}
