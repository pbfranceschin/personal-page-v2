import { useCallback, useContext, useState, useEffect, useRef } from 'react';
import './App.css'
import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';
import { ABOUT, AppContext, BUSINESS, HOME } from './context/provider';
import About from './components/about/about';
import Business from './components/business/business';

function App() {
  const { page } = useContext(AppContext);
  const pageRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (pageRef.current && navRef.current) {
      if(page !== HOME){
        const navHeight = navRef.current.offsetHeight;
        pageRef.current.style.marginTop = `calc(100vh - ${navHeight}px)`;
      } else {
        pageRef.current.style.marginTop = 0;
      }
    }
  }, [page]);

  return (
    <>
    <main>
      <div id='nav' className='nav' ref={navRef}>
        <Menu navRef={navRef} pageRef={pageRef}/>
        <div className='top'>
          <Dashboard />
        </div>
      </div>
      <div id='page' className='page' ref={pageRef}>
        {(page === ABOUT) && <About/>}
        {(page === BUSINESS) && <Business/>}
      </div>
    </main> 
    </>
  )
}

export default App;