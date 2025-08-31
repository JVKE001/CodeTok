import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthForm from "../components/forms/AuthForm";

export default function Login() {
  const navigate = useNavigate();

  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
  ];

  const handleLogin = async (formData) => {
    try {
      const response = await loginUser(formData);
      toast.success("Login successful");
      console.log("Login success:", response.data);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  // Buttons

  const buttons = [
    {
      text: "Login",
      type: "submit",
      color: "blue",
    },
    {
      text: "Create Account",
      type: "button",
      color: "green",
      onClick: () => navigate("/register"),
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <AuthForm fields={fields} onSubmit={handleLogin} buttons={buttons} />
    </div>
  );
}
