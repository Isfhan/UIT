import './Display.css';

function Display(props) {
    return (
        <div className="display-container">
            <div className="display">
               {props.result}
            </div>
        </div>
    );
}

export default Display;