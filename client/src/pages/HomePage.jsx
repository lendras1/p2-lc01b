import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  async function fetchData() {
    try {
      const response = await axios({
        url: "https://api.h8-fern.foxhub.space/products",
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });

      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("error fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function logout() {
    localStorage.clear();
    toast.success("Logout success");
    navigate("/login");
  }

  return (
    <>
      <div className="h-screen w-screen flex flex-col  justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
        Ini home
        <button
          onClick={logout}
          className="py-2 px-4 rounded-lg bg-blue-500 text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default HomePage;
