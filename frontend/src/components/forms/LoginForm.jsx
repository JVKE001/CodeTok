import { useState } from "react";

import Input from "../inputs/Input";
import Button from "../buttons/Button";

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="form bg-dark flex justify-between"
      >
        <div className="px-10 w-full ">
          <h1 className="text-center pt-10 pb-5">Log in</h1>
          <div className="w-full mb-4">
            <h3 className="mb-3.5">Email or username</h3>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full mb-4">
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <Button
            text="Forgot password?"
            variant="ghost"
            className="mb-2.5 text-[12px]"
          />
          <Button text="Log in" type="submit" color="gray" className="w-full" />
        </div>
        <div className="bg-gray p-5 border-t border-gray-600 w-full flex justify-center text-sm">
          <p>
            Don't have an account?&nbsp;
            <Button
              text="Sign up"
              variant="ghost"
              className="text-pink-500 text-sm"
            />
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
