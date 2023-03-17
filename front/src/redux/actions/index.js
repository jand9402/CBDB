export const GET_EMAILS = 'GET_EMAILS';


const axios = require('axios');


export function postUser (payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:4000/users/register", payload)
        return response
    }
}

export function login (payload){
    return async function (dispatch){
        const response = await axios.post('http://localhost:4000/users/login', payload)
        .then(({ data }) => {
            localStorage.setItem('auth', '"yes"')
            
        })
                    return response
                
    }
}

export const getEmails = () => (dispatch) => {
    return fetch("http://localhost:4000/emails")
    .then((response) => response.json())
    .then((json) => {dispatch({ type: GET_EMAILS, payload:json})})
};
