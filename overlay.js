import React,{useState} from 'react';


export default function Overlay({food,transport,totalCost,hasBalloon}){
   
   const [hidden,setHidden]=useState(false);
   
   const hideOverlay=()=>{
      setHidden(true)
   }
   return(
      <div className={hidden ? 'overlay hide':"overlay"} onClick={hideOverlay} style={{backgroundImage: hasBalloon ?'url(/balloon.gif)' :""}}>
      <h2>Your Order</h2>
      <p><b>Food:</b> {food.name}</p>
      <p><b>Delivery:</b> {transport.type}</p>
              <p className="result" id="result">Total gift cost: <span id="cost-el">${totalCost || '...'}</span></p>
              
              <span className='faded-text'>click to close</span>
      </div>
      
      
      )
}