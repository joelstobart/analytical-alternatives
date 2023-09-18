import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import London from "../components/london"

const StandardsPage = () => (
  <Layout>
    <Seo title="Standards" />
    <main>
      <London></London>
      <section className={"black"} style={{ height: "auto" }}>
        <div className={"container"} style={{ textAlign: `left` }}>
          <h2 style={{ margin: `0 0 2rem 0`, fontSize: `40px` }}>
            <Link to="/">upholding standards</Link>
          </h2>
          <p>
            Analytical Alternatives (AAL) hold a current ISO 9001:2015
            certification from UKAS. AAL and its contractors act in strict
            accordance with UK, European and US Laws, including the:
          </p>
          <ul>
            <li>General Data Protection Regulation (2018)</li>
            <li>Bribery Act (2010)</li>
            <li>Foreign Corrupt Practices Act (1977)</li>
            <li>Criminal Justice Act (2003)</li>
            <li>Police and Criminal Evidence Act (1984)</li>
            <li>
              European Convention on Human Rights and the Human Rights Act
              (1998)
            </li>
            <li>Data Protection Act (2018)</li>
            <li>
              Privacy and Electronic Communications (EC Directive) Regulations
              (2003)
            </li>
            <li>Computer Misuse Act (1990)</li>
          </ul>
          <p>
            Additionally, we voluntarily conform to the standards required by
            the Regulation of Investigatory Powers Act (2000) and we are ever
            mindful to avoid actions, which could be considered to be entrapment
            or those of an Agent Provocateur.
          </p>
          <p>
            A strict Non-Disclosure Agreement, ensuring the integrity and
            confidentiality of sensitive business information, binds each
            employee and contractor working for AAL.
          </p>
          <p>
            Each operative deployed by AAL has signed up to a strict Anti
            Bribery and Corruption Policy.
          </p>
          <ul>
            <li>
              We act in a moral and professionally ethical manner and ensure
              that our work is necessary, appropriate and proportionate.
            </li>
            <li>We demonstrate honesty and integrity in all activities.</li>
            <li>
              We adhere to the national laws and regulations of the country in
              which we are deployed.
            </li>
            <li>
              We verify the credentials of our clients to ensure that they have
              lawful and moral reasons to request research or investigation.
            </li>
          </ul>

          <p>
            Information we receive in confidence will remain so and will not be
            passed to third parties without prior permission.
          </p>
          <p>
            We do not accept nor offer any rewards, gifts or services that may
            be deemed improper or risk compromise to our position.
          </p>
          <p>
            We will not discriminate unlawfully on the grounds of sex, race,
            colour, language, religion or belief, political or other opinion,
            national or social origin, association with a national minority,
            disability, age, sexual orientation, property, birth or other
            status.
          </p>
        </div>
      </section>
    </main>
  </Layout>
)

export default StandardsPage
