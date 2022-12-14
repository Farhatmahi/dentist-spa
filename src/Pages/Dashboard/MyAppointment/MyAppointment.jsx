import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5002/booking?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl mb-4">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head  */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.fullname}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                {booking.price && !booking.paid && (
                  <Link to={`/dashboard/payment/${booking._id}`}><button className="btn btn-primary bg-gradient-to-r from-primary to-secondary btn-sm text-white">
                  Pay
                </button></Link>
                )}
                {
                  booking.price && booking.paid && <span className="text-primary">Paid</span>
                }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
