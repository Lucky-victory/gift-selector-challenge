import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Overlay from './overlay';

export default function GiftSelector() {
   const balloonCheckbox = useRef();
   const [noFood, setNoFood] = useState(false);
   const [isChecked, setIsChecked] = useState(true);
   const [hideOverlay, setHideOverlay] = useState(true);
   const [noTransport, setNoTransport] = useState(false);
   const [food, setFood] = useState({ price: '', name: '' });

   const [transport, setTransport] = useState({ type: '', amount: '' });

   const [totalCost, setTotalCost] = useState(null);

   const selectFood = (evt) => {
      const price = evt.target.selectedOptions[0].value;
      const name = evt.target.selectedOptions[0].dataset.foodName;
      setFood({ price, name });
      setHideOverlay(true);
      

   }

   const selectTransport = (evt) => {
      const type = evt.target.selectedOptions[0].dataset.transportType;
      const amount = evt.target.selectedOptions[0].value;
      setHideOverlay(true);

      setTransport({ type, amount })
   }
   const toggleBalloon=()=>{
      setIsChecked(!isChecked);
      //  balloonCheckbox.current.checked =isChecked
   }

   const Calculate = () => {

      if (food.price === '') {
         return setNoFood(true);
      }
      if (transport.amount === '') {
      setNoFood(false);

         return setNoTransport(true);
      }
      const totalCost = parseInt(food.price) + parseInt(transport.amount);
      setTotalCost(totalCost);
      setNoFood(false);
      setNoTransport(false);
      setHideOverlay(false)
   }

   return (
      <div className='container'>
      {!hideOverlay &&
      <Overlay transport={transport} food={food} totalCost={totalCost}   hasBalloon={isChecked}/>
      }
      <h1>Gift Selector 💝</h1>

        <form>
            <label for="food-select">Select food:</label>
            <select id="food-select" onChange={selectFood }>
                <option value="">--Please select an option--</option>
                <option value="5" data-food-name='🍓 strawberries'>  🍓 strawberries - $5</option>
                <option value="10" data-food-name='🍫 chocolate'>🍫 chocolate - $10</option>
                <option value="20" data-food-name="🧁 cupcakes">🧁 cupcakes - $20</option>
            </select>
         {noFood ? <span className='error-message'>please select a food</span>:''} 
            <br/>
            <label for="transport-select">Select transport:</label>
            <select id="transport-select" onChange={selectTransport}>
                <option value="">--Please select an option--</option>
                <option value="5" data-transport-type='🛹 rollerskates'>🛹 rollerskates - $5</option>
                <option value="50" data-transport-type='🚗 limo'>🚗 limo - $50</option>
                <option value="500" data-transport-type='🚁 helicopter'>🚁 helicopter - $500</option>
            </select>
              {noTransport ? <span className='error-message'>please select transport</span>:''} 
       
            <br/>
            <div>
                <label for="balloon-checkbox">Add balloons? </label>            
         <input type="checkbox" id="balloon-checkbox" name="balloon-checkbox" ref={balloonCheckbox}  onClick={toggleBalloon} checked={isChecked}/>
            </div>
            
         <button id="btn" type="button" onClick={Calculate}>Calculate</button>
        </form> 

  
      </div>
   )
}


ReactDOM.render(<GiftSelector />, document.getElementById('root'));