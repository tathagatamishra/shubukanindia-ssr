"use client"
import React, { useEffect, useState } from "react";
import oldPaper from "../../assets/old-paper.svg";
import shubukanLogo from "../../assets/shubukan.png";
import shubukanText from "../../assets/logo.png";
// import oldPaper from '../../../public/oldPaper.svg'

import "./Navbar.scss";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [position, setPosition] = useState({ top: "0rem" });
  const [lastScrollTop, setLastScrollTop] = useState(Infinity);

  const [isMenu, setIsMenu] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});

  // This Variable will store the top position

  typeof window !== 'undefined' && window.addEventListener("scroll", function () {
    //on every scroll this function will be called

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //This line will get the location on scroll

    if (scrollTop > lastScrollTop) {
      //if it will be greater than the previous
      setPosition({ top: "-10rem" });
      //set the value to the negative of height of navbar
    } else {
      setPosition({ top: "0rem" });
    }

    setLastScrollTop(scrollTop); //New Position Stored
  });

  function showMenu() {
    if (isMenu == true) {
      setIsMenu(false);
      setMenuStyle({});
    } else if (isMenu == false) {
      setIsMenu(true);
      setMenuStyle({
        position: "fixed",
        top: "0",
        right: "0",
      });
    }
  }

  function lineFunc() {
    if (isMenu == true) {
      setIsMenu(false);
      setMenuStyle({});
    } else if (isMenu == false) {
      setIsMenu(true);
      setMenuStyle({
        position: "fixed",
        top: "0",
        right: "0",
      });
    }
  }

  return (
    <div id="Navbar" style={position}>
      <Link
        href="/"
        className="logo"
        onClick={() => {
          typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {/* <Spline scene="https://prod.spline.design/IRCi38KJr6aI3aIN/scene.splinecode" /> */}
        <Image className="logo1" src={shubukanLogo} />
        <Image className="logo2" src={shubukanText} />
      </Link>

      <section className="menu">
        <div className="menuStart" style={menuStyle} onClick={lineFunc}>
          <div className="lines"></div>
          <p>MENU</p>
          <div className="lines"></div>
        </div>

        {isMenu && (
          <>
            <div className="menuBG" onClick={showMenu}></div>
            {/* menu is forced to be hidden but it's css is not be hidden, so when it appears, it appears with transition, but when it get killed, it killed immediately, so there is no end transition */}
            <div
              className="menuBox"
              style={{ backgroundImage: `url(${oldPaper.src})` }}
            >
              {/* <Image src="oldpaper.png" alt="" /> */}
              <nav className="nav">
                <Link href="/history" className="opt" onClick={showMenu}>
                  <p>HISTORY</p>
                </Link>
                <Link href="/shubukan-india" className="opt" onClick={showMenu}>
                  <p>SHUBUKAN INDIA</p>
                </Link>
                <Link
                  href="/shubukan-okinawa"
                  className="opt"
                  onClick={showMenu}
                >
                  <p>SHUBUKAN OKINAWA</p>
                </Link>
                <Link href="/shubukan-world" className="opt" onClick={showMenu}>
                  <p>SHUBUKAN WORLD</p>
                </Link>
                <Link href="/shuri-karate-kobudo-hozonkai" className="opt" onClick={showMenu}>
                  <p>SHURI KARATE KOBUDO HOZONKAI</p>
                </Link>

                <Link
                  href="/lineage-and-dojokun"
                  className="opt"
                  onClick={showMenu}
                >
                  <p>LINEAGE & DOJO KUN</p>
                </Link>
                <Link
                  href="/karate-and-kobudo"
                  className="opt"
                  onClick={showMenu}
                >
                  <p>KARATE & KOBUDO</p>
                </Link>

                {/* <Link href="/CalenderAndNotice" className="opt" onClick={showMenu}>
                  <p>CALENDER & NOTICE</p>
                </Link> */}
                <Link href="/membership" className="opt" onClick={showMenu}>
                  <p>MEMBERSHIP</p>
                </Link>
                <Link href="/services" className="opt" onClick={showMenu}>
                  <p>SERVICES</p>
                </Link>
                <Link href="/gallery" className="opt" onClick={showMenu}>
                  <p>GALLERY</p>
                </Link>
                <Link href="/blog" className="opt" onClick={showMenu}>
                  <p>BLOG</p>
                </Link>
                <Link href="/contact" className="opt" onClick={showMenu}>
                  <p>CONTACT</p>
                </Link>
              </nav>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
