"use client";

import React from "react";
import { useState, useEffect } from "react";
import { NavLinks } from "../api/data/NavbarList";
import { LoginOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}
    `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.page}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">S ONE SERVICE</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <LoginOutlined />
        </button>
      </div>
    </div>
  );
}
