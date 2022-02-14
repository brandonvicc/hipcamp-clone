import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import * as spotActions from "../../store/spot";

const SpotEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const spot = useSelector((state) => state.spot);

  const [name, setName] = useState(spot.name);
  const [address, setAddress] = useState(spot.address);
  const [city, setCity] = useState(spot.city);
  const [state, setState] = useState(spot.state);
  const [country, setCountry] = useState(spot.country);
  const [price, setPrice] = useState(spot.price);
  const [lat, setLat] = useState(spot.lat);
  const [lng, setLng] = useState(spot.lng);
  const [img_link, setImgLink] = useState(spot.img_link);
  const [errors, setErrors] = useState([]);

  if (sessionUser.id !== spot.user_id) <Redirect to="/" />;

  let loaded = false;

  useEffect(() => {
    dispatch(spotActions.loadOne(id));
  }, [dispatch, id, loaded]);

  const handleClick = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      spotActions.updateSpot({
        id: id,
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
    )
      .then((data) => {
        history.push(`/spots/${data.id}`);
      })
      .catch(async (res) => {
        console.log(res);
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const isLoaded = async () => {
    setTimeout(() => (loaded = true), 100);
  };

  isLoaded();

  return (
    <div>
      <h1>Edit a Spot</h1>
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
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="spots-input-control"
            type="text"
            name="state"
          />
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
          Edit your Spot
        </button>
      </form>
    </div>
  );
};

export default SpotEdit;
