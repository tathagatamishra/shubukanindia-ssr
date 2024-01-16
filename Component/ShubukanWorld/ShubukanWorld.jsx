"use client"
import { useEffect, useState } from "react";
import "./ShubukanWorld.scss";
import Link from "next/link";
import { IonIcon } from "@ionic/react";
import { globeOutline, logoFacebook, logoYoutube } from "ionicons/icons";

import img_1 from "../../world_images/img (14).jpg";
import img_2 from "../../world_images/img (13).jpg";
import img_3 from "../../world_images/img (17).jpg";
import img_4 from "../../world_images/img (15).jpg";
import img_5 from "../../world_images/img (8).jpg";
import img_6 from "../../world_images/img (1).jpeg";
import img_7 from "../../world_images/img (2).jpeg";
import img_8 from "../../world_images/img (3).jpeg";
import img_9 from "../../world_images/img (4).jpeg";
import img_10 from "../../images/group (5).jpeg";

import ReactGA from 'react-ga';
import Image from "next/image";

export default function ShubukanWorld({ setShowNav }) {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  
  const imgArray = [
    img_1,
    img_5,
    img_2,
    img_10,
    img_4,
    img_3,
    img_6,
    img_7,
    img_8,
    img_9,
  ];

  const [popImg, setPopImg] = useState("");
  const [imgClicked, setImgClicked] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  function imgPop(srcValue) {
    if (imgClicked == true) {
      setPopImg("");
      setImgClicked(false);
      setShowNav(true);
    } else if (imgClicked == false) {
      setShowNav(false);
      setPopImg(srcValue);
      setImgClicked(true);
    }
  }
  
  return (
    <div className="ShubukanWorld">
      <section className="Hero">
        <h1>Shubukan World</h1>
        <p>
          Shubukan is now spreading its spirit in many country. Shubukan has
          branches in Czech, Switzerland, Canada, Germany, Spain and in India.
        </p>
      </section>

      <section className="world">
        <div className="country">
          <h2>Czech Republic</h2>
          <div className="line"></div>

          <div className="profile">
            <div className="image">
              <Image src={img_1} alt="" onClick={() => imgPop(img_1)} />
              <p>Sensei Jan Gyuris</p>
            </div>

            <div className="social">
              <div className="link">
                <IonIcon icon={globeOutline} className="label" />
                <Link
                  href="https://www.rbka.cz"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  www.rbka.cz
                </Link>
              </div>

              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/rbka.cz/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  Facebook
                </Link>
              </div>

              <div className="link">
                <IonIcon icon={logoYoutube} className="label" />
                <Link
                  href="https://www.youtube.com/channel/UCdOqvpG3f3JIBb_unUlCgcg"
                  className="opt"
                  target="_blank"
                  rel="instagram link"
                >
                  Youtube
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}

        <div className="country">
          <h2>Switzerland</h2>
          <div className="line"></div>

          <div className="Switzerland">
            <div className="img-div">
              <div className="image">
                <Image src={img_3} alt="" onClick={() => imgPop(img_3)} />
                <p>Sensei Roan Morand</p>
              </div>
              <div className="image">
                <Image src={img_4} alt="" onClick={() => imgPop(img_4)} />
                <p>Sensei Laurent Batiste</p>
              </div>
            </div>

            <div className="social">
              <div className="link">
                <IonIcon icon={globeOutline} className="label" />
                <Link
                  href="https://kcconthey.ch/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  kcconthey.ch
                </Link>
              </div>
              <div className="link">
                <IonIcon icon={globeOutline} className="label" />
                <Link
                  href="https://www.karate-okinawa.ch/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  karate-okinawa.ch
                </Link>
              </div>

              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/karateclublatour/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  karateclublatour
                </Link>
              </div>
              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/karateclubsaxon/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  karateclubsaxon
                </Link>
              </div>
              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/karateclubconthey/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  karateclubconthey
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}

        <div className="country">
          <h2>Canada</h2>
          <div className="line"></div>

          <div className="profile">
            <div className="image">
              <Image src={img_2} alt="" onClick={() => imgPop(img_2)} />
              <p>Sensei Vaillancourt Chantal</p>
            </div>

            <div className="social">
              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/KarateBoisbriand"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  KarateBoisbriand
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}

        <div className="country">
          <h2>Spain</h2>
          <div className="line"></div>

          <div className="profile">
            <div className="image">
              <Image src={img_8} alt="" onClick={() => imgPop(img_8)} />
              <p>Sensei Antonio Caselles Mulet</p>
            </div>

            <div className="social">
              <div className="link">
                <IonIcon icon={globeOutline} className="label" />
                <Link
                  href="https://shubukanterrassa.org/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  shubukanterrassa.org
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------ */}

        <div className="country">
          <h2>Germany</h2>
          <div className="line"></div>

          <div className="profile">
            <div className="image">
              <Image src={img_7} alt="" onClick={() => imgPop(img_7)} />
              <p>Sensei Roman Křapka</p>
            </div>

            <div className="social">
              <div className="link">
                <IonIcon icon={globeOutline} className="label" />
                <Link
                  href="https://shubukan.de/"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  shubukan.de
                </Link>
              </div>

              <div className="link">
                <IonIcon icon={logoFacebook} className="label" />
                <Link
                  href="https://www.facebook.com/shubukan.de"
                  className="opt"
                  target="_blank"
                  rel="facebook link"
                >
                  Shubukan.de
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {imgClicked && (
        <div className="popUp">
          <div className="popBack" onClick={imgPop}></div>
          <div className="imgPop" onClick={imgPop}>
            <Image src={popImg} alt="image" />
          </div>
        </div>
      )}

      <section className="gallery-image">
        {imgArray.map((image, index) => (
          <div className="image" key={index} onClick={() => imgPop(image)}>
            <Image src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </section>
    </div>
  );
}
