import { usePlantsContext } from "../hooks/usePlantsContext"

const PlantDetails = ({ plant }) => {
    const { dispatch } = usePlantsContext()
    const handleClick = async () => {
        const response = await fetch('/api/plants/' + plant._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_PLANT', payload: json})
        }
    }
    return (
        <div className="plant-details">
            <h4>{plant.plantName}</h4>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}
export default PlantDetails