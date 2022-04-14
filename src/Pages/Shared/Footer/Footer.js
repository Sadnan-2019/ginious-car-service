import React from "react";

const Footer = () => {
  const today=new Date()
  const year=today.getFullYear()
  return (
    <div>
      <footer>
        <h3 className="text-center">copy-rght &copy;  {year}</h3>
      </footer>
    </div>
  );
};

export default Footer;
