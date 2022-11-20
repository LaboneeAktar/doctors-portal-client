import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="lg:mx-32 lg:my-32">
      <p className="text-red-500">Something went wrong!!!</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        {" "}
        Please{" "}
        <button onClick={handleLogOut} className="text-primary">
          Logout
        </button>{" "}
        and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
