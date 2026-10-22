"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import DateReserve, {
  DateReserveValue,
  emptyReservation,
} from "@/components/DateReserve";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [reservation, setReservation] =
    useState<DateReserveValue>(emptyReservation);

  const makeBooking = () => {
    if (
      !reservation.nameLastname ||
      !reservation.tel ||
      !reservation.venue ||
      !reservation.bookDate
    ) {
      return;
    }
    dispatch(
      addBooking({
        nameLastname: reservation.nameLastname,
        tel: reservation.tel,
        venue: reservation.venue,
        bookDate: reservation.bookDate.format("YYYY/MM/DD"),
      }),
    );
    setReservation(emptyReservation());
  };

  return (
    <main className="w-full max-w-4xl p-5">
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>
      <Box component="form" className="flex flex-col gap-4">
        <DateReserve value={reservation} onChange={setReservation} />
        <Button name="Book Venue" variant="contained" onClick={makeBooking}>
          Book Venue
        </Button>
      </Box>
    </main>
  );
}
