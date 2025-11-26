import React from "react";

// Use Generic Type to get default props of button element
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Union Type
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  ...props // Rest operator
}: ButtonProps) => {
  // Logic to select class based on variant/size (practice using Template Literal or library such as clsx/tailwind-merge will be great)
  const baseStyle =
    "px-4 py-2  rounded-lg font-medium transition-colors duration-200 focus:outline-none";
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};
