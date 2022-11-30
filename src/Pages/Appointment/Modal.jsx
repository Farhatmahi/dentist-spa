import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Modal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);
  const { name, slots, price } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const fullname = form.fullname.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      slot,
      fullname,
      phone,
      email,
      price
    };

    fetch("http://localhost:5002/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          console.log(data);
          setTreatment(null); //the modal will auto off when the treatment is set to null.
          toast.success("Booking confirmed");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="mt-10 grid grid-cols-1 gap-3"
          >
            <input
              type="text"
              value={date}
              className="input input-bordered w-full"
              disabled
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              className="input input-bordered w-full"
              defaultValue={user?.displayName}
            />
            <input
              type="Phone number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              required
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white transition-all duration-500 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 bg-pos-0 hover:bg-pos-100"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
