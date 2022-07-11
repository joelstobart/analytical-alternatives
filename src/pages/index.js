import * as React from "react"
import { Link } from "gatsby"
import ContactForm from "../components/contactform"

import Layout from "../components/layout"
import Seo from "../components/seo"
import island from "../images/map_outline.webp"
import dark_beach from "../images/dark_beach.webp"
import London from "../components/london"
import Hexagons from "../components/hexagons"

const IndexPage = () => (
  <Layout>
    <Seo title="Analytical Alternatives" />
      <main>
          <London></London>
          <section className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                      <Link to="/">
                          no nonsense
                      </Link>
                  </h2>
                  <p style={{ fontSize: `26px`, textAlign:`left`, lineHeight:`1.4em`}}>
                      Analytical Alternatives are a trusted, global risk management consultancy that has considerable experience in providing
                      market-leading specialist intelligence and investigations services to clients.
                      Each client is provided a solution based on our unique convergence of diverse disciplines from
                      both public and private sectors. We believe in a no-nonsense, honest and open approach to our work
                      which is underpinned by our core values and is widely respected by our clients.
                  </p>
              </div>
          </section>
          <section style={{backgroundImage: `url(${island})`}}
                   id={`island`}
          >
              <div className={"container"}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                      <Link to="/">
                          our values
                      </Link>
                  </h2>
                <div className={"list"} >
                    <ul>
                        <li>QUALITY</li>
                        <li>UNIFORMITY</li>
                        <li>INTEGRITY</li>
                        <li>LOYALTY</li>
                        <li>LEGALITY</li>
                    </ul>
                </div>
              </div>
          </section>

          <section className={"grey hexagon"}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                      <Link to="/">
                          core services
                      </Link>
                  </h2>
                  <p style={{fontSize: "26px"}}>
                      Since 2002 AAL has progressively been asked to help our clients perform increasingly
                      varied tasks in more challenging environments to further their business aims.
                      These tasks include but are not limited to:</p>
                  <Hexagons/>
              </div>
          </section>

          <section style={{backgroundImage: `url(${dark_beach})`,backgroundPosition: `center center`,
              backgroundSize: `cover`}}
                   id={`dark_beach`}
          >
              <div className={"container"}>
                  <h2 style={{ margin: `0 0 1rem 0`, fontSize: `50px`}}>
                      <Link to="/">
                         mission statement
                      </Link>
                  </h2>
                  <p style={{fontSize: `26px`, textAlign: `left`, lineHeight: `1.4em`}}>
                      Our unique support to large corporations and global brands, seeks to identify,
                      reduce and ultimately remove the threats they face and define a robust global
                      strategy for investigation and enforcement.</p>
                  <h2 style={{ margin: `0 0 1rem 0`, fontSize: `50px`}}>
                      <Link to="/">
                          vision statement
                      </Link>
                  </h2>
                  <p style={{fontSize: `26px`, textAlign: `left`, lineHeight: `1.4em`}}>
                      By taking steps to identify and remove bad actors in sales channels and
                      reducing the perpetually developing threats, our vision is to make the world
                      safer for consumers and patients alike and guard against unnecessary energy and spend.</p>
              </div>
          </section>

          <section  id={"contactForm"} className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          open communications with AAL
                      </Link>
                  </h2>
                  <p style={{fontSize: "26px"}}>Data Processing: We will use this information only to respond to your query</p>
                 <ContactForm/>
              </div>

          </section>
      </main>
  </Layout>
)

export default IndexPage
