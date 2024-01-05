"use client"
import React from "react";
import "./Footer.scss";

import logo1 from "../../assets/shubukanIndia.png";
import logo2 from "../../assets/shorinryu.svg";
import logo3 from "../../assets/shubukan.svg";
import logo4 from "../../assets/kobudo.svg";
import logo5 from "../../assets/Hozonkai-Logo.svg";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  function news(event) {
    event.preventDefault();
  }

  return (
    <div className="Footer">
      {/* <div className="footSub">
        <h1>Subscribe to our newsletter</h1>

        <form action="">
          <input type="email" />
          <button onClick={news}>&#10230;</button>
        </form>

        <div className="underLine"></div>
      </div> */}

      <div className="footContent">
        <div className="footOptions1">
          <Link href="/Contributor" className="opt">
            <p>Contributors</p>
          </Link>
          <Link href="/Membership" className="opt">
            <p>Membership</p>
          </Link>
          <Link href="/Services" className="opt">
            <p>Service</p>
          </Link>
        </div>

        <div className="midLine"></div>

        <div className="footOptions2">
          <Link href="/Blog" className="opt">
            <p>Blog</p>
          </Link>
          <Link href="/Download" className="opt">
            <p>Downloads</p>
          </Link>
          <Link href="/CalenderAndNotice" className="opt">
            <p>Calender & Notice</p>
          </Link>
        </div>

        <div className="midLine"></div>
        
        <div className="footOptions3">
          <Link href="/TAndC" className="opt">
            <p>Terms & Conditions</p>
          </Link>
          <Link href="/HAndF" className="opt">
            <p>Help and FAQ</p>
          </Link>
          <Link href="/Contact" className="opt">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <div className="footSocial"></div>

      <div className="footLogo">
        <Image src={logo1} alt="" />
        <Image src={logo2} alt="" />
        <Image src={logo3} alt="" />
        <Image src={logo4} alt="" />
        <Image src={logo5} alt="" />
      </div>

      <div className="footLine"></div>

      <div className="footExtra">
        <p>© 2023 Shubukan India</p>
      </div>
    </div>
  );
}
