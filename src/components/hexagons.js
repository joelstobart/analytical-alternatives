import React from "react"

import "./hexagons.css"
import { Link } from "gatsby"
function Hexagons() {
  return (
    <div className={`hexagonContainer`}>
      <Link to={"#contactForm"}>
        <ul className={`hexagons`}>
          <li>Threat Assessment</li>
          <li>Due Diligence</li>
          <li>Regular Risk Monitoring</li>
          <li>Clear and Darknet Monitoring</li>
          <li>Domain Name Monitoring</li>
          <li>Online Takedowns</li>
          <li>Covert Engagement</li>
          <li>Evidential Test Purchasing</li>
          <li>Bulk non-evidential test purchasing</li>
          <li>Intelligence Profiling</li>
          <li>Secure Chain of Custody &amp; Evidence Handling</li>
          <li>Investigation Management</li>
          <li>In-country Market Survey</li>
          <li>Surveillance</li>
          <li>Intelligence Analysis</li>
          <li>Vulnerability Assessments</li>
          <li>Referral to Law Enforcement or Civil Legal Partners</li>
          <li>Brand Protection</li>
          <li>Country Risk</li>
          <li>Travel Risk</li>
          <li>Counter Fraud</li>
        </ul>
      </Link>
    </div>
  )
}

export default Hexagons
