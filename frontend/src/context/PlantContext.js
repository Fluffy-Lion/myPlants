import { createContext, useReducer } from 'react'

export const PlantsContext = createContext()

export const plantsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PLANTS':
            return { 
                plants: action.payload 
            }
        case 'CREATE_PLANT':
            return {
                plants: [action.payload, ...state.plants]
            }
        case 'DELETE_PLANT':
            return {
                plants: state.plants.filter((p) => p._id !== action.payload._id)
            }
        case 'UPDATE_PLANT':
            return {
                plants: state.plants.map((p) => p._id === action.payload._id ? action.payload : p )
            }
        default:
            return state
    }
}

export const PlantsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(plantsReducer, {
        plants: null
    })

    return (
        <PlantsContext.Provider value={{...state, dispatch}}>
            { children }
        </PlantsContext.Provider>
    )
}