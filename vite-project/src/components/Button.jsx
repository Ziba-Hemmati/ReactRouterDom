import "../styles/button.css";
const Button = ({ text, handleSubmit }) => {
  return (
    <div>
      <button onClick={handleSubmit} type="submit" className="button">
        {text}
      </button>
    </div>
  );
};

export default Button;
