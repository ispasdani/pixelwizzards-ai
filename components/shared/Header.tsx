import React from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <>
      <h2 className="h2-bold text-[#2C67F2]">{title}</h2>
      {subtitle && <p className="p-16-regular mt-6">{subtitle}</p>}
    </>
  );
};

export default Header;
