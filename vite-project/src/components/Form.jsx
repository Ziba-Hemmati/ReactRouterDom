import { useState } from "react";
import "../styles/form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !message) alert("Fill the form");
    else if (!name) alert("Enter your name");
    else if (!email.includes("@") || !email.includes("."))
      alert("Enter valid email");
    else if (!message) alert("Write your message");
    else {
      setName("");
      setEmail("");
      setMessage("");
      alert("Your message send successfully");
    }
  };
  return (
    <div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact__form">
          <div className="form-item">
            <div>
              <label>Full Name</label>
            </div>
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder="Enter full name..."
            />
          </div>
          <div className="form-item">
            <div>
              <label>Email</label>
            </div>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Enter Email..."
            />
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea
              value={message}
              onChange={handleMessage}
              cols="30"
              rows="10"
              placeholder="Enter message..."
            ></textarea>
          </div>
          <button className="form__button" type="submit" onClick={handleSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
