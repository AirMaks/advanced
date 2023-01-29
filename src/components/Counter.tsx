import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev => prev+1);
    } 
    return (
        <>
            <div>{count}</div>
            <button className={classes.btn} onClick={increment}>Click</button>
        </>    
    )

}

export default Counter;