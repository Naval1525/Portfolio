
import './App.css';
import { HP1 } from './components/HP1.js';
import { HP2 } from './components/HP2.js';
import { HP3 } from './components/HP3.js';

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
      <div className="text-black font-extrabold text-6xl   h-screen absolute left-[25vh]">
         PRO<span className='text-[#6666FF]'>GRESS</span>
        </div>
      <div className='top-[214vh] absolute left-[60vh]'>
     
        <HP3></HP3>
      </div>
    </div>
  );
}

export default App;

