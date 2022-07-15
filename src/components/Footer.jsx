import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <h3>Copyright Ⓒ {currentYear}</h3>
    </div>
  );
}

export default Footer;
