import React from "react";

export const Title: React.FC<{ icon: string; title: string }> = ({
  icon,
  title,
}) => {
  return (
    <h2 className="text-[#0D0B0C] text-sm flex items-center my-2">
      <span>
        <img className="w-6 h-4" src={icon} alt="iconh1" />
      </span>
      <span className="pl-1">{title}</span>
    </h2>
  );
};
