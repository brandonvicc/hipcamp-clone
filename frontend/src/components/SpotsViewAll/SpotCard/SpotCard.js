import "./SpotCard.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as spotActions from "../../../store/spot";

const SpotCard = ({ spot }) => {
  const { name, img_link, price, city, state, id, user_id } = spot;
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

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
          {sessionUser.id === user_id && (
            <li>
              <button onClick={() => dispatch(spotActions.deleteSpot(spot))}>
                Delete
              </button>
            </li>
          )}
          <NavLink to={`/spots/${id}`}>More Details</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default SpotCard;
