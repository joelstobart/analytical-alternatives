import React from 'react';

import "./hexagons.css"
import {Link} from "gatsby";
function Hexagons() {
    return (
            <div className={`hexagonContainer`}>
                <ul className={`hexagons`}>
                    <li>
                        <Link to={"#contactForm"}>Threat Assessment</Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Due Diligence
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Regular Risk Monitoring
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Clear and Darknet Monitoring
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Domain Name Monitoring
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Online Takedowns
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Covert Engagement
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Evidential Test Purchasing
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Bulk non-evidential test purchasing
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Intelligence Profiling
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Secure Chain of Custody &amp; Evidence Handling
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Investigation Management
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            In-country Market Survey
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Surveillance
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Intelligence Analysis
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Vulnerability Assessments
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Referral to Law Enforcement or Civil Legal Partners
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Brand Protection
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Country Risk
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Travel Risk
                        </Link>
                    </li>
                    <li>
                        <Link to={"#contactForm"}>
                            Counter Fraud
                        </Link>
                    </li>
                </ul>
            </div>);

}

export default Hexagons;