import "./SpotsViewAll.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as spotActions from "../../store/spot";
import SpotCard from "./SpotCard/SpotCard";

const SpotsViewAll = () => {
  const spots = useSelector((state) => state.spot.list);

  const dispatch = useDispatch();
  console.log(spots);

  useEffect(() => {
    dispatch(spotActions.getSpots());
  }, [dispatch]);

  return (
    <div className="spots-view-all-container">
      <h1>View All Spots</h1>
      <div className="spots-all-container">
        {spots.map((spot, i) => (
          <SpotCard
            key={i}
            name={spot.name}
            img_link={spot.img_link}
            price={spot.price}
            city={spot.city}
            state={spot.state}
            id={spot.id}
          />
        ))}
      </div>
    </div>
  );
};

export default SpotsViewAll;
