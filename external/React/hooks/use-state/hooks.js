import { useEffect, useState } from "react"

function App() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        alert("Hello side effect!")
    })

    useEffect(
        () => {
        fetch("foo").then(() => setLoaded(true)) 
        },
        [count]
    )

    return (
    <button onClick={() => setCount(count + 1)}>
        {count}
    </button>
    )
}