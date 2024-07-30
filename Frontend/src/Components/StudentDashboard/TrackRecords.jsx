import React from 'react'

export default function TrackRecords() {
  return (
    <div>TrackRecords</div>
  )
}


// import React, { useState, useEffect } from 'react';
// import { Table, Spinner, Alert } from 'react-bootstrap';

// export default function TrackRecords() {
//   const [trackRecords, setTrackRecords] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch track records when the component mounts
//     const fetchTrackRecords = async () => {
//       try {
//         const response = await fetch('/portal/track-records');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setTrackRecords(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrackRecords();
//   }, []);

//   if (loading) {
//     return (
//       <div className="text-center">
//         <Spinner animation="border" variant="primary" />
//         <p>Loading track records...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center">
//         <Alert variant="danger">
//           {`Error fetching track records: ${error}`}
//         </Alert>
//       </div>
//     );
//   }

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Track Records</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Test Name</th>
//             <th>Date</th>
//             <th>Score</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {trackRecords.length > 0 ? (
//             trackRecords.map((record, index) => (
//               <tr key={index}>
//                 <td>{record.testName}</td>
//                 <td>{new Date(record.date).toLocaleDateString()}</td>
//                 <td>{record.score}</td>
//                 <td>{record.status}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center">No records found</td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }
