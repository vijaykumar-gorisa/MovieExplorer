import React, { useState } from "react";

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
        return(
            <div>
            <p>Counter: {count}</p>

            <button onClick= {() => 
                setCount(count+1)}
            >Increase</button>
            </div>
        );
    

    };

    export default Counter;
