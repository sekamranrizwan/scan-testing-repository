import React from 'react';
function App() {
  function setLanguageOptions() {
    const href = document.location.href,
      deflt = href.substring(href.indexOf('default=') + 8);
    document.write('<OPTION value=1>' + deflt + '</OPTION>');
    document.write('<OPTION value=2>English</OPTION>');
  }
  return (
    <div className='App'>
      <input type='search' value='Attacker ' /> <script> {setLanguageOptions()} </script>{' '}
    </div>
  );
}
export default App;
