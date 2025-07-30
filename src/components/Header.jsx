import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  
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

  return (
    <div className=" absolute py-2 px-8 w-screen flex justify-between  bg-gradient-to-b from-black z-10">
      <img
        className="w-44"
        src= {LOGO}
      />
      {user &&
      <div className="flex">
        <img className="w-12 h-12" src={user?.photoURL} alt="profile" />
        <button className="text-white " onClick={handleOnClick}>
          (sign Out)
        </button>
      </div>}
    </div>
  );
};

export default Header;
