// import React, { useState } from "react";

// function PunchInOutApp() {
//   const [isPunchedIn, setIsPunchedIn] = useState(false);
//   const [lastPunchTime, setLastPunchTime] = useState(null);

//   function handlePunchInOut() {
//     setIsPunchedIn(!isPunchedIn);
//     setLastPunchTime(new Date());
//   }

//   return (
//     <div>
//       <h1>Punch In/Out App</h1>
//       <p>
//         You are currently{" "}
//         {isPunchedIn ? "punched in" : "punched out"}.
//       </p>
//       {lastPunchTime && (
//         <p>
//           Last punch time:{" "}
//           {new Intl.DateTimeFormat("en-US", {
//             dateStyle: "medium",
//             timeStyle: "short",
//           }).format(lastPunchTime)}
//         </p>
//       )}
//       <button onClick={handlePunchInOut}>
//         {isPunchedIn ? "Punch Out" : "Punch In"}
//       </button>
//     </div>
//   );
// }

// export default PunchInOutApp;

