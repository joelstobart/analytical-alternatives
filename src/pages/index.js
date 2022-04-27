import * as React from "react"
import { Link } from "gatsby"
import ContactForm from "../components/contactform"

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
          <section className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `60px`}}>
                      <Link to="/">
                          No nonsense.
                      </Link>
                  </h2>
                  <p style={{ color:`white`, fontFamily:`calibri, Sans-serif`, fontSize: `26px`, textAlign:`left`, lineHeight:`1.4em`}}>
                      A trusted, global risk management consultancy that has considerable experience in providing market-leading specialist intelligence and investigations services to its clients.  Each client is provided a solution based on our unique convergence of diverse disciplines from both public and private sectors. We believe in a no-nonsense, honest and open approach to our work and as such are widely respected.
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
                          We protect what is important to you
                      </Link>
                  </h2>
                <img alt={"QUILL is defined as Q, U, I, L, L"} src={quill} height={`450px`}/>
              </div>
      </section>

          <section className={"grey"}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          Core services
                      </Link>
                  </h2>
                  <p style={{ color: `white`, fontFamily: "Calibri, sansSerif", fontSize: "26px"}}>
                      Since 2002 AAL has progressively been asked to help our clients perform more varied tasks in more challenging environments to further their business aims. These tasks include but are not limited to:</p>
                  <div className={`hexagonContainer`}>
                      <ul className={`hexagons`}>
                          <li>
                              <div>Threat Assessment</div>
                          </li>
                          <li>
                              <div>
                                  Due Diligence
                              </div>
                          </li>
                          <li>
                              <div>
                                  Regular Risk Monitoring
                              </div>
                          </li>
                          <li>
                              <div>
                                  Clear and Darknet Monitoring
                              </div>
                          </li>
                          <li>
                              <div>
                                  Domain Name Monitoring
                              </div>
                          </li>
                          <li>
                              <div>
                                  Online Takedowns
                              </div>
                          </li>
                          <li>
                              <div>
                                  Covert Engagement
                              </div>
                          </li>
                          <li>
                              <div>
                                  Evidential Test Purchasing
                              </div>
                          </li>
                          <li>
                              <div>
                                  Bulk non-evidential test purchasing
                              </div>
                          </li>
                          <li>
                              <div>
                                  Intelligence Profiling
                              </div>
                          </li>
                          <li>
                              <div>
                                  Secure Chain of Custody & Evidence Handling
                              </div>
                          </li>
                          <li>
                              <div>
                                  Investigation Management
                              </div>
                          </li>
                          <li>
                              <div>
                                  In-country Market Survey
                              </div>
                          </li>
                          <li>
                              <div>
                                  Surveillance
                              </div>
                          </li>
                          <li>
                              <div>
                                  Intelligence Analysis
                              </div>
                          </li>
                          <li>
                              <div>
                                  Vulnerability Assessments
                              </div>
                          </li>
                          <li>
                              <div>
                                  Referral to Law Enforcement or Civil Legal Partners
                              </div>
                          </li>
                          <li>
                              <div>
                                 Brand Protection
                              </div>
                          </li>

                          <li>
                              <div>
                                  Country Risk
                              </div>
                          </li>

                          <li>
                              <div>
                                  Travel Risk
                              </div>
                          </li>

                          <li>
                              <div>
                                  Counter Fraud
                              </div>
                          </li>

                      </ul>
                  </div>
              </div>
          </section>

          <section className={"black"} style={{paddingTop:`10vh`}}>
              <div className={`container`}>
                  <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px`}}>
                      <Link to="/">
                          Open communications
                      </Link>
                  </h2>
                  <p>Data Processing: We will use this information only to respond to your query</p>
                 <ContactForm/>
              </div>

          </section>
      </main>
  </Layout>
)

export default IndexPage
