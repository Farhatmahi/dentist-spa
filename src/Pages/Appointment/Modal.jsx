import React from "react";
import { format } from "date-fns";

const Modal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
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
          <form action="" className="mt-10 grid grid-cols-1 gap-3">
            <input
              type="text"
              value={format(selectedDate, "PP")}
              className="input input-bordered w-full"
              disabled
            />
            <select className="select select-bordered w-full">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
            />
            <input
              type="Phone number"
              placeholder="Phone number"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="email"
              className="input input-bordered w-full"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-center w-full "
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
