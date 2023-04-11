import axios from 'axios';

export function getUsers(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/users');
        console.log(json.data)
        return dispatch({
            type: 'GET_USERS',
            payload: json.data
        })
    }
}