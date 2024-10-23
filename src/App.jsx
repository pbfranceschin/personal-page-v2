import { useContext, useEffect, useRef } from 'react';
import './App.css'
import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';
import { ABOUT, AppContext, BUSINESS, HOME, PORTFOLIO, PROJECTS } from './context/provider';
import About from './components/about/about';
import Business from './components/business/business';
import ScrollDownButton from './components/scroll-down/scroll-down';
import Portfolio from './components/portfolio/portfolio';
import Projects from './components/projects/projects';

function App() {
  const { page } = useContext(AppContext);
  const pageRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (pageRef.current && navRef.current) {
      if(page !== HOME){
        const navHeight = navRef.current.offsetHeight;
        pageRef.current.style.marginBlock = `calc(100vh - ${navHeight}px)`;
      } else {
        pageRef.current.style.marginBlock = 0;
      }
    }
  }, [page]);

  return (
    <>
    <main className='rubik'>
      <div id='nav' className='nav' ref={navRef}>
        <Menu navRef={navRef} pageRef={pageRef}/>
        <div className='top'>
          <Dashboard pageRef={pageRef} />
        </div>
      </div>
      <div id='page' className='page' ref={pageRef}>
        {page !== HOME && <ScrollDownButton pageRef={pageRef}/>}
        <div className='pageContent'>
          {(page === ABOUT) && <About/>}
          {(page === BUSINESS) && <Business/>}
          {(page === PORTFOLIO) && <Portfolio/>}
          {(page === PROJECTS) && <Projects/>}
        </div>
      </div>
    </main> 
    </>
  )
}

export default App;