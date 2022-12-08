import logo from './logo.svg';
import './App.css';

import Title from './components/Title';

import DogFacts from './components/DogFacts';

import { useState, useEffect } from 'react';



function App() {

  

  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    console.log('showTitle has changed')
  }, [showTitle]);

  return (
    <div className="App">
      {showTitle ? <Title /> : <p>title not available</p>}
      <button
        onClick={() => setShowTitle(!showTitle)}
      >
        {showTitle ? 'Hide' : 'Show'}
      </button>

      <DogFacts />
    </div>
  );
}

export default App;
