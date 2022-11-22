import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5002/appointmentSpeciality");
      const data = res.json();
      return data;
    },
  });

  const imagebb = process.env.REACT_APP_imgbb;

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imagebb}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData)
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.speciality,
            image: imgData.data.url,
          };
          //save doctor information to the db
          fetch("http://localhost:5002/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is assigned as a new doctor`);
              navigate("/dashboard/manage-doctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-96">
      <h2 className="text-3xl mb-4">Add a doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
            <span className="label-text">Speciality</span>
          </label>
          <select
            {...register("speciality", { required: "Speciality is required" })}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Pick a Speciality
            </option>
            {specialities.map((speciality) => (
              <option key={speciality._id}>{speciality.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", { required: "Photo is required" })}
          />
          {errors.img && (
            <p role="alert" className="text-error text-xs mt-2">
              {errors.img?.message}
            </p>
          )}
        </div>
        <input
          type="submit"
          value="Add Doctor"
          className="btn btn-accent w-full my-4"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
