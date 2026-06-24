import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function UserSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleUserSignUp = (formdata) => {
    console.log(formdata);
    reset();
  };
  return (
    <div className="min-h-screen flex  py-12 flex-col items-center  justify-between bg-white px-4">
      <form
        onSubmit={handleSubmit(handleUserSignUp)}
        className="w-full max-w-md md:border md:border-gray-200 rounded-lg p-7 "
      >
        <img
          className=" w-28 -mt-5"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber"
        />
        <h3 className="text-xl font-semibold mb-3">Whats your name ?</h3>

        <div className="w-full flex justify-between gap-5">
          <div>
            <input
              type="text"
              placeholder="frist name"
              className="text-xl w-full font-bold bg-[#eeeeee] px-4  py-2 rounded"
              {...register("firstname", {
                required: "first name is must be required",
              })}
            />
            {errors?.firstname && (
              <p className="text-red-400">{errors?.firstname?.message}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="last name"
              className="text-xl  font-bold bg-[#eeeeee] px-4 w-full py-2 rounded"
              {...register("lastname", {
                required: "last name is must be required",
              })}
            />
            {errors?.lastname && (
              <p className="text-red-400">{errors?.lastname?.message}</p>
            )}
          </div>
        </div>

        <h3 className="text-xl font-semibold my-3">Whats your Email ?</h3>
        <input
          type="email"
          placeholder="Enter email"
          id="email"
          name="email"
          className="text-xl font-bold bg-[#eeeeee] px-4 py-2 w-full  rounded"
          {...register("email", { required: "email is required" })}
        />
        {errors?.email && (
          <p className="text-red-400">{errors?.email?.message}</p>
        )}
        <h3 className="text-xl font-semibold my-3">Password</h3>
        <input
          type="password"
          id="password"
          name="password"
          className="text-xl bg-[#eeeeee] px-4 py-2 w-full rounded"
          {...register("password", {
            required: "password is must be required",
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
        />
        {errors?.password && (
          <p className="text-red-400">{errors?.password?.message}</p>
        )}
        <button
          type="submit"
          className=" text-white my-8 bg-black px-4 py-2.5 text-xl font-semibold border border-gray-300 rounded-2xl w-full "
        >
          Create Account
        </button>
        <p className="-mt-7 ml-2 ">
          Already have an account ?{" "}
          <Link className="underline text-orange-400" to="/login">
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

export default UserSignup;
