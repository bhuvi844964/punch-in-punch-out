import React  from "react";
import './profile.css'
import attend from '../data.json'


const Profile = () => {

            console.log(attend)

  return (
    <>
    {attend.map((person) => {
        const { id, name,Date ,PunchIn ,PunchOut} = person;
        return (
          <div className="container">
           <h1>{name}</h1>
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>In Time</th>
                    <th>Out Time</th>
                  </tr>
                    <tr>
                    <td data-th="Invoice Date">{Date}</td>
                    <td data-th="Due Date">{PunchIn}</td>
                    <td data-th="Net Amount">{PunchOut}</td>
                  </tr>
                </tbody>
              </table>
            </div>
     ) }
    )}
    </>
  );
};

export default Profile;
