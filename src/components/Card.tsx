import React from "react";

const Card = ({ children }: any) => {
  return <div className="flex min-h-screen flex-col mr-4 border rounded">{children}</div>;
};

export default Card;
