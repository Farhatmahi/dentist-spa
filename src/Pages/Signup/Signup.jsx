import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hook/useToken/useToken";


const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const [email, setEmail] = useState('')


  const [token] = useToken(email)
  if(token){
    navigate('/')
  }

  const handleSignUp = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        toast("User created successfully!");
        const user = res.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then((result) => {
            saveUserToDB(data.name, data.email);
          })
          .catch((err) => {});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveUserToDB = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5002/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail(email)
      });
  };



  return (
    <div className="flex flex-col justify-center items-center md:my-20 w-[90%] mx-auto">
      <div className="w-84 md:w-96 p-7 md:shadow-lg rounded-lg">
        <h1 className="text-xl text-center">Sign up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p role="alert" className="text-error text-xs mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
                  message: "Password must be strong",
                },
              })}
            />
            {errors.password && (
              <p role="alert" className="text-error text-xs mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input type="submit" className="btn btn-accent w-full my-4" />
        </form>
        <p className="text-xs text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
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

export default Signup;
