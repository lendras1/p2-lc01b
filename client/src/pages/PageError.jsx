import TextH1 from "../components/TextH1";
import img404 from "../assets/img_404.png";

function PageError() {
  return (
    <>
    <div  className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500" >     
      <div className="flex  flex-col justify-center items-center h-[calc(100vh-60px)]">
        <img src={img404} alt="" className="h-60 w-56 pb-4" />
        <TextH1 text="Page not found!" />
        <a href="/" className="mt-6 text-white underline">
          Back to Home Page
        </a>
      </div>
    </div>
    </>
  );
}

export default PageError;
