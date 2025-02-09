import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact with Us</h1>
      <form>
        <label>Email: <input type="email" /></label>
        <label>Message: <textarea /></label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
