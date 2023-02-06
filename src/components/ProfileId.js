import React , { useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';

const ProfileId = ({people}) => {

// console.log(people)

const id = useParams().id;

let [product, setProduct] = useState(people)

console.log(product)


console.log(id)

  return (
    <>
  {people && people[0] &&
          <div className="container">
           <h1>{people[0].name}</h1>
              <table class="rwd-table">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>In Time</th>
                    <th>Out Time</th>
                  </tr>
                    <tr>
                    <td data-th="Invoice Date">{people[0].Date}</td>
                    <td data-th="Due Date">{people[0].PunchIn}</td>
                    <td data-th="Net Amount">{people[0].PunchOut}</td>
                  </tr>
                </tbody>
              </table>
            </div>
  }
    </>
  )
}

export default ProfileId





// import React, { useState } from 'react';
// import StudentForm from './form';
// import jsonData from './data.json';
  
// function TableData() {
//   const [studentData, setStudentData] = useState(jsonData);
  
//   const tableRows = studentData.map((info) => {
//     return (
//       <tr>
//         <td>{info.id}</td>
//         <td>{info.name}</td>
//         <td>{info.city}</td>
//       </tr>
//     );
//   });
  
//   const addRows = (data) => {
//     const totalStudents = studentData.length;
//     data.id = totalStudents + 1;
//     const updatedStudentData = [...studentData];
//     updatedStudentData.push(data);
//     setStudentData(updatedStudentData);
//   };
  
//   return (
//     <div>
//       <table className="table table-stripped">
//         <thead>
//           <tr>
//             <th>Sr.NO</th>
//             <th>Name</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>{tableRows}</tbody>
//       </table>
//       <StudentForm func={addRows} />
//     </div>
//   );
// }
  
// export default TableData;








