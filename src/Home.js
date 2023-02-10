import React from "react";
import { FaBars } from "react-icons/fa";
import Login from "./components/login/Login";
import { useGlobalContext } from "./context";





const Home = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <main>

        <button onClick={openSidebar} className="sidebar-toggle">
          <button className="sidebar-toggle">
            <FaBars />
           
          </button>
        </button>
      
      </main>
      <Login/>
    </>
  );
};

export default Home;



// <img src={img} alt='img' />