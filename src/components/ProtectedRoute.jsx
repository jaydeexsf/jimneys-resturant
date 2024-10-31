import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

function ProtectedRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unauthorized, setUnauthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.email === 'mojohannes06@gmail.com') {
          setIsAdmin(true);
        } else {
          setUnauthorized(true);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (unauthorized) {
    return (
      <div className="text-3xl flex flex-col justify-cente items-center text-red-600 bg-black min-h-screen">
        <span>You are not the admin</span>
        <Link to="/login" className="text-sky-600 text-[20px] mt-8 underline hover:text-sky-500">Login here</Link>
      </div>
    );
  }
  return isAdmin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
