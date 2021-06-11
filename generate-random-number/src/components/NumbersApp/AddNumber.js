import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numbersAction'

const AddNumber = (props) => {
    const [ number, setNumber ] = useState('')
    const dispatch = useDispatch()

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const num = {
            id:Number(new Date()),
            value:Number(number)
        }
        //console.log(num)
        dispatch(addNumber(num))
        setNumber('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={number} onChange={handleNumberChange} placeholder='Enter a number' />
            </form>
        </div>
    )
}

export default AddNumber