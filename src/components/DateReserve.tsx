'use client'

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export interface DateReserveValue {
  nameLastname: string;
  tel: string;
  venue: string;
  bookDate: Dayjs | null;
}

export const emptyReservation = (): DateReserveValue => ({
  nameLastname: "",
  tel: "",
  venue: "Bloom",
  bookDate: dayjs(),
});

export default function DateReserve({
  value,
  onChange,
}: {
  value: DateReserveValue;
  onChange: (value: DateReserveValue) => void;
}) {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
        value={value.nameLastname}
        onChange={(e) => onChange({ ...value, nameLastname: e.target.value })}
      />
      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
        value={value.tel}
        onChange={(e) => onChange({ ...value, tel: e.target.value })}
      />
      <Select
        id="venue"
        variant="standard"
        value={value.venue}
        onChange={(e) => onChange({ ...value, venue: e.target.value })}
      >
        <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
        <MenuItem value="Spark">Spark Space</MenuItem>
        <MenuItem value="GrandTable">The Grand Table</MenuItem>
      </Select>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value.bookDate}
          onChange={(d) => onChange({ ...value, bookDate: d })}
        />
      </LocalizationProvider>
    </div>
  );
}
