import React, { createContext   } from "react";
import Navbar from "../Navbar";


const FirstName = createContext();

const myCount = () => {


  return (
    <div>
      <FirstName.Provider value={true}>
        <Navbar />
      </FirstName.Provider>
    </div>
  );
};




export default myCount;
export { FirstName };