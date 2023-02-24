import React from 'react'
import { useSelector } from 'react-redux';
import { controller } from '../others/StatesController';

interface Props {

}

const Counter: React.FC<Props> = (props) => {
    const states = useSelector(() => controller.states);

    return (
        <div >
            <h1 className="text-3xl font-bold text-red-900 underline ">
                Counter {states.counter}
            </h1>
            <button className='middle none center rounded-lg bg-red-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' onClick={() => {
                controller.increase()
            }}>++</button>
        </div >
    )

}

export default Counter;