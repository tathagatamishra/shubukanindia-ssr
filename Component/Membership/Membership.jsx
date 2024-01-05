"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import "./Membership.scss";

export default function Membership() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  
  return (
    <div className="Membership">
      <section className="Hero">
        <h1>Membership</h1>
        <p>
          Shubukan India accepts membership in its certain conditions and terms.
          We practice Shorin Ryu and Okinawan Kobudo. We focus on practical self
          defence and combat, Shorin Ryu shubukan is an Okinawan traditional
          karate. We accepts club district and state membership. Remember,
          training is the strongest piller of Shubukan India school. Contact us
          to join Shubukan India.
        </p>

        <p>
          Membership of Shubukan India abide by rules and regulation. Please
          contact us for more details.
        </p>

        <div className="contactBtn">
        <Link href="/Contact">
          <button>Get in touch</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
