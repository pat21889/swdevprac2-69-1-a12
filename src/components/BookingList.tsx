"use client";

import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();

  if (bookItems.length === 0) {
    return <div className="p-5 text-gray-900">No Venue Booking</div>;
  }

  return (
    <div className="flex flex-col gap-3 p-5">
      {bookItems.map((item) => (
        <div
          key={`${item.venue}-${item.bookDate}`}
          className="flex flex-col gap-1 rounded-md bg-white p-4 text-gray-900 shadow"
        >
          <div>Name-Lastname: {item.nameLastname}</div>
          <div>Contact-Number: {item.tel}</div>
          <div>Venue: {item.venue}</div>
          <div>Date: {item.bookDate}</div>
          <Button
            name="Cancel Booking"
            variant="outlined"
            color="error"
            className="w-fit"
            onClick={() => dispatch(removeBooking(item))}
          >
            Cancel Booking
          </Button>
        </div>
      ))}
    </div>
  );
}
