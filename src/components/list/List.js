import React from 'react';
import "./List.css"
import { useNavigate  } from 'react-router-dom';


const List = ({ people }) => {
  const navigate = useNavigate();

  function onLinkClick(e) {
    e.preventDefault();
       navigate("/attendance/:id");
 }


  return (
    <>
      {people.map((person) => {
        const { id, name, designation , image } = person;
        return (
              <div className="card" key={id} style={{width: "20rem"  }} >
              <div className="card-body">
                <img src={image} className="card-img-top" alt="..."></img>
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{designation}</p>
              <button onClick={onLinkClick} >attendance</button>
            </div>
          </div>

        );
      })}
    </>
  );
};

export default List;