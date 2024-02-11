import * as React from "react"
import { Link } from "gatsby"

import faHouseTurret from "../images/icons/house-turret-duotone.svg"
import faPhoneRotary from "../images/icons/phone-rotary-duotone.svg"
import faFileShield from "../images/icons/file-shield-duotone.svg"
import faCookieBite from "../images/icons/cookie-bite-duotone.svg"
import faHandshakeAngle from "../images/icons/file-shield-duotone.svg"

import iso from "../images/iso9001.svg"

const Footer = () => (
  <footer>
    <div className={`container`} style={{ textAlign: "left" }}>
      <address style={{ marginTop: `1vh` }}>
        <img
          style={{ height: "1em", display: "inline-block", margin: 0 }}
          alt={"Address"}
          src={faHouseTurret}
        />
        &nbsp; Analytical Alternatives, 269 Farnborough Road, Farnborough,
        Hampshire GU14 7LY
      </address>

      <div>
        <span className={"telephone"}>
          <img
            style={{ height: "1em", display: "inline-block", margin: 0 }}
            alt={"Phone Number"}
            src={faPhoneRotary}
          />
          &nbsp;<a href="tel:+44128530110">+44 (0) 1628 530110</a>
        </span>
        &nbsp; &nbsp; &nbsp;
        <span className={"securesend"}>
          <img
            style={{ height: "1em", display: "inline-block", margin: 0 }}
            alt={"Secure Send"}
            src={faFileShield}
          />
          &nbsp;Ask to share files with us via Secure Send
        </span>
      </div>

      <div style={{ marginTop: `5vh` }}>
        <span className={"cookies"}>
          <img
            style={{ height: "1em", display: "inline-block", margin: 0 }}
            alt={"Cookie Policy"}
            src={faCookieBite}
          />
          &nbsp; Cookies: We work hard to protect your privacy and cookie
          banners are tiresome. We don't use non essential cookies.
        </span>
      </div>

      <div style={{ marginTop: `5vh` }}>
        <div style={{ float: "left", marginRight: "20px" }}>
          <img src={`${iso}`} alt={"ISO 9001"} style={{ height: "140px" }} />
        </div>
        <span>
          <img
            style={{ height: "1em", display: "inline-block", margin: 0 }}
            src={faHandshakeAngle}
            alt={"Standards"}
          />{" "}
          We commit to the highest{" "}
          <Link to={"standards"}>
            investigative, ethical and legal standards
          </Link>
          ,{" "}
          <Link to={"standards"}>
            professional standards including ISO 9001:2015 certified
          </Link>
          , <Link to={"standards"}>information security standards</Link>,
          safeguarding your data and ensuring your privacy.
        </span>
      </div>
      <div></div>
    </div>
  </footer>
)

export default Footer
