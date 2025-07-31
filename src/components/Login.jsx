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
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: default_profile,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in user
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 p-12 absolute bg-black/85 my-28 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-4xl py-4 mx-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px] "
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px] "
          type="text"
          placeholder="Email Address"
        />

        <input
          ref={password}
          className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px]"
          type="password"
          placeholder="password"
        />
        <p className="mx-6 text-red-400">{errMessage}</p>
        <button
          onClick={handelButtonClick}
          className="py-2 my-3 w-10/12 mx-6  pl-2 rounded-[4px] bg-red-500 cursor-pointer"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-6 py-4 text-lg text-gray-400 ">
          {isSignInForm ? "New to Netflix" : "Already have an account"}?
          <span
            className="hover:underline cursor-pointer text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign in now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
