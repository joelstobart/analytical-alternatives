import * as React from "react"
import PropTypes from "prop-types"

import aal from "../images/analytical-white.svg"

const Header = () => (
  <header style={{
          height: `15vh`,
      top:-1,
      position:`sticky` }}>
      <div style={{
          height: `15vh`,
          marginTop:`-15vh`,
          backgroundColor: `rgba(0,0,0,0.1)`,
          color: `#a7a7a7`}}>
          <div style={{
                  margin:`0 auto`,
                  maxWidth: 960,
                  paddingTop: `3vh`,
                  paddingBottom: `3vh`,
                  textAlign: `center`
          }}>
              <img src={aal} height={`80vh`} align={`center`} alt={`Analytical Alternatives Logo`}/>
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
