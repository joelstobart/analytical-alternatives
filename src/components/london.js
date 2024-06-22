import React from "react"
import WhereAndWhen from "./whereandwhen"

import "./london.css"
function London() {
  return (
    <section className="london imgloaded">
      <WhereAndWhen></WhereAndWhen>
      <div id={"london"} className="glitch">
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
        <div className="glitch__img"></div>
      </div>
    </section>
  )
}

export default London
