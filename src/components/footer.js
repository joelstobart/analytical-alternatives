import * as React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import iso from "../images/iso9001.svg"
import {
  faHouseTurret,
  faPhoneRotary,
  faFileShield,
  faCookieBite,
  faHandshakeAngle,
} from "@fortawesome/pro-duotone-svg-icons"
const Footer = () => (
  <footer>
    <div className={`container`} style={{ textAlign: "left" }}>
      <address style={{ marginTop: `1vh` }}>
        <FontAwesomeIcon icon={faHouseTurret} />
        &nbsp; Analytical Alternatives, 269 Farnborough Road, Farnborough,
        Hampshire GU14 7LY
      </address>

      <div>
        <span className={"telephone"}>
          <FontAwesomeIcon icon={faPhoneRotary} />
          &nbsp;<a href="tel:+44128530110">+44 (0) 1628 530110</a>
        </span>
        &nbsp; &nbsp; &nbsp;
        <span className={"securesend"}>
          <FontAwesomeIcon icon={faFileShield} />
          &nbsp;Ask to share files with us via Secure Send
        </span>
      </div>

      <div style={{ marginTop: `5vh` }}>
        <span className={"cookies"}>
          <FontAwesomeIcon icon={faCookieBite} />
          &nbsp; Cookies: We work hard to protect your privacy and cookie
          banners are tiresome. We don't use non essential cookies.
        </span>
      </div>

      <div style={{ marginTop: `5vh` }}>
        <div style={{ float: "left", marginRight: "20px" }}>
          <img src={`${iso}`} alt={"ISO 9001"} style={{ height: "140px" }} />
        </div>
        <span>
          <FontAwesomeIcon icon={faHandshakeAngle} /> We commit to the highest{" "}
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
