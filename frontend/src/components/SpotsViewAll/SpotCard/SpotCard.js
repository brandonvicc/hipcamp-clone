import "./SpotCard.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SpotCard = ({ name, img_link, price, city, state, id, userId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <div className="spot-card">
      <NavLink to={`/spots/${id}`}>
        <img className="spot-card-img" src={img_link} alt="card" />
      </NavLink>
      <div className="spot-card-content">
        <NavLink to={`/spots/${id}`}>
          <h3 className="spot-card-heading">{name}</h3>
        </NavLink>
        <ul className="spot-card-list">
          <li className="spot-card-item">${price} per Night</li>
          <li className="spot-card-item">
            {city}, {state}
          </li>
          {sessionUser.id === userId && (
            <li>
              <button>Delete</button>
            </li>
          )}
          <NavLink to={`/spots/${id}`}>More Details</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SpotCard;
