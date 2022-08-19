import {useState} from 'react'
import '../App.css'
import { usePlantsContext } from '../hooks/usePlantsContext'
const PlantForm = () => {
    const { dispatch } = usePlantsContext()
    const [plantName, setPlantName] = useState('')
    const [quickInfo, setQuickInfo] = useState('')
    const [light, setLight] = useState('')
    const [water, setWater] = useState('')
    const [repot, setRepot] = useState('')
    const [feed, setFeed] = useState('')
    const [nextWater, setNextWater] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const plant = {
            plantName,
            quickInfo,
            light,
            water,
            repot,
            feed,
            nextWater
        }

        const response = await fetch('/api/plants', {
        method: 'POST',
        body: JSON.stringify(plant),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const json = await response.json()
    if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        setEmptyFields([])
        setError(null)
        setPlantName('')
        setQuickInfo('')
        setLight('')
        setWater('')
        setRepot('')
        setFeed('')
        setNextWater('')
        console.log('new plant added', json)
        dispatch({ 
            type:'CREATE_PLANT',
            payload: json
        })
    }
    }
    return (
        <form className='createPlant' onSubmit={handleSubmit}>
            <h3>Add A Plant</h3>
            <label>Plant Name:</label>
            <input 
                type='text'
                onChange={(e) => setPlantName(e.target.value)}
                value={plantName}
                className={emptyFields.includes('plantName') ? 'error': ''}
            />
            <label>Quick Info:</label>
            <textarea 
                type='text'
                onChange={(e) => setQuickInfo(e.target.value)}
                value={quickInfo}
                className={emptyFields.includes('quickInfo') ? 'error': ''}
            />
            <label>Light:</label>
            <textarea 
                type='text'
                onChange={(e) => setLight(e.target.value)}
                value={light}
                className={emptyFields.includes('light') ? 'error': ''}
            />
            <label>Water:</label>
            <textarea 
                type='text'
                onChange={(e) => setWater(e.target.value)}
                value={water}
                className={emptyFields.includes('water') ? 'error': ''}
            />
            <label>Repot:</label>
            <textarea 
                type='text'
                onChange={(e) => setRepot(e.target.value)}
                value={repot}
                className={emptyFields.includes('repot') ? 'error': ''}
            />
            <label>Feed:</label>
            <textarea 
                type='text'
                onChange={(e) => setFeed(e.target.value)}
                value={feed}
                
            />
            <label>Next Watered:</label>
            <textarea 
                type='text'
                onChange={(e) => setNextWater(e.target.value)}
                value={nextWater}
              
            />
            <button>submit</button>
            {error && <h2>{error}</h2>}
        </form>
    )
}

export default PlantForm
