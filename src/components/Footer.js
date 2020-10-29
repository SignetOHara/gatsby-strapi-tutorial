import React from "react";
import SocialLinks from "../constants/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <>
        <SocialLinks styleClass="footer-links" />
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>WebDev</span> All rights reserved
      </>
    </footer>
  );
};

export default Footer;
