import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className=" w-full md:w-2xl md:mx-auto md:border md:h-[90vh] md:my-10 rounded-2xl border-gray-200 h-screen bg-[url(https://images.unsplash.com/photo-1624724126923-e2c021df1311?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)]  bg-cover bg-center flex flex-col justify-between bg-red-900 pt-8  ">
        <img
          className="w-20 ml-9"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="no image"
        />
        <div className="bg-white text-center px-8 py-6 ">
          <h2 className="text-2xl font-bold mb-5 ">Get started with Uber</h2>
          <NavLink
            to="/login"
            className=" flex items-center justify-center w-full bg-black px-4 py-3 text-white font-semibold text-xl cursor-pointer rounded-md "
          >
            Continue
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
