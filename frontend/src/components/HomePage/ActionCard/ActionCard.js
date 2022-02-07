import "./ActionCard.css";

const ActionCard = ({ url, content, color }) => {
  let bgColor;
  color !== "" ? (bgColor = "mustard") : (bgColor = "purple");

  return (
    <div className="card-container">
      <img className="card-img" src={url} alt="campsite" />
      <div className={`card-content ${bgColor}`}>
        <p className="card-content-heading">{content.heading}</p>
        <div className="card-bottom-content">
          <h3>{content.content}</h3>
          <button className="card-explore-btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
