import React from 'react';
function App() {
  function setLanguageOptions() {
    const href = document.location.href,
      deflt = href.substring(href.indexOf('default=') + 8);
    document.write('<OPTION value=1>' + deflt + '</OPTION>');
    document.write('<OPTION value=2>English</OPTION>');
  }

  const customPropsControledByAttacker = {
    dangerouslySetInnerHTML: {
      __html: "<img onerror='alert(\"Hacked!\");' src='invalid-image' />",
    },
  };
  return (
    <div className='App'>
      <input type='search' value='Attacker ' />{' '}
      <script>
        <div {...customPropsControledByAttacker} />
      </script>{' '}
    </div>
  );
}
export default App;
