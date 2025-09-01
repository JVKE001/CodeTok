import LoginForm from "../components/forms/LoginForm";
import { data, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginUser } from "../api/authApi";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const response = await loginUser(data);
      toast.success("Login successful");
      console.log("Login success:", response.data);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login failed:", error.response?.data || error.message);
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
