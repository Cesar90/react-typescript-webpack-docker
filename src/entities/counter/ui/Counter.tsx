import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    // const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();
    const { decrement, increment, addFive } = useCounterActions();

    const handleInc = () => {
        increment();
    };

    const handleDec = () => {
        decrement();
    };

    const handleAddFiv = () => {
        addFive(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={handleAddFiv}
                data-testid="incrementfive-btn"
            >
                Add 5
            </Button>
            <Button
                onClick={handleInc}
                data-testid="increment-btn"
            >
                increment
            </Button>
            <Button
                onClick={handleDec}
                data-testid="decrement-btn"
            >
                decrement
            </Button>
        </div>
    );
};
