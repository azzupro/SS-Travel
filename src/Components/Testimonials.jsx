import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>SS Travel Staff</h1>
          

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar} alt="image" />
            <div>
              <h3>Imran Khursheed</h3>
              <span>Owner • SS Travel</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar2} alt="image" />
            <div>
              <h3>Meraj Ali</h3>
              <span>Partner • SS Travel</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar4} alt="image" />
            <div>
              <h3>KALEEM</h3>
              <span>Partner • SS Travel</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <div className={Classes.info}>
            <img src={avatar3} alt="image" />
            <div>
              <h3>Afzal Husain</h3>
              <span>Manager • SS Travel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
