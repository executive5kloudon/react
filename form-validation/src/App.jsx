import React from "react";

const App = () =>{

 function submitHandler(e){
      e.preventDefault()
    }
  return (

   
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Something"></input>
        <button >Submit</button>
      </form>

    </div>
  )
}

export default App