import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import PrimaryButton from "../../../components/PrimaryButton";

const AllUsers = () => {
  const { data: users = [], refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5002/users");
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5002/users/admin/${id}`, {
        method : "PUT",
        headers : {
            authorization : `bearer ${localStorage.getItem('access-token')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            toast.success("Make admin successfully!")
            refetch(); // it will make changes on the ui instantly
        }
        console.log(data)})
  }

  return (
    <div>
      <h2 className="text-3xl mb-4">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)}><PrimaryButton>Make admin</PrimaryButton></button> }
                </td>
                <td>
                  <button className="btn btn-circle btn-outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
