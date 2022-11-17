import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppoinments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const date = format(selectedDate, "PP");

  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data))
  //     .catch((error) => console.error(error));
  // }, [date]);

  return (
    <section>
      <p className="text-center text-secondary text-xl font-semibold mb-10">
        Available Appointments on {format(selectedDate, "PP")}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appointmentOptions.map((option, idx) => (
          <AppointmentOption
            key={idx}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppoinments;
