import './button.css'
import {useState} from 'react'
function Playbutton({message,children,OnPlay,OnStop}){ 
 
  const [playing,SetPlaying]=useState(false);
  
  
  function clickHandle(e){
    e.stopPropagation();
    //console.log(className.message);
    
    if (playing) OnPlay()
      
    else OnStop();
    

     SetPlaying(!playing);
    
    
  }
  return (
  <button className="Playbutton" onClick= {clickHandle}> {children} { !playing ? "Play ⏯️" :" Pause ⏸️" }</button>
)
  
}
export default Playbutton;