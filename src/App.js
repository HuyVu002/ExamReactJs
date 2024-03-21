import Home from './component/page/Home'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Menu from './component/page/Home';
function App() {
  return (
    <>
      {/* <Menu/> */}
      <section className='main'>
          <Routes>
            <Route path='/'  Component={Home} />
          </Routes>
        </section>
    </> 
  );
}

export default App;
