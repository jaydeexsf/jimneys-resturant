import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase'; // Import Firebase config
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';

function Login() {
  // State to store user information
  const [user, setUser] = useState(null);

  // Providers for Google, Facebook, and Twitter
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // Sign-in handlers
  const handleSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Store user info after sign-in
    } catch (error) {
      alert(error.message);
    }
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="h-screen flex mt-[-100px] flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <h1 className='text-xl lg:text-3xl font-semibold md:absolute top-[200px] left-[50%] md:translate-x-[-50%]'>Proceed If You Are Admin</h1>
      <div className="md:w-1/3 max-w-sm hidden md:block">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left gap-2 flex flex-col items-center justify-center space-x-2">
          {/* <label className="mr-1">Sign in with</label> */}

          {/* Google Sign-In Button */}
          <button
            onClick={() => handleSignIn(googleProvider)}
            type="button"
            className="ml-2 py-[23px] px-2 bg-green-50 border-gray-400 border-[1px] rounded-md items-center h-9 w-[300px] flex justify-betwee gap-4 bg- hover:bg-gray-300 text-white shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.3 0 5.9 1.1 8.2 3.4l6.1-6.1C34.7 3.5 29.8 1.5 24 1.5 14.5 1.5 6.5 7.5 3.3 16.1l7.6 5.9C12.7 13.7 17.7 9.5 24 9.5z" />
              <path fill="#34A853" d="M24 44.5c5.8 0 10.6-2 14.1-5.5l-6.8-5.4c-2.1 1.4-4.6 2.1-7.3 2.1-5.6 0-10.3-3.6-12-8.5l-7.4 5.7c3.6 7.6 11.3 13.1 20.1 13.1z" />
              <path fill="#FBBC05" d="M4.6 11.6l7.5 5.8C13 13.6 18.2 9.5 24 9.5V1.5C14.4 1.5 6 7.5 4.6 11.6z" />
              <path fill="#EA4335" d="M24 9.5v8h11.5c-.7 4-2.8 7.6-5.5 10.4l7.4 5.7c4.1-3.7 7.6-9.3 7.6-16.1C44.5 14 34.3 9.5 24 9.5z" />
            </svg>
            <span className='text-black'>Continue with google</span>
          </button>

          {/* Facebook Sign-In Button */}
          <button
            onClick={() => handleSignIn(facebookProvider)}
            type="button"
            className="mx- py-[23px] px-2 gap-4 border-gray-400 border-[1px] rounded-md flex items-center justify-betwee h-9 w-[300px] bg-blue-600 hover:bg-blue-700 text-white shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="currentColor" />
            </svg>
            <span className='text-black'>Continue with FaceBook</span>
          </button>

          {/* Twitter Sign-In Button */}
          <button
            onClick={() => handleSignIn(twitterProvider)}
            type="button"
            className="mx-1 h-9 w-[300px] bg-blue-400 flex items-center py-[23px] px-2 gap-4 border-gray-400 border-[1px] rounded-md hover:bg-blue-500 text-white shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="currentColor" />
            </svg>
            <span className='text-black'>Continue with Twitter</span>
          </button>
        </div>

        {/* Conditional rendering based on user role */}
        {user && (
          <div className="mt-4">
            <h3>Welcome, {user.displayName}!</h3>
            {/* Example restricted link */}
            {user.email === 'mojohannes06@gmail.com' ? (
              <Link to="/admin" className="text-blue-500 underline">
                Go To Admin Page
              </Link>
            ): <div className='text-red-600 '>You are not Admin</div>}
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
