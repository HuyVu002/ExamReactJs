import './App.css'
import Home from './component/page/Home'
import Favorite from './component/page/Favorite'
import Menu from './component/common/Menu';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Context, { ContextProvider } from './component/context/context';

function App() {
  const [cart, setCart] = useState([]);

  return (
    
    <>
      <Menu/>
      <section className='main'>
          <Routes>
            <Route path='/Home'  Component={Home} />
            <Route path='/favorite' Component={Favorite} />
          </Routes>
        </section>
    </> 
  );
}

export default App;
