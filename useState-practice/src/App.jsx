import React, { useState } from "react";


const App = ()=>{
  const [num, setNum] = useState(0)
  function increateNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  function jump5Num(){
    setNum(num+5)
  }
  return (
    <div className="parent">
      <div className="nav">
      <h1>{num}</h1>
      <button onClick={increateNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>jump5Num</button>
      </div>
    </div>

  )

}
export default App;