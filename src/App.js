import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => console.log(data.message));
  }, []);

  return (
    <div className="App">
      Steeldoor
    </div>
  );
}

export default App;
