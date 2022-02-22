import React from 'react';
function App() {
  const username = "<script><img onerror='alert(\"Hacked!\")' src='invalid-image' /></script>";
  return (
    <div className='App'>
      <input type='search' value='Attacker ' /> {username}
    </div>
  );
}
export default App;
