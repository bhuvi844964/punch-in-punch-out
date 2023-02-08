import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
// import img from "./punch.webp"




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
    </>
  );
};

export default Home;



// <img src={img} alt='img' />