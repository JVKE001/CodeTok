import clsx from "clsx";

const Button = ({
  text,
  onClick,
  type = "button",
  color = "primary",
  size = "md",
  variant = "solid",
  className,
}) => {
  const styles = {
    solid: {
      primary: "bg-primary text-white hover:brightness-90",
      secondary: "bg-secondary text-white hover:brightness-90",
      dark: "bg-dark text-white hover:brightness-90",
      gray: "bg-gray text-white hover:brightness-90",
    },
    outline: {
      primary: "border border-primary text-primary hover:bg-primary/10",
      secondary: "border border-secondary text-secondary hover:bg-secondary/10",
      dark: "border border-dark text-dark hover:bg-dark/10",
      gray: "border border-gray text-gray hover:bg-gray/10",
    },
    ghost: {
      default: "hover:underline",
    },
  };

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "transition duration-300 font-medium",
        variant !== "ghost" && sizes[size],
        styles[variant][color] || styles[variant].default,
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
