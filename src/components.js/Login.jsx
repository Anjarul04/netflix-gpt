import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ad4b96d8-547c-4811-a738-9fd4d93731c5/web/IN-en-20250721-TRIFECTA-perspective_f34fb505-ef25-45d9-9aab-03cb2474de75_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 p-12 absolute bg-black/85 my-34 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-4xl py-4 mx-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px] "
          type="text"
          placeholder="Full Name"
        />}
        <input
          className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px] "
          type="text"
          placeholder="Email Address"
        />
        <input
          className="py-4 my-3 w-10/12 mx-6  border border-gray-500 pl-4 rounded-[4px]"
          type="password"
          placeholder="password"
        />
        <button className="py-2 my-3 w-10/12 mx-6  pl-2 rounded-[4px] bg-red-500 cursor-pointer">
          {isSignInForm? "Sign In": "Sign Up"}
        </button>
        <p className="mx-6 py-4 text-lg text-gray-400 ">
          {isSignInForm ? "New to Netflix" : "Already have an account"}?
          <button className="hover:underline cursor-pointer text-white" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign up now." : "Sign in now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
