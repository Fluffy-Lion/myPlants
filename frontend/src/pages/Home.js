import { useEffect, useState } from 'react'
import PlantDetails from '../components/PlantDetails'
const Home = () => {
    const [plants, setPlants] = useState(null)

    useEffect(() => {
        const fetchPlants = async () => {
            // ONLY FOR DEVELOPMENT!
           const response = await fetch('/api/plants') 
           const json = await response.json()
           if(response.ok) {
            setPlants(json)
           }
        }
        fetchPlants()
    }, [])
    return (
        <div className='home'>
            <div className='plants'>
                {plants && plants.map((plant) => (
                    <PlantDetails key={plants._id} plant={plant} />
                ))}
            </div>
        </div>
    )
}
export default Home
