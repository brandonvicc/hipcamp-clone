import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SpotReadOne = () => {
  const { id } = useParams();
  const spots = useSelector((state) => state.spot);
  const spot = spots[id];

  return (
    <div className="spot-one-container">
      <h1>Your new Spot</h1>
      <p>{spot.name}</p>
    </div>
  );
};

export default SpotReadOne;
