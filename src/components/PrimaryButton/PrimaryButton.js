import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-normal hover:bg-gradient-to-r hover:from-rose-400 hover:to-rose-700 ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
