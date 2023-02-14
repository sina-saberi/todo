import React from 'react';

export interface IButtonProps {
  size?: "sm" | "md" | "bg";
  color?: "success" | "warning" | "error" | "main";
  children?: React.ReactElement | string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<IButtonProps> = ({ onClick, size = "md", color = "main", children }) => {
  const sizes = {
    "sm": "px-2 py-0 text-sm",
    "md": "px-4 py-1",
    "bg": "px-6 py-1 text-lg",
  };
  const colors = {
    success: "bg-green-300",
    warning: "bg-yellow-300",
    error: "bg-red-300",
    main: "bg-blue-300"
  }
  return (
    <button onClick={onClick} className={`border bg- rounded-md ${sizes[size]} ${colors[color]}`}>{children}</button>
  );
};
