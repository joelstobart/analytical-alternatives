import React from "react"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("xvolvaqn")
  if (state.succeeded) {
    return (
      <p>
        Thank you for your interest in our services. One of the team will be in
        contact with you ASAP.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      action={"https://formspree.io/f/xvolvaqn"}
      method={"post"}
    >
      <input id="name" type="name" name="name" required placeholder={"NAME"} />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        required
        name="email"
        placeholder={"EMAIL"}
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" required placeholder={"MESSAGE"} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        SUBMIT
      </button>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App
