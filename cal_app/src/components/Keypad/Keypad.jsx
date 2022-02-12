import './Keypad.css';

function Keypad({inputKeys,showDataOnDisplay}) {
    
    return (
        <div className="keypad">
            <div className="inputKey-container">
                {inputKeys.map((inputKey, index) => (
                    <button onClick={(e) => showDataOnDisplay(e.target.textContent)} key={Date.now() + index}>{inputKey}</button>
                ))}
            </div>
        </div>
    );

}

export default Keypad;