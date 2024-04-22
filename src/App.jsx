import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './screen/Calculator';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <Calculator />
    </div>
  );
}

export default App;
