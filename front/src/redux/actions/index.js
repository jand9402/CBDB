export const GET_TATUADORES = 'GET_TATUADORES';
export const FILTER_BY_COUNTRY = 'FILTER_BY_COUNTRY';
export const ALL_TATUADORES = 'ALL_TATUADORES';
export const FILTER_BY_CITY = 'FILTER_BY_CITY';
export const FILTER_BY_STYLE = 'FILTER_BY_STYLE';


const axios = require('axios');


export const getTatuadores = () => (dispatch) => {
    return fetch("")
    .then((response) => response.json())
    .then((json) => {dispatch({ type: GET_TATUADORES, payload:json})})
};


export function paisFilter(value){
    return{
        type: FILTER_BY_COUNTRY,
        payload: value
    }
}

export function ciudadFilter(value){
    return{
        type: FILTER_BY_CITY,
        payload: value
    }
}

export function estiloFilter(value){
    return{
        type: FILTER_BY_STYLE,
        payload: value
    }
}

export function todos(value){
    return{
        type: ALL_TATUADORES,
        payload: value
    }
  }