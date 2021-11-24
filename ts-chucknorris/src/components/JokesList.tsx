import React, { ReactElement } from 'react';

const apiPath = '/jokes/search?query=google';

export default function JokesList(): ReactElement {
  return (
    <div>
      <h2>A list of Chuck Norris jokes</h2>
      <ul>
        <li>Google won't search for Chuck Norris because it knows you don't find Chuck Norris, he finds you.</li>
        <li>No one has ever pair-programmed with Chuck Norris and lived to tell about it.</li>
      </ul>
    </div>
  );
}
