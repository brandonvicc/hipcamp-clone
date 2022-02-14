import "./SpotCard.css";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as spotActions from "../../../store/spot";

const SpotCard = ({ spot }) => {
  const { name, img_link, price, city, state, id, user_id } = spot;
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, [dispatch]);

  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(spotActions.deleteSpot(spot));
    history.push("/spots");
  };

  const editClick = async (e) => {
    e.preventDefault();
    await dispatch(spotActions.loadOne(id));
    history.push(`/spots/edit/${id}`);
  };

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
          <NavLink to={`/spots/${id}`}>
            <li>More Details</li>
          </NavLink>
          {sessionUser?.id === user_id && (
            <li className="action-btns">
              <button className="delete-spot" onClick={handleClick}>
                Delete
              </button>
              <button className="update-spot" onClick={editClick}>
                Edit
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SpotCard;
