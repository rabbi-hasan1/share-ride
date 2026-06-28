import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/api";
import { useAuth } from "../hooks/useAuth";
function CaptainSignup() {
  const [error, setError] = useState("");

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleCaptainSignUp = async (formData) => {
    const newUser = {
      fullname: {
        firstname: formData?.firstname,
        lastname: formData?.lastname,
      },
      email: formData?.email,
      password: formData?.password,
      vehicle: {
        color: formData?.color,
        plate: formData?.plate,
        capacity: formData?.capacity,
        vehicleType: formData?.vehicleType,
      },
    };

    try {
      const response = await api.post("/captains/register", newUser);
      if (response.status === 201) {
        setAuth(response.data.user);
        localStorage.setItem("token", response?.data?.token);
        navigate("/captain-login");

        reset();
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        setError("Server is not responding.");
      } else {
        setError("Something went wrong.");
      }
    }

    console.log(newUser);
  };
  return (
    <div className="min-h-screen flex  py-12 flex-col items-center  justify-between bg-white px-4">
      {error && <p className="text-red-400 ">{error}</p>}
      <form
        onSubmit={handleSubmit(handleCaptainSignUp)}
        className="w-full max-w-md md:border md:border-gray-200 rounded-lg p-7 "
      >
        <img
          className=" w-28 -mt-5"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber"
        />

        <h3 className="text-xl font-semibold mb-3">Whats our captain name ?</h3>

        <div className="w-full flex justify-between gap-5">
          <div>
            <input
              type="text"
              placeholder="frist name"
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full  py-2 rounded"
              {...register("firstname", {
                required: "first name is required ",
              })}
            />
            {errors.firstname && (
              <p className="text-red-400 text-base py-1">
                {errors?.firstname?.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="last name"
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full py-2 rounded"
              {...register("lastname", { required: "last name is required" })}
            />
            {errors?.lastname && (
              <p className="text-red-400 text-base py-1">
                {errors?.lastname?.message}
              </p>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold my-3">
          Whats our captain email ?
        </h3>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          className="text-xl font-medium bg-[#eeeeee] px-4 py-2 w-full  rounded"
          {...register("email", { required: "email is required" })}
        />
        {errors?.email && (
          <p className="text-red-400 text-base py-1">
            {errors?.email?.message}
          </p>
        )}
        <h3 className="text-xl font-semibold my-3">Enter Password</h3>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="*******"
          className="text-xl font-medium bg-[#eeeeee] px-4 py-2 w-full rounded"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "password must be at least 6 charaters",
            },
          })}
        />
        {errors?.password && (
          <p className="text-red-400 text-base py-1">
            {errors?.password?.message}
          </p>
        )}

        <h3 className="text-xl font-semibold my-3">Vehicle Infromation</h3>
        <div className="w-full flex justify-between gap-5 mb-5">
          <div>
            <input
              type="text"
              placeholder="Vehicle color"
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full  py-2 rounded"
              {...register("color", { required: "Vehicle color is required" })}
            />
            {errors?.color && (
              <p className="text-red-400 text-base py-1">
                {errors?.color?.message}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Vehicle plate"
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full  py-2 rounded"
              {...register("plate", { required: "Vehicle plate is required" })}
            />
            {errors?.plate && (
              <p className="text-red-400 text-base py-1">
                {errors?.plate?.message}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between gap-5">
          <div>
            <input
              type="text"
              placeholder="Vehicle capacity"
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full  py-2 rounded"
              {...register("capacity", {
                required: "Vehicle capacity is required",
                valueAsNumber: true,
              })}
            />
            {errors?.capacity && (
              <p className="text-red-400 text-base py-1">
                {errors?.capacity?.message}
              </p>
            )}
          </div>
          <div>
            <select
              className="text-xl font-medium bg-[#eeeeee] px-4 w-full py-2 rounded"
              {...register("vehicleType", {
                required: "Vehicle type is required",
              })}
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>

            {errors.vehicleType && (
              <p className="text-red-400 text-base py-1">
                {errors.vehicleType.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className=" text-white my-8 bg-black px-4 py-2.5 text-xl font-semibold border border-gray-300 rounded-2xl w-full cursor-pointer "
        >
          Create Account
        </button>
        <p className="-mt-7 ml-2 ">
          Already have an account ?{" "}
          <Link className="underline text-orange-400" to="/captain-login">
            login here
          </Link>
        </p>
      </form>
      <p className="text-base leading-5 md:w-[50%]  mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis hic
        sequi, laborum ipsa, iste dignissimos labore sit aperiam
      </p>
    </div>
  );
}

export default CaptainSignup;
