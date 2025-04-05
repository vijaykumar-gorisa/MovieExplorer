import React from "react";

type Props = {
    name: string;
    age: number;
    email: string;
};

const Greeting: React.FC<Props> = ({name, age, email}) => {
    return(
        <div>
            <h2>name: {name}</h2>
            <p>age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )
}


export default Greeting;