import React from "react";
import contact from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <div>
      <section
        className="p-16 text-center"
        style={{
          background: `url(${contact})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h4 className="text-lg text-primary">Contact Us</h4>
          <h1 className="text-white text-3xl">Stay Conntected With Us</h1>
        </div>

        <form className="mt-8">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-info w-full max-w-sm mb-3 text-sm"
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info w-full max-w-sm mb-3 text-sm"
          />{" "}
          <br />
          <textarea
            className="textarea textarea-info h-32 w-full max-w-sm mb-3"
            placeholder="Message"
          ></textarea>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
