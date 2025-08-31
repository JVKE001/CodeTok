import { useState } from "react";
import Button from "../buttons/Button";

export default function AuthForm({ fields, onSubmit, buttons = [] }) {
  /**
   * Initialize formData state
   * -------------------------
   * Uses reduce() to convert the fields array into an object:
   *  - acc (accumulator): the object being built on each iteration
   *  - field: the current field object from the fields array
   * Each field's "name" becomes a key in the object with an empty string as its value.
   * Example:
   *  - fields = [{ name: "email" }, { name: "password "}]
   *  - result = { email: "", password: "" }
   */
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  /**
   * Handle input change
   * -------------------
   * Updates the formData state when a user types in an input.
   *  - e.target.name: the "name" attribute of the input (e.g., "email").
   *  - e.target.value: the current value typed in the input.
   *  - { ...formData }: spread operator copies existing state (ensures immutability).
   *  - [e.target.name]: dynamically selects which field to update.
   * Result: only the changed input field is updated while keeping other values intact.
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handle form submission
   * ----------------------
   * Prevents the browser's default behaviourof reloading the page on form submit.
   * If an onSubmit callback is provided as a prop:
   *  - Calls onSubmit with the current formData object
   * This allows parent components to control what happens with the submitted data
   * (e.g., sending it to an API, saving to state, etc.).
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg shadow-md w-md mx-auto bg-dark"
    >
      {/* Render inputs dynamically */}
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label className="mb-1 font-medium">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required={field.required}
          />
        </div>
      ))}

      {/* Render multiple buttons */}
      <div className="flex gap-2">
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            text={btn.text}
            color={btn.color || "blue"}
            type={btn.type || "button"}
            onClick={(e) => {
              if (btn.type === "submit") return; // normal submit
              if (btn.onClick) btn.onClick(e, formData); // extra actions
            }}
          />
        ))}
      </div>
    </form>
  );
}
