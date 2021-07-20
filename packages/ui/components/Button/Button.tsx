import React, { FC } from "react";

export type ButtonProps = {
  type?: "button" | "reset";
};

export const Button: FC<ButtonProps> = ({ children, type }) => {
  return (
    <button type={type} className="p-1">
      {children}
    </button>
  );
};
