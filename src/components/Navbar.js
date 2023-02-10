import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import { NavLink , useNavigate  } from 'react-router-dom'



const Navbar = ({people}) => {
   
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true)


    function onLinkClickOut() {
   
        localStorage.removeItem('Email');
        localStorage.removeItem('Password');
        localStorage.removeItem('id');
        localStorage.removeItem('date');
        localStorage.removeItem('punchIn');
        localStorage.removeItem('punchOut');
        localStorage.removeItem('session');


     }

        return (
            <>
            {localStorage.getItem('Email') &&
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          
                                <li className="nav-item">
                                    <NavLink onClick={onLinkClickOut}  className="nav-link" to="/Login">Logout</NavLink>
                                </li>
                                
                            </ul>
    
                        </div>
                    </div>
                </nav>
        }
        {!localStorage.getItem('Email')
           
        }
                </>
               ) 
    }


export default Navbar


