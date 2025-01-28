import React, { useEffect, useState } from "react"

const App = () => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        window.addEventListener('onIncrement', () => {
            setVal(window.myapp.counter);
        });
        window.addEventListener('onDecrement', () => {
            setVal(window.myapp.counter);
        });
    },[])

    return (
        <>
            React aqui
        </>
    )
}

export default App