import clsx from "clsx";

const Button = ({
  text,
  onClick,
  type = "button",
  color = "blue",
  size = "md",
  variant = "solid",
  className,
}) => {
  // Solid buttons
  const solidVariants = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    red: "bg-red-600 hover:bg-red-700 text-white",
    yellow: "bg-yellow-600 hover:bg-yellow-700 text-black",
  };

  // Outline buttons
  const outlineVariants = {
    blue: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    green: "border border-green-600 text-green-600 hover:bg-green-50",
    red: "border border-red-600 text-red-600 hover:bg-red-50",
    yellow: "border border-yellow-600 text-yellow-600 hover:bg-yellow-50",
  };

  // Ghost buttons
  const ghostVariants = {
    default: "hover:underline",
  };

  // Sizes (only for solid/outline)
  const sizeVariants = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Variant logic
  const variantStyles = {
    solid: solidVariants[color],
    outline: outlineVariants[color],
    ghost: ghostVariants.default,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "transition duration-500 font-medium cursor-pointer",
        variant !== "ghost" && sizeVariants[size],
        variantStyles[variant] || solidVariants.blue,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
