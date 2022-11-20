import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import NotFound from "../assets/NotFound.svg";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="error-container">
        <div style={{ fontSize: "3rem", textAlign: "center" }}>
          <p>
            {" "}
            <span style={{ color: "red" }}>Oops !! </span>Looks like this is not
            the place where you want to be.
          </p>

          <Button variant="contained" onClick={() => navigate("/")}>
            Back To Home
          </Button>
        </div>

        <img
          src={NotFound}
          alt="404"
          style={{ width: "50%", marginTop: "2rem", marginLeft: "25%" }}
        ></img>
      </div>
    </>
  );
};

export default Error404;
