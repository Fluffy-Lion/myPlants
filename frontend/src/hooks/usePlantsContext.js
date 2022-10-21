import { PlantsContext } from "../context/PlantContext";
import { useContext } from "react";

export const usePlantsContext = () => {
    const context = useContext(PlantsContext)
    if(!context) {
        throw Error('usePlantsContext must be used inside an PlantsContext Provider')
    }
    return context
}