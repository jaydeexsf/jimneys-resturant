// import React, { createContext, useState, useEffect } from 'react';
// import { auth, firestore } from '../firebase'; // Adjust to your Firebase config file path
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';

// export const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         try {
//           // Fetch user document
//           const userRef = doc(firestore, 'users', user.uid);
//           const userSnapshot = await getDoc(userRef);

//           if (userSnapshot.exists()) {
//             setCurrentUser({ ...user, ...userSnapshot.data() });
//           } else {
//             setCurrentUser(user);
//           }
//         } catch (error) {
//           console.error("Error fetching user data:", error.message);
//         }
//       } else {
//         setCurrentUser(null);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <GlobalContext.Provider value={{ currentUser, loading }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
