import React, { useEffect } from "react";
import "./Signup.css";
import { UserAuth } from "../Context/auth-context";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div>
      <div className="signup-page">
        <h1>Create Your Own Products Here</h1>
        <button onClick={handleGoogleSignIn} className="login-google">
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
