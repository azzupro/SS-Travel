import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>Do the Call and Give your information for Owner (7237997060).</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>Superb Services Travel</span>
            </h1>
            <p>
               Superb Services Travel (SS travel) has such a user-friendly website. Easy to navigate,
            search and fiddle with dates instead of having to call up. Once
            decided, the booking process was swift and easy, thank you.
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Where you want to go</label>
              <input type="text" placeholder="search your location" />
            </div>

            <div className={Classes.search}>
              <label>Check in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check out</label>
              <input type="date" />
            </div>

            <button onClick={() => setModal(true)}>book now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
