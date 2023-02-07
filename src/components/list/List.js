import React , {useState} from 'react';
import "./List.css"
import { useNavigate , useParams } from 'react-router-dom';


const List = ({ people ,attend }) => {
  const navigate = useNavigate();
  
  const id = useParams().id;
  const [userData, setUserData] = useState(people);

 

  function onLinkClick(e) {
 
    e.preventDefault();
       navigate(`/attendance/${localStorage.getItem(id)}`);
 }


  return (
    <>
      {userData.map((person) => {
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