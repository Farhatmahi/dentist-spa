import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";

const ManageDoctors = () => {
  //   const [doctors, setDoctors] = useState();
  //   useEffect(() => {
  //     fetch("http://localhost:5002/doctors")
  //       .then((res) => res.json())
  //       .then((data) => setDoctors(data));
  //   }, []);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5002/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("access-token")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const closeModal = () => {
    setDeletingDoctor(null);
  };


  const handleDeleteDoctor = doctor => {
    // console.log(doctor)
    fetch(`http://localhost:5002/doctors/${doctor._id}`, {
        method : "DELETE",
        header : {
            authorization : `bearer ${localStorage.getItem('access-token')}`
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
            refetch()
            toast.success(`Dr. ${doctor.name} deleted successfully`)
        }
        
    })

  }

  return (
    <div>
      <h2 className="text-3xl mb-4">Manage Doctors</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._key}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={doctor.image} alt="doctor" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.speciality}</td>
                <td>
                  {/* The button to open modal */}
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="my-modal"
                    className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete Dr. ${
            deletingDoctor.name.split(" ")[0]
          }, it cannot be undone`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction = {handleDeleteDoctor}
          modalData = {deletingDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
