import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterPage() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  async function handleRegisterForm(event) {
    event.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "https://api.p2.slc1.foxhub.space/register",
        data: input, // ini adalah mengirim body
      });

      console.log(response);
      

      toast.success("Create New Account success");
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>

<div className="flex">
      <div className="h-screen w-1/2 flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="w-1/2 border-2 rounded-lg p-5 flex flex-col items-center bg-white justify-center space-y-3">
          <div className="text-center">
            <h1 className="text-xl tracking-tight font-semibold">
              Create New Account 
            </h1>
       
          </div>

          <form
            onSubmit={handleRegisterForm}
            className="flex flex-col w-full gap-2"
          >

            <label htmlFor="" className="tracking-tight font-semibold">
              Email
            </label>
            <input
              onChange={handleChangeInput}
              type="email"
              name="email"
              placeholder="Input your email"
              className="py-2 px-4 border-2 rounded-lg"
            />
            <label htmlFor="" className="tracking-tight font-semibold">
              Password
            </label>
            <input
              onChange={handleChangeInput}
              type="password"
              name="password"
              placeholder="Input your password"
              className="py-2 px-4 border-2 rounded-lg"
            />

            <button
              type="submit"
              className="mt-5 py-2 px-4 rounded-lg bg-gradient-to-r from-slate-500 to-slate-800 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-1/2">
        <img src="/assets/release-1.png" alt="login picture" className="object-cover w-full h-screen" />
      </div>

</div>



    </>
  );
}

export default RegisterPage;
