import { usePlantsContext } from "../hooks/usePlantsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
import CalendarComponent from "./CalendarComponent";
const PlantDetails = ({ plant }) => {
  const [watered, setWatered] = useState(false)
  const { dispatch } = usePlantsContext();
  const handleClick = async () => {
    const response = await fetch("/api/plants/" + plant._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLANT", payload: json });
    }
  };
  return (
    <div className="plant-details">
      <h4>{plant.plantName}</h4>
      <p>{plant.quickInfo}</p>
      <p>
        {formatDistanceToNow(new Date(plant.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>delete</span>
      <div>
        <input type="checkbox" id="toWater" onChange={() => setWatered(!watered)}/>
        <label for="toWater">watered</label>
        {watered && <CalendarComponent />}
      </div>
    </div>
  );
};
export default PlantDetails;
