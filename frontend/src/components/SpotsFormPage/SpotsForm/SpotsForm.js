import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as spotActions from "../../../store/spot";
import "./SpotsForm.css";

const SpotsForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [country, setCountry] = useState("USA");
  const [price, setPrice] = useState(0.0);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [img_link, setImgLink] = useState("");
  const [errors, setErrors] = useState([]);

  const states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Federated States of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Island",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  if (!sessionUser) return <Redirect to="/login" />;

  const handleClick = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
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
        user_id: sessionUser?.id,
      })
    )
      .then((data) => {
        history.push(`/spots/${data.id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="spot-form-marginbtm">
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleClick} className="spot-form-container">
        <div className="spot-form-input-container spot-name">
          <label htmlFor="name">Name of the Spot</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="spots-input-control"
            type="text"
            name="name"
            id="spots-long-input-name"
          />
        </div>
        <div className="spot-form-input-container spot-address">
          <label htmlFor="address">Street Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="spots-input-control"
            type="text"
            name="address"
            id="spots-long-input-address"
          />
        </div>
        <div className="spot-form-input-container spot-city">
          <label htmlFor="city">City</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="spots-input-control"
            type="text"
            name="city"
          />
        </div>
        <div className="spot-form-input-container spot-state">
          <label htmlFor="state">State</label>
          <select
            value={state}
            name="state"
            id="state"
            onChange={(e) => setState(e.target.value)}
            required
            className="spots-input-control"
          >
            {states.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
        <div className="spot-form-input-container spot-country">
          <label htmlFor="country">Country</label>
          <input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="spots-input-control"
            type="text"
            name="country"
          />
        </div>
        <div className="spot-form-input-container spot-price">
          <label htmlFor="price">How much per Night?</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="spots-input-control"
            type="number"
            name="price"
          />
        </div>
        <div className="spot-form-input-container spot-lat">
          <label htmlFor="lat">Latitude Coordinates</label>
          <input
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            className="spots-input-control"
            type="number"
            name="lat"
          />
        </div>
        <div className="spot-form-input-container spot-lng">
          <label htmlFor="lng">Longitude Coordinates</label>
          <input
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            className="spots-input-control"
            type="number"
            name="lng"
          />
        </div>
        <div className="spot-form-input-container spot-img">
          <label htmlFor="img_link">Add a Picture</label>
          <input
            value={img_link}
            onChange={(e) => setImgLink(e.target.value)}
            className="spots-input-control"
            type="text"
            name="img_link"
            placeholder="Please put the link"
            id="spots-long-input-imgLink"
          />
        </div>
        <button type="submit" className="spot-btn">
          Add new Spot!
        </button>
      </form>
    </div>
  );
};

export default SpotsForm;
