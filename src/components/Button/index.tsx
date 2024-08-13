import React from "react";

interface ButtonProps {
  heading: string;
}

const Button: React.FC<ButtonProps> = ({ heading }) => {
  return <div>{heading}</div>;
};

export default Button;
