import "./ShowCount.css";
import { useState } from 'react';

const ShowCount = () => {
    const [count, setCount] = useState(0);
    const sum = () => {
        setCount(count + 1);
    }
    const substract = () => {
        if(count > 0) {
            setCount(count - 1)
        }else {
            alert("No acepto valores menores a 0");
        }
    }
    return(
        <div className="showcount-container">
            <h1>El valor actual del contador es: {count}</h1>
            <div className="buttons-container">
                <button onClick={sum}>Sumar</button>
                <button onClick={substract}>Restar</button>
            </div>
        </div>
    )
}

export default ShowCount;