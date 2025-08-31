import clsx from "clsx";

export default function Button({
  text,
  onClick,
  type = "button",
  color = "blue", // Default
}) {
  const colorVariants = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    yellow: "bg-yellow-600 hover:bg-yellow-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-2 px-4 rounded-lg transition duration-200",
        colorVariants[color] || colorVariants.blue
      )}
    >
      {text}
    </button>
  );
}
