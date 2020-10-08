import { API_URI } from "../../core/constans";
import { FETCH_TRAVELS, ADD_NEW_TRAVEL, FETCH_TRANSPORTATIONS } from "./actionTypes";


export const fetchTransportations = () => async (dispatch, getState) => {


    console.log('Fetching transportations');

    const response = await fetch(`${API_URI}transportations`)
    let data = await response.json();

    // console.log('Response -> ', data);

    dispatch({ type: FETCH_TRANSPORTATIONS, payload: data });



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
    const response = await fetch(`${API_URI}travels`, {
        method: 'POST', body: JSON.stringify(payload), headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    })

    let data = await response.json()
    // console.log('Response -> ', data);

    dispatch({ type: ADD_NEW_TRAVEL, payload: data })

}