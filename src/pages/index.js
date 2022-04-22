import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import island from "../images/island.webp"
import quill from "../images/quill.svg"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <main>
          <section className="london imgloaded">

              <div id={"london"} className="glitch">
                  <div className="glitch__img"></div>
                  <div className="glitch__img"></div>
                  <div className="glitch__img"></div>
                  <div className="glitch__img"></div>
                  <div className="glitch__img"></div>
              </div>
          </section>
          <section className={"black"}>

          <div
              style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `1.45rem 1.0875rem`,
                  paddingTop: `20vh`,
                  textAlign: `center`
              }}
          >
              <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                  <Link
                      to="/"
                      style={{
                          fontFamily: `Courier New` ,
                          fontWeight: `lighter`,
                          color: `white`,
                          textShadow: `0 0 22px #64ce5c, 0 0 30px #64ce5c, 0 0 40px #64ce5c`,
                          textDecoration: `none`
                      }}
                  >
                      no nonsense.
                  </Link>
              </h2>
              <p style={{ color:`white`, fontFamily:`calibri, Sans-serif`, fontSize: `26px`, textAlign:`left`, lineHeight:`1.4em`}}>
                  A trusted, global risk management consultancy that has considerable experience in providing market-leading specialist intelligence and investigations services to its clients.  Each client is provided a solution based on our unique convergence of diverse disciplines from both public and private sectors. We believe in a ‘no-nonsense’, honest and open approach to our work and as such are widely respected.
              </p>
          </div>

          </section>
          <section style={{
              backgroundImage: `url(${island})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`}}>
              <div
                  style={{
                      margin: `0 auto`,
                      maxWidth: 960,
                      padding: `1.45rem 1.0875rem`,
                      paddingTop: `15vh`,
                      textAlign: `center`
                  }}
              >
              <img src={quill} height={`60%`}/>
              </div>
      </section>
      </main>
  </Layout>
)

export default IndexPage
