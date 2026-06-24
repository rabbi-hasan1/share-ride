import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function CaptainLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleLogin = (formdata) => {
    console.log(formdata);
  };

  return (
    <>
      <div className="min-h-screen flex  py-12 flex-col items-center md:justify-center justify-between bg-white px-4">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="w-full max-w-md md:border md:border-gray-200 rounded-lg p-7 "
        >
          <img
            className=" w-28 -mt-5"
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
            alt="uber"
          />
          <h3 className="text-xl mb-2 font-semibold">What's your Email</h3>

          <input
            className="bg-[#eeeeee] px-4 py-2 mb-5 rounded-md font-semibold text-lg placeholder:text-sm w-full outline-none"
            type="email"
            placeholder="example@gmail.com"
            name="email"
            required
            autoComplete="email"
            {...register("email", { required: "Email is must be required" })}
          />
          {errors?.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}

          <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>

          <input
            className="bg-[#eeeeee] mb-4 px-4 py-2 rounded-md font-semibold text-lg placeholder:text-sm w-full outline-none"
            type="password"
            name="password"
            autoComplete="current-password"
            {...register("password", {
              required: "Password is must be required",
              minLength: {
                value: 6,
                message: "password must me at least 6 charaters",
              },
            })}
          />
          {errors?.password && (
            <p className="text-red-400">{errors.password.message}</p>
          )}
          <button
            className="bg-[#111] cursor-pointer text-white px-4 py-2 rounded-md font-semibold text-lg mb-2 w-full hover:bg-gray-800 transition"
            type="submit"
          >
            Login
          </button>
          <p>
            New here?{" "}
            <Link className="text-blue-600" to="/captain-signup">
              Create a new Account
            </Link>
          </p>
        </form>

        <button
          onClick={() => navigate("/login")}
          className=" -mt-2 md:mt-4 bg-[#10b461] mb-12 cursor-pointer text-white px-6 py-2 rounded-md font-semibold  md:w-full text-lg  w-sm max-w-md"
        >
          Sign in As a User
        </button>
      </div>
    </>
  );
}

export default CaptainLogin;
