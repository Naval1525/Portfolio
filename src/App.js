
import './App.css';
import { HP1 } from './components/HP1.js';
import { HP2 } from './components/HP2.js';

import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className='mt-6 '>
      <Navbar />
      <div className='mt-1'> 
        <HP1/>
      </div>
      <div className='mt-[24vh] '>
        <HP2></HP2>
      </div>
    </div>
  );
}

export default App;

