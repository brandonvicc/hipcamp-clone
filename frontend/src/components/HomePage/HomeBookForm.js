import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as bookingActions from "../../store/booking";
import { useHistory } from "react-router-dom";

const HomeBookForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const spotsList = useSelector((state) => state.spot.list);
  const sessionUser = useSelector((state) => state.session.user);
  const [spots, setSpots] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuest, setNumGuest] = useState(1);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sessionUser) history.push("/login");
    setErrors([]);
    return dispatch(
      bookingActions.createBooking({
        spot_id: spots,
        user_id: sessionUser?.id,
        startDate,
        endDate,
        guests: numGuest,
      })
    )
      .then((data) => {
        history.push(`/spots/${data.spot_id}`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  return (
    <div className="home-book-form-container">
      <ul className="error-list">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="home-book-form">
        <div className="home-form-input-container">
          <label htmlFor="spots">WHERE TO?</label>
          <select
            name="spot"
            id="spot"
            onChange={(e) => setSpots(e.target.value)}
            value={spots}
          >
            <option value={0}>Please Select a Campsite</option>
            {spotsList?.map((spot) => (
              <option
                className="campsite-options"
                key={spot.id}
                value={spot.id}
              >
                {spot.name}
              </option>
            ))}
          </select>
        </div>
        <div className="home-form-input-container">
          <label htmlFor="date">START DATE</label>
          <input
            type="date"
            name="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="home-form-input-container">
          <label htmlFor="date"> END DATE</label>
          <input
            type="date"
            name="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="home-form-input-container">
          <label htmlFor="guests">HOW MANY GUESTS?</label>
          <input
            type="number"
            name="guests"
            value={numGuest}
            onChange={(e) => setNumGuest(e.target.value)}
          />
        </div>
        <button type="submit" className="search-spot-btn">
          <i className="fas fa-search" id="search-spot-btn-icon"></i>
        </button>
      </form>
      <div className="img-container">
        <img
          src={
            "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="campingsite"
        />
      </div>
    </div>
  );
};

export default HomeBookForm;
