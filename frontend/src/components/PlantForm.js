import {useState} from 'react'

const PlantForm = () => {
    const [plantName, setPlantName] = useState('')
    const [quickInfo, setQuickInfo] = useState('')
    const [light, setLight] = useState('')
    const [water, setWater] = useState('')
    const [repot, setRepot] = useState('')
    const [feed, setFeed] = useState('')
    const [nextWater, setNextWater] = useState('')

    const handleSubmit = () => {
        
    }
    return (
        <form className='createPlant' onSubmit={handleSubmit}>
            <h3>Add A Plant</h3>
            <label>Plant Name:</label>
            <input 
                type='text'
                onChange={(e) => setPlantName(e.target.value)}
                value={plantName}
                // add class name ternary is not entered
            />
            <label>Quick Info:</label>
            <textarea 
                type='text'
                onChange={(e) => setQuickInfo(e.target.value)}
                value={quickInfo}
                // add class name ternary is not entered
            />
            <label>Light:</label>
            <textarea 
                type='text'
                onChange={(e) => setLight(e.target.value)}
                value={light}
                // add class name ternary is not entered
            />
            <label>Water:</label>
            <textarea 
                type='text'
                onChange={(e) => setWater(e.target.value)}
                value={water}
                // add class name ternary is not entered
            />
            <label>Repot:</label>
            <textarea 
                type='text'
                onChange={(e) => setRepot(e.target.value)}
                value={repot}
                // add class name ternary is not entered
            />
            <label>Feed:</label>
            <textarea 
                type='text'
                onChange={(e) => setFeed(e.target.value)}
                value={feed}
                // add class name ternary is not entered
            />
            <label>Next Watered:</label>
            <textarea 
                type='text'
                onChange={(e) => setNextWater(e.target.value)}
                value={nextWater}
                // add class name ternary is not entered
            />
        </form>
    )
}

export default PlantForm
