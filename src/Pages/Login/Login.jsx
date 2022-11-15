import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  
  const handleLogin = data => {
    console.log(data);
  }

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
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password")}
            />
            <label className="label">
              <span className="label-text text-xs">Forget Password?</span>
            </label>
          </div>
          <input type="submit" className="btn btn-accent w-full my-4" />
        </form>
        <p className="text-xs text-center">New to Doctor's Portal? <Link to='/signup' className="text-primary hover:underline">Create a new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full btn-accent">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
