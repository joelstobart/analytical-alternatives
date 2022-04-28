import * as React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseTurret, faPhoneRotary, faFileShield, faCookieBite, faHandshakeAngle } from '@fortawesome/pro-duotone-svg-icons'
const Footer = () => (
  <footer>
      <div className={`container`} style={{textAlign:"left"}}>
          <address style={{marginTop: `1vh`}}>
              <FontAwesomeIcon icon={faHouseTurret} />&nbsp;
              Analytical Alternatives,
              PO Box 3347,
              Bourne End,
              Buckinghamshire,
              SL8 5WS,
              United Kingdom
          </address>
          <div>
              <span className={"telephone"}><FontAwesomeIcon icon={faPhoneRotary} />&nbsp;<a href="tel:+44128530110">+44 (0) 1628 530110</a></span>
              &nbsp; &nbsp; &nbsp;
              <span className={"securesend"}><FontAwesomeIcon icon={faFileShield} />&nbsp;Securely share files with us via Secure Send</span>
          </div>

          <div style={{marginTop: `5vh`}}>
              <span className={"cookies"}><FontAwesomeIcon icon={faCookieBite} />&nbsp;
                  Cookies: We work hard to protect your privacy and cookie banners are annoying.
                  So we don't use non essential cookies.
              </span>

          </div>
          <div style={{marginTop: `5vh`}}>

              <span>
              <FontAwesomeIcon icon={faHandshakeAngle} /> We commit to the highest <Link to={"standards"}>investigative, ethical and legal standards</Link>
                  , <Link to={"standards"}>professional standards including ISO 9001:2015 certified</Link>
                  , <Link to={"standards"}>information security standards</Link>, safeguarding your data and to ensuring your privacy.
              </span>
          </div>





          <div>

          </div>
      </div>
  </footer>
)

export default Footer
