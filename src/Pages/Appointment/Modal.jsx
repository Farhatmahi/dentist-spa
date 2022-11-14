import React from "react";
import { format } from "date-fns";

const Modal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault()
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value
  }
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
          <form onSubmit={handleBooking} className="mt-10 grid grid-cols-1 gap-3">
            <input
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full"
              disabled
            />
            <select className="select select-bordered w-full">
              {
                slots.map(slot => <option name="slot" value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="Phone number"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
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
