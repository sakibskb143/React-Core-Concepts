import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter'
import Teams from './Teams'
import Users from './Users'
import Friends from './Friends'
import './App.css'


function App() {
  function clickHandler (){
    alert("button is triggering by unknown..");
  }
  function clickHandler2 (){
    alert("triggering button two..");
  }
  const clickHandler3 = (num) => {
    alert(num+5);
  }
  const num = 5 ;

  return (
    <>
      
      <h3>React Core concepts</h3>
      <Friends></Friends>
      <Users></Users>
      <Teams></Teams>
      <Counter></Counter>
      <button onClick={clickHandler}>Click Me</button>
      <button onClick={()=>clickHandler2()}>button2</button>
      <button onClick={() => alert(num + 5)}>Add me</button>
  
     
     
    </>
  )
}

export default App
