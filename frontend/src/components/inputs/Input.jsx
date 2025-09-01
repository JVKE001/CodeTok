const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input-dark"
    />
  );
};

export default Input;
