import React from 'react';
import ReactDOM from 'react-dom';


export default function GiftSelector(){
   
   
   return (
      <div className='container'>
      <h1>Gift Selector </h1>
        <p className="result" id="result">Total gift cost: <span id="cost-el">...</span></p>
        <form>
            <label for="food-select">Select food:</label>
            <select id="food-select">
                <option value="">--Please select an option--</option>
                <option value="5"> strawberries - $5</option>
                <option value="10">chocolate - $10</option>
                <option value="20">cupcakes - $20</option>
            </select>
            <br/>
            <label for="transport-select">Select transport:</label>
            <select id="transport-select">
                <option value="">--Please select an option--</option>
                <option value="5">rollerskates - $5</option>
                <option value="50">limo - $50</option>
                <option value="500">helicopter - $500</option>
            </select>
            <br/>
            <div>
                <label for="balloon-checkbox">Add balloons? </label>            
                <input type="checkbox" id="balloon-checkbox" name="balloon-checkbox"  />
            </div>
            
         <button id="btn" type="button">Calculate</button>
        </form> 

  
      </div>
      )
}


ReactDOM.render(<GiftSelector />,document.getElementById('root'));