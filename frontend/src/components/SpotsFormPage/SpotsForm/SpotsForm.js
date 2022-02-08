import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as spotActions from "../../../store/spot";

const SpotsForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [price, setPrice] = useState(0.0);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [img_link, setImgLink] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(typeof img_link);
    console.log(img_link);
    setErrors([]);

    const newSpot = await dispatch(
      spotActions.createSpot({
        name,
        address,
        city,
        state,
        country,
        lat,
        lng,
        price,
        img_link,
        user_id: sessionUser.id,
      })
    );
    if (newSpot) {
      console.log(newSpot);
      //   history.push(`/spots/${newSpot.id}`);
      history.push(`/spots/new`);
    }
  };

  return (
    <div className="spot-form-container">
      <form onSubmit={handleClick}>
        <div className="spot-form-input-container">
          <label htmlFor="name">Name of the Spot</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-control"
            type="text"
            name="name"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="address">Street Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-control"
            type="text"
            name="address"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="city">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-control"
            type="text"
            name="city"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="state">State</label>
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="input-control"
            type="text"
            name="state"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input-control"
            type="text"
            name="country"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="price">How much per Night?</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input-control"
            type="number"
            name="price"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="lat">Latitude Coordinates</label>
          <input
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="input-control"
            type="number"
            name="lat"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="lng">Longitutde Coordinates</label>
          <input
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="input-control"
            type="number"
            name="lng"
          />
        </div>
        <div className="spot-form-input-container">
          <label htmlFor="img_link">Add a Picture</label>
          <input
            value={img_link}
            onChange={(e) => setImgLink(e.target.value)}
            className="input-control"
            type="text"
            name="img_link"
            placeholder="Please put the link"
          />
        </div>
        <button type="submit">Add new Spot!</button>
      </form>
    </div>
  );
};

export default SpotsForm;
