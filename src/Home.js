import React , { useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';




const Home = () => {

  const { openSidebar , closeSidebar } = useGlobalContext();
  const [toggle, setToggle] = useState(true)

  return (
    <>

    <main>
      <button onClick={openSidebar}  className='sidebar-toggle'>
      <button  onClick={() => setToggle(!toggle)} className='sidebar-toggle'>
      { toggle && 
      <FaBars  />
      }
      { openSidebar && !toggle &&
      <FaBars  />
      }
      </button>
      
      </button>
    </main>
 
    </>
  );
};

export default Home;