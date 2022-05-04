import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as bookingActions from "../../store/booking";
import * as spotActions from "../../store/spot";
import "./SpotReadOne.css";

const SpotReadOne = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spot);
  const bookings = useSelector((state) => state.booking);
  const spot = spots[id];

  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numGuest, setNumGuest] = useState(1);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
      bookingActions.createBooking({
        spot_id: spot?.id,
        user_id: sessionUser.id,
        startDate,
        endDate,
        guests: numGuest,
      })
    )
      .then((data) => {
        setStartDate("");
        setEndDate("");
        alert("Your request was booked!");
        history.push(`/spots`);
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const deleteClick = async (e) => {
    e.preventDefault();
    await dispatch(spotActions.deleteSpot(spot));
    history.push("/spots");
  };

  const editClick = async (e) => {
    e.preventDefault();
    await dispatch(spotActions.loadOne(id));
    history.push(`/spots/edit/${id}`);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(bookingActions.deleteBook(e.target.value));
    history.push("/spots");
  };

  useEffect(() => {
    dispatch(spotActions.getSpots());
    dispatch(bookingActions.getBookings(id));
  }, [dispatch, id]);

  let actions;
  if (spot?.user_id === sessionUser?.id) {
    actions = (
      <>
        <button className="delete-spot" onClick={deleteClick}>
          Delete
        </button>
        <button className="update-spot" onClick={editClick}>
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="spot-one-container">
      <h1 className="pageHeader">{spot?.name}</h1>
      <div className="spot-info-container">
        <div className="spot-info-img-container">
          <img className="spot-one-img" src={spot?.img_link} alt="campsite" />
          <p className="spot-one-price">${spot?.price} per night</p>
        </div>
        <div className="spot-info-content-container">
          <div className="location-container">
            <h3>Street Address:</h3>
            <p>{spot?.address}</p>
            <h3>City, State Country:</h3>
            <p>
              {spot?.city}, {spot?.state} {spot?.country}
            </p>
            <h3>Coordinates (Lat, Long):</h3>
            <p>
              {spot?.lat}, {spot?.lng}
            </p>
          </div>
          <div className="host-info-container">
            <h3>Hosted by:</h3>
            <p>{spot?.User.username}</p>
            {sessionUser && actions}
          </div>
        </div>
      </div>
      <div id="booking-table-container">
        <table className="booking-table">
          <tr className="booking-headers-row">
            <th className="booking-headers border-r">Camper</th>
            <th className="booking-headers border-r">Start Date</th>
            <th className="booking-headers border-r">End Date</th>
            <th className="booking-headers">Guests</th>
          </tr>
          {bookings?.list?.map((books) => (
            <tr className="booking-info-row" key={books?.id}>
              <td className="booking-info border-r">{books?.User.username}</td>
              <td className="booking-info border-r">{books?.startDate}</td>
              <td className="booking-info border-r">{books?.endDate}</td>
              <td className="booking-info">{books?.guests}</td>
              {sessionUser?.id === books?.user_id && (
                <button
                  className="delete-book"
                  onClick={handleClick}
                  value={books?.id}
                >
                  Delete
                </button>
              )}
            </tr>
          ))}
        </table>
      </div>
      <div className="booking-form-container">
        <ul className="error-list">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="home-book-form">
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
      </div>
    </div>
  );
};

export default SpotReadOne;
