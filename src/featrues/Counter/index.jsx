import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const handleIncreaseClick= () =>{
        const action = increase();
        console.log(action)
        dispatch(action)
    }
    const handleDecreaseClick= () =>{
        const action = decrease();
        console.log(action)
        dispatch(action)
    }
    return (
        <div>
            Count: {counter}

            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Increase</button>
            </div>
        </div>
    );
}

export default CounterFeature;