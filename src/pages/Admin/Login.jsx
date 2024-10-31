import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase'; // Import Firebase config and Firestore
import { GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // Login icon
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa'; // Social media icons
import { MdCheckCircle } from 'react-icons/md'; // Checkmark icon
import { MdWarning } from 'react-icons/md'; // Warning icon

function Login() {
  const [user, setUser] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate(); // For navigation

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleSignIn = async (provider) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      setUser(loggedInUser);
      checkUserCollection(loggedInUser.email, loggedInUser.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const checkUserCollection = async (email, uid) => {
    try {
      // Check if user exists in 'users' collection
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        // User exists in 'users', redirect to home
        navigate('/');
      } else {
        // User does not exist, prompt to save their info
        setShowPrompt(true);
      }

      // Check if user exists in 'employees' collection
      const employeeDoc = await getDoc(doc(db, 'employees', uid));
      if (employeeDoc.exists()) {
        // User exists in 'employees', redirect to admin page
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error checking user collections:', error);
    }
  };

  const handleEmployeeConfirmation = async () => {
    try {
      if (user) {
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        });
        setMessage('Your information has been saved. Please log in again after your boss has confirmed.');
        setShowPrompt(false);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  useEffect(() => {
    setMessage(null);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="h-screen flex mt-[-100px] flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm hidden md:block">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
      </div>

      <div className="md:w-1/3 max-w-sm">
        {!user && (
          <div className="text-center md:text-left gap-2 flex flex-col items-center justify-center space-x-2">
            <button onClick={() => handleSignIn(googleProvider)} type="button" className="py-[23px] ml-2 px-2 bg-green-50 border-gray-400 border-[1px] rounded-md items-center h-9 w-[300px] flex gap-4 hover:bg-gray-300 text-white shadow-m">
              <FaGoogle size={25} className="text-red-600" />
              <span className="text-black">Continue with Google</span>
            </button>

            <button onClick={() => handleSignIn(facebookProvider)} type="button" className="py-[23px] px-2 border-gray-400 border-[1px] rounded-md flex items-center h-9 w-[300px] bg-blue-600 hover:bg-blue-700 text-white shadow-md gap-4">
              <FaFacebook size={25} className="text-white" /> 
              <span className="text-black">Continue with Facebook</span>
            </button>

            <button onClick={() => handleSignIn(twitterProvider)} type="button" className="py-[23px] px-2 border-gray-400 border-[1px] rounded-md flex items-center h-9 w-[300px] bg-blue-400 hover:bg-blue-500 text-white shadow-md gap-4">
              <FaTwitter size={25} className="text-white" /> 
              <span className="text-black">Continue with Twitter</span>
            </button>
          </div>
        )}

        {user && (
          <div className="mt-[-100px]">
            <h3 className='text-2xl font-semibold'>Welcome, {user.displayName}!</h3>
            {message && (
              <div className='bg-black text-white font-semibold p-4 w-[300px] mt-4 rounded-md h-fit flex justify-center items-center border-gray-500'>
                <MdCheckCircle className="mr-2" /> 
                {message}
              </div>
            )}
            {user.email === 'mojohannes06@gmail.com' ? (
              <Link to="/admin" className="text-blue-500 underline">
                <FiLogIn className="inline mr-1" /> 
                Go To Admin Page
              </Link>
            ) : (
              <div className='text-red-600 '>
                {showPrompt && (
                  <div className="mt-4">
                    <p className="flex items-center">
                      <MdWarning className="mr-2" /> 
                      Are you an employee?
                    </p>
                    <button onClick={handleEmployeeConfirmation} className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 mt-2">
                      <MdCheckCircle className="inline mr-1" /> 
                      Yes
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
