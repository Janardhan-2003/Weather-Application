import React, {useEffect} from "react";
import { auth, provider } from "../firebase/FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = Cookies.get('authToken');
    if(token){
      navigate('/')
    }
  },[])

  const handleGoogleSignIn = async () => {
    try {
      const result =await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user)
      const token = await user.getIdToken();
      Cookies.set("authToken", token, { expires: 7 });
      navigate('/')
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-64 h-80 bg-[#7c7d739d] rounded-2xl border-2 border-[#ffffff9d]">
        <button className="text-slate-900 bg-slate-50 p-2 rounded-2xl px-4 hover:bg-slate-200 cursor-pointer" 
        onClick={handleGoogleSignIn}
        >
          Continue with G
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
