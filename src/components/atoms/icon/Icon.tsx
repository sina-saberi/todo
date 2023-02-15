import React from "react";
import "./../../../../styles/icofont/icofont.min.css";

export const iconNames = {
    "eye": "eye"
}

export interface IIconProps {
    name: keyof typeof iconNames;
    size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | number;
}

export const Icon: React.FC<IIconProps> = ({ name, size = "base" }) => {
    const Name = "icofont-" + name;
    const Size = typeof size == "number" ? `text-[${size}px]` : `text-${size}`;
    return <i className={[Name, Size].join(" ")}></i>
}