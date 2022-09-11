import React from "react";
// import Styles from "./styles.module.scss";
import SocialIcons from "../SocialIcons/index.jsx";

function Footer() {
  return (
    <footer className="text-center px-9 border-t-gray-500 border-t-2 mt-4">
      <div className="mt-2">
        &copy; {new Date().getFullYear()} Kaustubh Agrawal
      </div>
      <div className="flex justify-center items-center my-2">
        <SocialIcons large />
      </div>
    </footer>
  );
}
export default Footer;
