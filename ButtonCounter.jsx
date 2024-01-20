/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { signal } from '@preact/signals';

const counter = signal(0);

export const ButtonCounter = ({ name, onClicked }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    counter.value = counter.value + 2;
    onClicked(count);
  };

  return (
    <button onClick={() => handleClick()} class="btn btn-outline-primary">
      {name} - You clicked me {count}:{counter.value} times
    </button>
  );
};
