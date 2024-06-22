import React from "react"

import "./floatmodal.css"

function FloatModal() {
  return (
    <div className={"floatModal"}>
      <div className={"floatModalContent"}>
        <img
          alt={"IP House Logo"}
          src={"https://ip-house.com/wp-content/uploads/IPHouse_logowhite.svg"}
        />
        <h1>Analytical Alternatives is now part of IP House</h1>
        <p>
          We are exited to announce that we have joined the team at IP House, an
          innovative new entity providing full-service brand and content
          protection services worldwide. Be assured, the Analytical Alternatives
          team are still here, delivering impactful services you can rely on,
          however we now have expansive new organisational resources to offer.
          You will be redirected to the IP House website automatically.
        </p>
        <a
          className={"button"}
          href={"https://ip-house.com"}
          onClick={() => window.open("https://ip-house.com")}
        >
          ip-house.com
        </a>
      </div>
    </div>
  )
}

export default FloatModal
