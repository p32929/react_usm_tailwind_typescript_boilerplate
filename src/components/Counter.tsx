import React from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../others/StatesController';

interface Props {

}

const Counter: React.FC<Props> = (props) => {
    const states = useSelector(() => controller.states);

    return (
        <div >
            <h1>
                Counter {states.counter}
            </h1>
            <button onClick={() => {
                controller.increase()
            }}>++</button>
        </div>
    )

}

export default Counter;