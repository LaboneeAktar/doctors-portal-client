import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, googleSignIn, resetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleResetPassword = () => {
    const userEmail = getValues("email");
    resetPassword(userEmail)
      .then(() => toast.success("Send Email for Reset. Please Check it."))
      .catch((error) => console.error(error));
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
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              {...register(
                "password"
                /*  , {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 Character",
                },
              } */
              )}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <button onClick={handleSubmit(handleResetPassword)}>
                <span className="label-text">Forget Password?</span>
              </button>
            </label>

            {errors.password && (
              <p className="text-rose-700">{errors.password?.message}</p>
            )}
          </div>
          <div>
            {loginError && <p className="text-rose-700">{loginError}</p>}
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
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
