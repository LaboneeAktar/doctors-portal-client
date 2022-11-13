import React from "react";
import { format } from "date-fns";

const AvailableAppoinments = ({ selectedDate }) => {
  return (
    <section>
      <p className="text-center text-secondary text-xl font-semibold">
        Available Appointments on {format(selectedDate, "PP")}.
      </p>
    </section>
  );
};

export default AvailableAppoinments;
