import React from 'react';

function App() {
  fetch('/users')
  .then(res => res.json())
  .then(users => console.log(users))
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>App</h1>
    </div>
  );
}

export default App;
