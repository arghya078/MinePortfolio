import React from "react";

interface HeaderProps {
  title: string;
  as?: "h1" | "h2";
}

const Header = ({ title, as: Tag = "h1" }: HeaderProps) => {
  const sizeClasses =
    Tag === "h1"
      ? "text-3xl md:text-5xl"
      : "text-2xl md:text-4xl";

  return (
    <div className="py-14 md:py-20 text-center">
      <Tag
        className={`
          ${sizeClasses}
          font-extrabold
          tracking-tight
          text-transparent bg-clip-text
          bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400
          animate-gradient
        `}
      >
        {title}
      </Tag>
    </div>
  );
};

export default Header;
