import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './actions/countActions'

const Btn = (props) => {

    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {
                dispatch(increment())
            }}>+1 from btn component</button>
        </div>
    )
}

export default Btn