import React from "react";
import Header from "./Header";

const Container = ({ children, title }: any) => {
  return (
    <div>
      <Header title={title} />
      {children}
    </div>
  );
};

export default Container;
