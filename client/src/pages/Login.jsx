import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useSession();
  const handleLoginSucess = (userData) => {
    console.log("The login user data", userData);
    login(userData);
    if (!userData.isMfaActive) {
      navigate("/setup-2fa");
    } else {
      navigate("/verify-2fa");
    }
  };
  return <LoginForm onLoginSuccess={handleLoginSucess} />;
};

export default Login;
