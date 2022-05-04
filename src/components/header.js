import * as React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import aal from "../images/analytical-white.svg"

const Header = () => (
  <header style={{
      height: `120px`,
      top:-1,
      position:`sticky`,
      zIndex:999
  }}>
      <div style={{
          height: `120px`,
          marginTop:`-120px`,
          background: `linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.0) 100%)`,
          color: `#a7a7a7`}}>
          <div style={{
                  margin:`0 auto`,
                  maxWidth: 960,
                  paddingTop: `3vh`,
                  paddingBottom: `3vh`,
                  textAlign: `center`
          }}>
              <Link to={"/"}><img src={aal} height={`80`} width={`307`} align={`center`} alt={`Analytical Alternatives Logo`}/></Link>
          </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
