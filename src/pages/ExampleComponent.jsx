// // ExampleComponent.js
// import React from 'react';
// import { useGlobalContext } from './GlobalContext';

// function ExampleComponent() {
//   const { currentUser, loading } = useGlobalContext();

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       {currentUser ? (
//         <div>
//           <p>Welcome, {currentUser.displayName}!</p>
//           {currentUser.isAdmin && <p>You are an admin.</p>}
//         </div>
//       ) : (
//         <p>Please log in.</p>
//       )}
//     </div>
//   );
// }

// export default ExampleComponent;