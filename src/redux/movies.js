import api from "../api/api";

//constantes
const dataInicial = {
    array: [],
    detail: {}
}

//Types
const GET_POPULAR_OK = 'GET_POPULAR_OK'
const GET_DETAILS_OK = 'GET_DETAILS_OK'

//reducer
export default function moviesReducer(state= dataInicial, action) {
    switch (action.type) {
        case GET_POPULAR_OK:
            return {...state, array: action.payload}
        case GET_DETAILS_OK:
                return {...state, detail: action.payload}
        default: 
            return state
    }

}

// actions

export const obtenerPopularAction = () => async (dispatch, getState) => {
    try {
        const res = await api.get('/popular');
        dispatch({
            type: GET_POPULAR_OK,
            payload: res.data.results
        });
    } catch (error) {
        console.log(error);
    }

}

export const obtenerDetallesAction = (id) => async (dispatch) => {
    try {
        const res = await api.get(`/${id}`);
        dispatch({
            type: GET_DETAILS_OK,
            payload: res.data
        });
    } catch (error) {
        console.log(error);
    }

}