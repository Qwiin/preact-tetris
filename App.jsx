/** @jsx h */
import { h } from 'preact';
import { ButtonCounter } from './ButtonCounter';
import { Game } from './Game';

// import 'tailwindcss/tailwind.css';

export const App = () => {
  const onChildClicked = (e) => {
    console.warn('callback from parent triggered', e);
  };

  return (
    <div class="container pt-2">
      {/* <h1>Preact Jsx Starter Template</h1>

      <p>Simple Preact JSX Template with a custom ButtonCounter Component</p>

      <ButtonCounter name="Preact JSX" onClicked={(e) => onChildClicked(e)} /> */}

      <Game name="my-game" />
    </div>
  );
};
