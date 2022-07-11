import { Fragment, FunctionComponent, useEffect, useState } from "react";
import { RadioButton } from "../component";
import { NavBar } from "../component/NavBar";

export interface ICheckoutProps{};

export const Checkout: FunctionComponent<ICheckoutProps> = (props) => {
const [level, setLevel] = useState("");
const kone = "Kone";
const iron = "Ironhide Catridge";
const handleOnChange = (event: any) =>{
setLevel(event.target.value);
setTotal(0)
}

const [productOne,setProductOne] = useState<number>(3488.99)
const productTwo = 529.99;
const [total, setTotal]= useState<number>(0);
const [checkProdOne, setCheckProdOne] = useState<boolean>(false);
const [checkProdTwo, setCheckProdTwo] = useState<boolean>(false);
const [all,setAll] = useState<boolean>(false);
const [prodOneCount, setProdOneCount] = useState<number>(0);
const [prodTwoCount, setProdTwoCount] = useState<number>(0);
const [payNow, setPayNow] = useState<boolean>(false);


const incrementOneCount = () => {
  setProdOneCount(prodOneCount + 1);
}
const decrementOneCount = () => {
  setProdOneCount(prodOneCount - 1); 
}

const incrementTwoCount = () => { 
  setProdTwoCount(prodTwoCount + 1);
}
const decrementTwoCount = () => {
  setProdTwoCount(prodTwoCount - 1); 
}

// to disable the button when it hits 0 
useEffect (()=>{

  if(level !== ""){setAll(false)}
  else{setAll(true)}


  if(prodOneCount <= 0){
    setCheckProdOne(true);
  }else{
    setCheckProdOne(false);
  }
  if(prodTwoCount <= 0){
    setCheckProdTwo(true);
  }else{
    setCheckProdTwo(false);
  }
  
}, [level, prodOneCount, prodTwoCount])

// the logic 
// if client is diamond include 20% discount.
// if purchases 3 and above, remove discount. change price. - KONE 
// if associate client include 5% discount. 
// if multiples of 3 skip the discount calculation
const [calculateOne, setCalculateOne] = useState<number>(0);
const [calculateTwo, setCalculateTwo] = useState<number>(0);


// calculate as you click
 useEffect(() => {
 
  if(level === "diamond"){
    if(prodTwoCount % 3 !== 0){
      setCalculateTwo (prodTwoCount * productTwo * 0.8);
    }
    if (prodTwoCount === 0){
      setCalculateTwo(0)
    }
    if(prodOneCount>2){
      setProductOne(2588.99)
     setCalculateOne(prodOneCount * productOne);
    }else{
      setProductOne(3488.99)
     setCalculateOne(prodOneCount * productOne * 0.8);
    }

  }
  if(level === "associate"){
    setCalculateOne(prodOneCount * productOne * 0.95);
    setCalculateTwo(prodTwoCount * productTwo * 0.95);
   
  }
  setTotal(calculateOne + calculateTwo);
  }, [level, calculateOne, calculateTwo, prodOneCount, productOne, prodTwoCount, productTwo]);

  const handleOnClick = () => setPayNow(true);
  

return(
  <Fragment>
     <NavBar />
    <div style={{padding:"50px"}}>
      <h1>This is the checkout page</h1>
  <div className="flex_row">
  <div>
        <h4>Level</h4>
        <p style={{lineHeight:"1px"}}>Please select a level</p>
        <div className="flex_row" onChange={handleOnChange}>
          <RadioButton value="associate" name="level" label="Associate"/>
          <div style={{marginLeft:"10px"}} />
          <RadioButton value="diamond" name="level" label="Diamond" />
        </div>
        
        {level === "diamond" ? <div style={{marginTop:"0px"}}>  
          <p>Diamond user perks</p>
          <ul>
            <li>20% off on non-promotional products</li>
          </ul>

          <label>Special Promo</label>
          <ul>
          <li>Get a discount on Kone where 3 or more purchased. The price dropped to RM 2588.99 per unit</li>
            <li>Get a 3 for 2 deal on Ironhide Cartridge</li>
          </ul>
        </div> : null}
        {level === "associate" ? <div style={{marginTop:"0px"}}>  
  
          <p>Associate user perks</p>
          <ul>
            <li>5% off on non-promotional products</li>
          </ul>
        
        </div> : null}


       
        </div>
        <div style={{marginLeft:"auto"}} >
          <h4>Products</h4>

          <div>
            <table>
              <tr>
                <th style={{width:"200px"}}>Product</th>
                <th>Price (RM)</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>{kone}</td>
                <td>{productOne}</td>
                <td> 
                  <div className="flex_row">
                   <button onClick={incrementOneCount} disabled={all} style={{marginLeft: "auto"}}>+</button>
                   <div style={{marginLeft: "15px", marginRight:"15px"}}>{prodOneCount}</div>
                    <button onClick={decrementOneCount} disabled={checkProdOne}>-</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>{iron}</td>
                <td>{productTwo}</td>
                <td>
                  <div className="flex_row"> 
                    <button onClick={incrementTwoCount} disabled={all} style={{marginLeft: "auto"}}>+</button>
                    <div style={{marginLeft: "15px", marginRight:"15px"}}>{prodTwoCount}</div>
                    <button onClick={decrementTwoCount} disabled={checkProdTwo}>-</button>
                  </div>
                </td>
              </tr>
           
            </table>
          </div>
          
          <div className="flex_row" style={{marginTop:"10px"}}>
            <label>Total:</label>
            <div style={{marginLeft:"10px"}}>RM {total.toFixed(2)}</div>
            <button style={{marginLeft:"auto"}} onClick={handleOnClick}>Pay Now</button>
          </div>
         {payNow ? <div>Amount to pay is, RM {total.toFixed(2)}</div> : null}
      </div>    
  </div>
  
    </div>
  </Fragment>
)
}