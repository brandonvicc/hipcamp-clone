import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as bookingActions from "../../store/booking";

const SpotReadOne = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spot);
  const bookings = useSelector((state) => state.booking);
  const spot = spots[id];

  useEffect(() => {
    dispatch(bookingActions.getBookings(id));
  }, [dispatch, id]);

  return (
    <div className="spot-one-container">
      <h1>Your new Spot</h1>
      <p>{spot.name}</p>

      <ul>
        {bookings.list?.map((books) => (
          <li key={books.id}>{books.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpotReadOne;
