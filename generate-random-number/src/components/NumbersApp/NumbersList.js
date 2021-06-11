import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrementNumber, incrementNumber, removeNumber } from '../../actions/numbersAction'

const NumbersList = (props) => {
    const dispatch =  useDispatch()

    const numbers = useSelector((state) => {
        return state.numbers
    })

    const handleDecrement = (id) => {
        dispatch(decrementNumber(id))
    }

    const handleIncrement = (id) => {
        dispatch(incrementNumber(id))
    }

    const handleRemove = (id) => {
        dispatch(removeNumber(id))
    }

    return (
        <div>
            <h2>Numbers List Component</h2>
            <ul>
                {
                    numbers.map((number) => {
                        return (
                            <li key={number.id}>
                                {number.value}
                                <button onClick={() => {
                                    handleDecrement(number.id)
                                }}> - </button>
                                <button onClick={() => {
                                    handleIncrement(number.id)
                                }}> + </button>
                                <button onClick={() => {
                                    handleRemove(number.id)
                                }}>Remove</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NumbersList