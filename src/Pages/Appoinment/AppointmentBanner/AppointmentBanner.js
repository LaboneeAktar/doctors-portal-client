import bgImage from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="mb-16">
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img
            src={chair}
            className="rounded-lg lg:w-1/2 w-full shadow-2xl"
            alt="Dentist Chair"
          />
          <div className="lg:px-16">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p className="font-semibold text-center lg:pt-5">
              You Selected Date: {format(selectedDate, "PP")}.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentBanner;
