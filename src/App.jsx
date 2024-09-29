import { useCallback, useState } from 'react';
import DashboardMobile from './components/dashboard/dashboard-mobile';
import './App.css'
import Menu from './components/menu/menu';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuButton = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [setIsMenuOpen, isMenuOpen]);

  console.log('isMenuOpen', isMenuOpen);

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
      <Menu/>
      <div className='content'>
        <DashboardMobile openCloseMenu={handleMenuButton}/>
      </div>
    </main> 
    </>
  )
}

export default App;
