import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextH1 from "../components/TextH1";

function HomePage() {
 
  const navigate = useNavigate();
 
  function logout() {
    localStorage.clear();
    toast.success("Logout success");
    navigate("/login");

  }
  return (
    <>
      <div className="text-white h-screen w-screen flex flex-col  justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <TextH1 text="Welcome ..." className="py-6"/>
        <button
          onClick={logout}
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800 text-white"
        >
          Logout
        </button>
      </div>
    </>
  );

}



export default HomePage;
