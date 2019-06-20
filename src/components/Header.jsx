import React from "react";

const Header = ({ children, ...props }) => (
  <section className="header">
    <h3 {...props}>{children}</h3>
  </section>
);

export default Header;
