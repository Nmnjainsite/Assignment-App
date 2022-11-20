import React, { useEffect } from "react";
import { UserAuth } from "../Context/auth-context";
import { useNavigate } from "react-router-dom";

const Account = () => {
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
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default Account;
