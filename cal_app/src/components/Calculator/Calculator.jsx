import './Calculator.css';
import Display from '../Display/Display';
import { useState } from 'react';
import Keypad from '../Keypad/Keypad';

function Calculator() {
    // Initial state
    const [result, setResult] = useState('0');
    // Keyboard keys that show in calculator 
    const inputKeys = [7, 8, 9, '÷', 4, 5, 6, 'x', 1, 2, 3, '-', 0, '.', '=', '+', 'AC'];
    // Operators
    const operators = ['÷', 'x', '-', '+'];

    const showDataOnDisplay = (value) => {

        // Check if value is not equal 0 value is opreator & last insert value is not opreator
        if (result !== '0' && operators.includes(value) && !operators.includes(result[(result.length - 1)])) {
            setResult(result + value);
        }
        // Check value is digit & value is not equal to AC & =
        else if (!operators.includes(value) && value !== 'AC' && value !== '=') {
            (result !== '0') ? setResult(result + value) : setResult(value);
        }
        // Check value is AC so clear display 
        else if (value === 'AC') {
            setResult('0');
        }
        // Check value is equal to = so show calcluation in Dispaly
        else if (value === '=') {

            let equation = result;
            try {
                // Replace all X to *
                equation = equation.replaceAll('x', '*');
                // Replace all ÷ to /
                equation = equation.replaceAll('÷', '/');
            } catch (error) {
                console.info('sorry please input some data');
            }

            setResult(String(eval(equation)));
        }
    };

    return (
        <>
            <div className="cal-heading">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="React logo" />
                <h1>React Calculator</h1>
            </div>
            <div className="cal-container">
                {/* Display components where our output show */}
                <Display result={result} />
                {/* Keypad where all our button show */}
                <Keypad inputKeys={inputKeys} showDataOnDisplay={showDataOnDisplay} />
            </div>
        </>
    );
}

export default Calculator;