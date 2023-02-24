import React from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../others/StatesController';

interface Props {

}

const Counter: React.FC<Props> = (props) => {
    const states = useSelector(() => controller.states);

    return (
        <div >
            <h1 className="text-3xl font-bold text-red-500 underline text-center">
                Counter {states.counter}
            </h1>
            <button className='text-3xl font-bold text-red-500 underline text-center' onClick={() => {
                controller.increase()
            }}>++</button>
        </div >
    )

}

export default Counter;