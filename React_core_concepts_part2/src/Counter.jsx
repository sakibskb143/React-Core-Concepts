import { useState } from "react"

export default function (){
    const [count ,setCount] = useState(0);
    function addCount(){
        const newCount = count + 1 ;
        setCount(newCount);

    }

    function reduceCount(){
        let newCount = 0;
        if (count > 0) {
            newCount = count - 1;
        }
    
        console.log(count);
        setCount(newCount);
    }
    
   

   return (
   < div style={{border:'2px solid tomato ',marginBottom:'10px',padding:'10px'}}>
        <h2>Counder:{count}</h2>
        <button onClick={addCount}>Add Count</button>

        <button onClick={reduceCount}>Reduce Count</button>
   </div>)
}