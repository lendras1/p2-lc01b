import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import releaseImage from "./public/release-1.png";

function LoginPage() {
  const navigate = useNavigate();


  const handleNavigation = () => {
    navigate('/register');
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  async function handleLoginForm(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://api.p2.slc1.foxhub.space/login",
        data: input,
      });

      console.log(response);
      localStorage.token = response.data.access_token;
      localStorage.email = response.data.email;
      localStorage.role = response.data.role;
      localStorage.username = response.data.username;
      toast.success("Login success");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <>
      <div className="h-screen w-1/2 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-1/2 border-2 rounded-lg p-5 flex flex-col items-center bg-white justify-center space-y-3 shadow-2xl">
          <div className="text-center">
            <h1 className="text-xl tracking-tight font-semibold">Login </h1>
       
          </div>

          <form
            onSubmit={handleLoginForm}
            action=""
            className="flex flex-col w-full gap-2"
          >
            <label htmlFor="" className="tracking-tight font-semibold">
              Email
            </label>
            <input
              onChange={handleChangeInput}
              name="email"
              type="email"
              placeholder="Input your email"
              className="py-2 px-4 border-2 rounded-lg"
            />
            <label htmlFor="" className="tracking-tight font-semibold">
              Password
            </label>
            <input
              onChange={handleChangeInput}
              name="password"
              type="password"
              placeholder="Input your password"
              className="py-2 px-4 border-2 rounded-lg"
            />

            <button className="mt-5 py-2 px-4 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800 text-white">
              Sign In
            </button>
          </form>

          <button
            onClick={handleNavigation}
            className="bg-transparent text-black font-semibold py-2 px-4 rounded hover: bg-white transition duration-100 text-end w-full"
    >
            Create New Account
            </button> 

         
           
        </div>
       
       
      </div>
      

      <div className="w-1/2">
        <img src={releaseImage} alt="login picture" className="object-cover w-full h-full" />
      </div>


      

    </>
  );
}

export default LoginPage;
