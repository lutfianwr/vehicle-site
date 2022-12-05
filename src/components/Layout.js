import React from "react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
