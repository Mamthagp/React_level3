import React from 'react'
import { useSelector } from 'react-redux'

const Show = (props) => {
    const count = useSelector((state) => {
        return state.count
    })

    return (
        <div>
            <h2>COUNT - {count}</h2>
        </div>
    )
}

export default Show