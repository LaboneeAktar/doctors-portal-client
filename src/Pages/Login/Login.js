import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 bg-base-200 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-rose-700">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 Character",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>

            {errors.password && (
              <p className="text-rose-700">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full my-5"
            value="Login"
            type="submit"
          />
        </form>
        <p>
          New to Doctors Portal?{" "}
          <Link className="text-secondary" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
