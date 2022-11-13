import React, { useEffect } from "react";
import SocialIcons from "../SocialIcons/index.jsx";
import styles from "./styles.module.css";

function Nav() {
  const links = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
  ];

  return (
    <nav className="w-full flex justify-center items-center px-4 py-8 border border-gray border-1 fixed bg-opacity-95 bg-white z-50">
      <a className="mx-2" href="/">
        <div className="border-2 rounded-full border-black p-1 px-2">KA</div>
      </a>
      <div className="sm:w-4 w-full" />
      {links.map((link) => (
        <a
          key={link.href}
          className={`mx-2 relative border-solid ${styles.hoverLink} ${
            link.active ? "bg-red-200" : ""
          }`}
          href={link.href}
        >
          {link.name}
        </a>
      ))}
      <div className="w-full hidden sm:flex justify-end items-center">
        <SocialIcons />
        {/* download resume */}
        <a
          className="px-4 py-2 bg-purple-300 rounded-md"
          href="/kaustubh_resume.pdf"
          download
        >
          See Resume
        </a>
      </div>
    </nav>
  );
}
export default Nav;
