import "./StepComponent.css";

const StepComponent = ({ text, imgUrl, heading }) => {
  return (
    <div className="step-box">
      <img className="step-img" src={imgUrl} alt="step" />
      <h3 className="step-heading">{heading}</h3>
      <p className="step-text">{text}</p>
    </div>
  );
};

export default StepComponent;
