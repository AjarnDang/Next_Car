"use client";

import React from "react";
import { useState, useEffect } from "react";
import { NavLinks } from "../api/data/NavbarList";
import {
  LoginOutlined,
  SearchOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import Logo from "@/app/assets/img/SOne_index_logos_white.png";
import LogoDark from "@/app/assets/img/SOne_index_logos.png";
import Image from "next/image";

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
      className={`navbar p-6 fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-slate-100 shadow-sm" : "bg-transparent text-white"}
    `}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle`}
          >
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
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white
              ${scrolled ? "" : "text-gray-900"}`}
          >
            {NavLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="leading-8">
                  {item.page}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost hover:bg-transparent" href="/home">
          {scrolled ? (
            <Image
              src={LogoDark}
              width={0}
              height={0}
              alt="Logo"
              className="w-full h-auto"
            />
          ) : (
            <Image
              src={Logo}
              width={0}
              height={0}
              alt="Logo"
              className="w-full h-auto"
            />
          )}
        </a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <LoginOutlined sizes="large" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <GlobalOutlined sizes="large" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <SearchOutlined sizes="large" />
        </button>
      </div>
    </div>
  );
}
