import React from 'react';
import Joke from './components/Joke';
import JokesList from './components/JokesList';

const apiDomain = 'https://api.chucknorris.io';

function App() {
  return (
    <div>
      <h1>Chuck Norris joke</h1>
      <Joke />
    </div>
  );
}

export default App;
