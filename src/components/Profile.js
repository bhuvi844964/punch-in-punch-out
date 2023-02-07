import React  from "react";
import './profile.css'
import attend from '../components/data/attendance.json'


const Profile = () => {

            console.log(attend)

  return (
    <>
    {attend.map((person) => {
        const { id, Date ,PunchIn ,PunchOut} = person;
        return (
          <div className="container">
           <h1>{id}</h1>
              <table className="rwd-table">
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
