import React from "react";
import { auth } from "../firebase/FirebaseConfig";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      signOut(auth).then(() => {
        Cookies.remove("authToken");
        navigate("/login");
      });
    } catch (e) {
      console.error("Failed to logout", e);
    }
  };
  return (
    <div className="bg-transparent border-b border-slate-800 text-slate-50 flex items-center justify-between px-4 py-3">
      <div>
        <h1 className="text-2xl font-bold font-serif">Weather</h1>
      </div>
      <div className="flex mx-4 px-4 justify-between items-center">
        <p className="bg-slate-700 w-10 h-10 text-center rounded-full py-1.5 mr-4 font-extrabold text-lg cursor-pointer">
          P
        </p>
        <button
          className="border border-slate-800 w-22 h-10 rounded-xl text-center cursor-pointer hover:border-slate-700"
          type="button"
          onClick={handleLogout}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Navbar;
