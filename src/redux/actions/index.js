import { API_URI } from "../../core/constans";
import { FETCH_TRAVELS, ADD_NEW_TRAVEL, FETCH_TRANSPORTATIONS } from "./actionTypes";


export const fetchTransportations = () => (dispatch, getState) => {


    console.log('Fetching transportations');

    fetch(`${API_URI}transportations`)
        .then(response => response.json())
        .then((response) => {
            console.log('Response -> ', response);
            dispatch({ type: FETCH_TRANSPORTATIONS, payload: response });

        })


}

export const fetchTravels = () => (dispatch, getState) => {
    fetch(`${API_URI}travels`)
        .then(response => response.json())
        .then((response) => {
            console.log('Response -> ', response);
            dispatch({ type: FETCH_TRAVELS, payload: response });

        })
}

export const registerEmition = (payload) => async (dispatch, getState) => {

    console.log('POST', payload);
    var response = await fetch(`${API_URI}travels`, {
        method: 'POST', body: JSON.stringify(payload), headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })

    response = await response.json()

    console.log('Response -> ', response);

    dispatch({ type: ADD_NEW_TRAVEL, payload: response })

}

// export const registerEmition = payload => ({
//     type: FETCH_TRAVELS,
//     payload
// })

export const addNewTravel = payload => ({
    type: ADD_NEW_TRAVEL,
    payload
})

