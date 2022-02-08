import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as spotActions from "../../store/spot";

const SpotReadOne = () => {
  // const dispatch = useDispatch();
  const { id } = useParams;
  const spot = useSelector((state) => state.spot[id]);

  useEffect(() => {
    // dispatch(spotActions.loadOne(id));
  }, []);

  return (
    <div className="spot-one-container">
      <h1>Your new Spot</h1>
      <p>{spot.name}</p>
    </div>
  );
};

export default SpotReadOne;
