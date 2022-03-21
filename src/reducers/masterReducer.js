import { typesMaster } from "../types/types";

const initialState = {
    masters: []
}

export const masterReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesMaster.register:
            return {
                masters: [action.payload]
            }
        
        case typesMaster.list:
            return {
                masters: [...action.payload]
            }

        case typesMaster.delete:
            return {
                masters: state.masters.filter(master => master.name !== action.payload)
            }
    
        default:
            return state
    }
}