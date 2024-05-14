import { useState } from "react"

export default function(){
    const [count ,setCount]= useState(11);

    function addplayer(){
        const newplayer = count + 1 ;
        setCount(newplayer);

    }

    function RemovePlayer(){
       setCount(count-1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'

    }

      return(
        <div style={teamStyle}>
            <h3>Players: {count}</h3>
            <button onClick={addplayer}>Add Player</button>
            <button style={{marginLeft:'10px'}} onClick={RemovePlayer}>Remove Player</button>

        </div>
      )


}