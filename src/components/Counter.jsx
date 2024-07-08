import React, {useState} from 'react'

export default function Counter() {

//    let count = 0
    const [count, setCount] = useState(0)


  function increment(){
    let number = count + 1
    setCount(number)
  }

  function decrement()
  {
    let number = count - 1
    setCount(number)
  }


  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
    </div>
  )
}
