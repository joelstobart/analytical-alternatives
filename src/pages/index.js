import * as React from "react"
import { Link } from "gatsby"
import ContactForm from "../components/contactform"

import Layout from "../components/layout"
import Seo from "../components/seo"
import island from "../images/island.webp"
import quill from "../images/quill.svg"
import London from "../components/london"
import Hexagons from "../components/hexagons"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <main>
          <London></London>
          <section className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                      <Link to="/">
                          no nonsense
                      </Link>
                  </h2>
                  <p style={{ color:`white`, fontFamily:`calibri, Sans-serif`, fontSize: `26px`, textAlign:`left`, lineHeight:`1.4em`}}>
                      We believe in a no-nonsense, honest and open approach to our work which is underpinned by our core values
                      and is widely respected by our clients.

                      We are a trusted, global risk management consultancy that has considerable experience in providing
                      market-leading specialist intelligence and investigations services to its clients.
                      Each client is provided a solution based on our unique convergence of diverse disciplines from
                      both public and private sectors. We believe in a no-nonsense, honest and open approach to our work
                      and as such are widely respected.
                  </p>
              </div>
          </section>
          <section style={{
              backgroundImage: `url(${island})`,
              backgroundSize: `cover`,
              backgroundPosition: `center`}}>
              <div className={"container"}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          our values
                      </Link>
                  </h2>
                <img alt={"QUILL is defined as Quality, Uniformity, Integrity, Legality, Loyalty"} src={quill} height={`450px`}/>
              </div>
          </section>

          <section className={"grey hexagon"}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          core services
                      </Link>
                  </h2>
                  <p style={{ color: `white`, fontFamily: "Calibri, sansSerif", fontSize: "26px"}}>
                      Since 2002 AAL has progressively been asked to help our clients perform increasingly
                      varied tasks in more challenging environments to further their business aims.
                      These tasks include but are not limited to:</p>
                  <Hexagons/>
              </div>
          </section>

          <section className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          open communications
                      </Link>
                  </h2>
                  <p style={{ color: `white`, fontFamily: "Calibri, sansSerif", fontSize: "26px"}}>Data Processing: We will use this information only to respond to your query</p>
                 <ContactForm/>
              </div>

          </section>
      </main>
  </Layout>
)

export default IndexPage
