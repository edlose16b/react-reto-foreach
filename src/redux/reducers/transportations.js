import { API_URI } from "../../core/constans";
import { FETCH_TRANSPORTATIONS } from "../actions/actionTypes";
import { addNewTravel } from './../actions'
const initialState = []


const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_TRANSPORTATIONS:
            return [...payload];

        default:
            return state
    }
}

export default reducer;