import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../useToken/useToken";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [loginUserEmail, setLoginUserEmail] = useState('');
  console.log(loginUserEmail)

  const [token] = useToken(loginUserEmail)
  if(token){
    navigate(from, { replace: true });
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login } = useContext(AuthContext);

  const handleLogin = (data) => {
    setLoginError("");
    // console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast(`Welcome, ${user.displayName}!`);
        console.log(user);
        setLoginUserEmail(data.email)
      })
      .catch((err) => {
        console.log(err.message);
        setLoginError("Incorrect password");
      });
  };

  return (
    <div className="flex flex-col justify-center items-center md:my-20 w-[90%] mx-auto">
      <div className="w-84 md:w-96 p-7 md:shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p role="alert" className="text-error text-xs mt-2">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="text-error text-xs mt-2">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text text-xs">Forget Password?</span>
            </label>
          </div>
          <input type="submit" className="btn btn-accent w-full my-4" />
          <div className="">
            {loginError && (
              <p className="text-error text-xs mb-3">{loginError}</p>
            )}
          </div>
        </form>
        <p className="text-xs text-center">
          New to Doctor's Portal?{" "}
          <Link to="/signup" className="text-primary hover:underline">
            Create a new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full btn-accent">
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
