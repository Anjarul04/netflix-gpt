import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, default_profile } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handelButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: default_profile,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => setErrMessage(error.message));
        })
        .catch((error) => {
          setErrMessage(error.code + "-" + error.message);
        });
    } else {
      // sign in user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        setErrMessage(error.code + " " + error.message);
      });
    }
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URL}
          alt="background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Form Container */}
      <div className="flex-grow flex items-center justify-center px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md p-8 bg-black/80 rounded-lg shadow-lg text-white"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={fullName}
              className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            ref={email}
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            type="text"
            placeholder="Email Address"
          />

          <input
            ref={password}
            className="w-full p-3 mb-4 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            type="password"
            placeholder="Password"
          />

          {errMessage && (
            <p className="text-red-400 text-sm mb-4">{errMessage}</p>
          )}

          <button
            onClick={handelButtonClick}
            className="w-full py-3 bg-red-600 rounded font-semibold hover:bg-red-700 transition duration-300 cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="mt-6 text-gray-400 text-center">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
