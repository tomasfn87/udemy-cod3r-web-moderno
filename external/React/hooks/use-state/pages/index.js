import React, { useState } from "react"

function countInitial() {
  console.log("1st function", new Date().toISOString())
  return 4
}

/* 4) If you pass the function above to useState(countInitial), the
function will run everytime the component is rendered as well. */

function App() {

  const [ state, setState] = useState({ count: 4, theme: "blue" })
  const count = state.count
  const theme = state.theme

    /* const [count, setCount] = useState(4)
    const [theme, setTheme] = useState("blue")

    3) In the form above, the state (count = 4) will be read and run 
    every time our components render. In the form below, the function
    will be executed only the first time the component renders. */

    // const [count, setCount] = useState(() => {
    //   console.log("2nd function")
    //   return 4
    // })

    /* 5) By using the notation below, we avoid this problem. */
    // const [count, setCount] = useState(() => countInitial())
    

    function decrementCount() {
      setState(prevState => {
        return { ...prevState, count: prevState.count - 1 }
      })
      // setCount(prevCount => prevCount - 1)
      /* setCount(prevCount => prevCount - 1)

      1) In the format above we can perform both operations at once,
      thus subtracting 2 from count.
      The same is not possible if you write like this:

      setCount(count - 1)
      setCount(count - 1)

      2) The two lines above will overwrite each other, thus subtracting 
      only 1 from count. */
     
    } 
    
    function incrementCount() {
      setState(prevState => {
        return { ...prevState, count: prevState.count + 1 }
      })
      // setCount(prevCount => prevCount + 1)
      // setTheme("red")
    }
    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}-{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default App