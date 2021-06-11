import axios from 'axios'

// if the action is performing any kind of asynchronous operation they either prefix it with the 
//keyword start or they  prefix it with async

// getState - to read the value of state we can use it. In this we don't require it.

export const startGetusers = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data
                dispatch(setUsers(users))
            })
            .catch((err) => {
                alert(err.message)
            })
        // api call
        // setTimeout(() => {
        //     dispatch({type:'SET_USERS', payload:['jack', 'jiny']})
        // }, 2000)
    }
}

export const setUsers = (users) => {
    return {
        type:'SET_USERS', 
        payload:users
    }
}
