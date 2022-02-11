import "./SpotsViewAll.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as spotActions from "../../store/spot";
import SpotCard from "./SpotCard/SpotCard";

const SpotsViewAll = () => {
  const spots = useSelector((state) => state.spot.list);

  const dispatch = useDispatch();

  const dateNew = new Date();
  console.log(dateNew);
  console.log(typeof dateNew);

  useEffect(() => {
    dispatch(spotActions.getSpots());
  }, [dispatch]);

  return (
    <div className="spots-view-all-container">
      <h1>View All Spots</h1>
      <div className="spots-all-container">
        {spots?.map((spot, i) => (
          <SpotCard key={i} spot={spot} />
        ))}
      </div>
    </div>
  );
};

export default SpotsViewAll;
