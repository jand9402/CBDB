


const axios = require('axios');


export function postUser (payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:4000/users/register", payload)
        return response
    }
}
