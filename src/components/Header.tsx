import React from "react";

const Header = ({ title }: any) => {
  return (
    <header aria-label="page caption" className="flex-none flex h-12 border-y px-4 -ml-4 mb-4 items-center">
      <h1 id="page-caption" className="font-semibold text-lg">
        {title}
      </h1>
    </header>
  );
};

export default Header;
