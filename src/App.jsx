import { useCallback, useContext, useState } from 'react';
import './App.css'
import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';
import { ABOUT, AppContext } from './context/provider';
import About from './components/about/about';

function App() {
  const { page } = useContext(AppContext);

  return (
    <>
    <main>
      {/* <img
      src='/img/1024px-La-esfinge.jpg'
      className='background'
      height='100vh'
      width='auto'
      alt='background'
      /> */}
      <div className='nav'>
        <Menu/>
        <div className='top'>
          <Dashboard />
        </div>
      </div>
      <div className='page'>
        {(page === ABOUT && <About/>)}
      </div>
    </main> 
    </>
  )
}

export default App;
