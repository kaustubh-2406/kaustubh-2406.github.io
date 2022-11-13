import React from "react";

export default function ContactForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Enter your e-mail</label>
        <input type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        {/* <input type="text" name="message" id="message" /> */}
        <textarea />
      </div>

      <button type="submit">Mail me!</button>
    </form>
  );
}
