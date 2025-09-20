import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.jpg";

import Instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+91 7237997060</p>
          <p>sstravel231@gmail.com</p>
          <a href="https://www.instagram.com/superb_services_travel?igsh=cWF0N3R1OGxyMnJ0">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/asfak-ahmed-731212245/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/asfak00">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              SS <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
