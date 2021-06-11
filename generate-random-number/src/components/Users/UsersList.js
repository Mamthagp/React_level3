import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetusers } from '../../actions/usersAction'

const UsersList = (props) => {
    const dispatch = useDispatch()

    const users = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        //invoke a action creator
        dispatch(startGetusers())
    }, [])

    return (
        <div>
            <h2>Listing users - {users.length}</h2>
            <ul>
                {
                    users.map((user) => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default UsersList