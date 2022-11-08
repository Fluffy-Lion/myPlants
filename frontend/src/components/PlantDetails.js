import { usePlantsContext } from "../hooks/usePlantsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useState } from "react";
import CalendarComponent from "./CalendarComponent";
const PlantDetails = ({ plant }) => {
  const [watered, setWatered] = useState(false)
  const [newWaterDate, setNewWaterDate] = useState("")
  const { dispatch } = usePlantsContext();

  const newUpdate = {
    ...plant,
    nextWaterDate: newWaterDate
  }

  let test = () => {
    console.log(newUpdate)
  }
  const handleClick = async () => {
    const response = await fetch("/api/plants/" + plant._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLANT", payload: json });
    }
  };
  const updatePlant = async (e) => {
    e.preventDefault()
    // plant.nextWaterDate = newWaterDate

    const response = await fetch("api/plants/" + newUpdate._id, {
      method: "PATCH",
      body: JSON.stringify(newUpdate),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({ type: "UPDATE_PLANT", payload: json })
    }
    console.log('updated')
    setWatered(false)
  }
  return (
    <div className="plant-details">
      <h4>{plant.plantName}</h4>
      <p>{plant.quickInfo}</p>
      <p>
        {formatDistanceToNow(new Date(plant.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>delete</span>
      <div>
        <p>next water date: {plant.nextWaterDate}</p>
        <input onChange={(e) => setNewWaterDate(e.target.value)}/>
        <button onClick={updatePlant}>update</button>
        <input value={watered} type="checkbox" id="toWater" onChange={() => setWatered(true)}/>
        <label  for="toWater">watered</label>
        {watered && <CalendarComponent updatePlant={updatePlant} setNextWaterDate={setNewWaterDate}/>}
      </div>
      
    </div>
  );
};
export default PlantDetails;
