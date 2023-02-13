// import React , {useState , useEffect} from 'react';
// import "./List.css"
import Popup from 'reactjs-popup';
 import 'reactjs-popup/dist/index.css';
 


// const List = () => {
//   const navigate = useNavigate();
  
  //  const id = useParams().id;
//   const [userData, setUserData] = useState(null);

//   const callAboutPage = async () => {
 
//     try {
//       const res = await fetch("/getUser", {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       const data = await res.json();
//       console.log(data);
//       setUserData(data);
//       if (!res.status === 200) { 
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     callAboutPage();
//   }, []);

//   function onLinkClick(e) {
 
//     e.preventDefault();
//        navigate(`/attendance/${localStorage.getItem("id")}`);
//  }
//   function onLogin(e) {
 
//     e.preventDefault();
//        navigate('/login')
//  }



















//       {/* {userData.map((person) => {
//         const { name, designation , profileImage , email } = person;
    
//         return (
          //     <div className="card" key={email}  >
          //     <div className="card-body">
          //       <img src={profileImage} className="card-img-top" alt="..."></img>
          //     <h4 className="card-title">{name}</h4>
          //     <p className="card-text">{designation}</p>
          //     <p className="card-text">{email}</p>
          //     <button onClick={onLinkClick} >attendance</button>
          //   </div>
          // </div>

//         );
        
//       })} */}

//  {/* { id == localStorage.getItem("id") &&
// <div  className='pop'>
//   <Popup  open={id !== localStorage.getItem("id")} position="right center">
//     <h1 className='size'>Login please !!</h1>
//   </Popup>
//   <button className='bt-bhuvi' onClick={onLogin}>Go to login page</button>
//   </div>

// } */}

//     </>
//   );
// };

// export default List;



import React, { useEffect, useState } from "react";
import "./List.css"
import { useNavigate , useParams } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
 
  const [userData, setUserData] = useState(null);
  const id = useParams().id;

  function onLinkClick(e) {
    e.preventDefault();
    navigate(`/attendance/${localStorage.getItem("id")}`);
 }



  function onLogin(e) {
 
    e.preventDefault();
       navigate('/login')
 }





  const callAboutPage = async () => {
 
    try {
      const res = await fetch("/getUser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) { 
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="about-container">
      {userData !== null ? (
        userData.map((user) => (
          <div className="card" key={user.email}  >
              <div className="card-body">
                <img src={user.profileImage} className="card-img-top" alt="..."></img>
              <h4 className="card-title">{user.name}</h4>
              <p className="card-text">{user.designation}</p>
              <p className="card-text">{user.email}</p>
              <button onClick={onLinkClick} >attendance</button>
            </div>
          </div>

        ))
      ) : (
        <div>Loading posts...</div> 
      )}
     

  { id == localStorage.getItem("id") &&
<div  className='pop'>
  <Popup  open={id !== localStorage.getItem("id")} position="right center">
    <h1 className='size'>Login please !!</h1>
  </Popup>
  <button className='bt-bhuvi' onClick={onLogin}>Go to login page</button>
  </div>

}  







    </div>
  );
};

export default List;