import React from 'react'
const App = () => {

  const handleInput = (event) =>{
   console.log(event.target.value)
  }

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor='text-input'>Text Input:- </label>
      <input id="text-input" type={'text'} onChange={(event)=>{handleInput(event)}} />

      <br/>
      <br/>

      <label htmlFor='num-input'>Number input</label>
      <input id="num-input"  type={'number'} onChange={(event)=>{handleInput(event)}}/>
      <br/>
    </div>
  )
}


export default App;
