import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  
  const handleOnClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsbuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsbuscribe();
  }, []);

  const handleGptSearch = ()=>{
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (
  <div className="absolute top-0 left-0 w-screen flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/90 to-transparent z-50">
    {/* Logo */}
    <img className="w-36 cursor-pointer" src={LOGO} alt="Netflix Logo" />

    {/* Right Section */}
    {user && (
      <div className="flex items-center space-x-2">
        {showGptSearch && <select className="p-2 m-2 bg-gray-900 cursor-pointer text-white rounded-sm border border-red-600 " onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifire} value={lang.identifire}> {lang.name}</option>)}
        </select>}
        {/* Profile Image */}
        <button className="px-4 py-2 mx-4 my-2 bg-red-500 font-bold text-white rounded-lg cursor-pointer" onClick={handleGptSearch}>{showGptSearch?"Home":"GPT Search"}</button>
        <img
          className="w-10 h-10 rounded-md border-2 border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-300"
          src={user?.photoURL}
          alt="profile"
        />

        {/* Sign Out Button */}
        <button
          className="text-white cursor-pointer font-bold"
          onClick={handleOnClick}
        >
          (Sign Out)
        </button>
      </div>
    )}
  </div>
);
}

export default Header;
