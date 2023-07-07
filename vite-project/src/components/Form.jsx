import "../styles/form.css";
import Button from "./Button";

const Form = () => {
  return (
    <div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact__form">
          <div className="form-item">
            <div>
              <label>Full Name</label>
            </div>
            <input type="text" placeholder="Enter full name..." />
          </div>
          <div className="form-item">
            <div>
              <label>Email</label>
            </div>
            <input type="email" placeholder="Enter Email..." />
          </div>
          <div className="form-item">
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter message..."
            ></textarea>
          </div>
          <Button text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Form;
