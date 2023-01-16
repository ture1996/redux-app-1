import {useDispatch, useSelector} from 'react-redux';
import { makeSelectValue } from './selectors';
import { decrements, increments } from './slice';

export const Counter = () => {

    const counter = useSelector(makeSelectValue);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increments())
    }

    const handleDecrement = () => {
        dispatch(decrements())
    }

    return(<div>
        <button onClick={handleIncrement}>Povecaj</button>
        {counter}
        <button onClick={handleDecrement}>Smanji</button>
        </div>
    )

}