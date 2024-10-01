import { useCallback, useState } from 'react';
import './App.css'
import Menu from './components/menu/menu';
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleMenuButton = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [setIsMenuOpen, isMenuOpen]);


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
        <Dashboard />
      </div>
    </main> 
    </>
  )
}

export default App;
