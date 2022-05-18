import React from "react";
import { getBasketTotal } from "./reducer";
import "./style/Subtotal.css";
import {useContext} from "react";
import { StateContext } from "./StateProvider";
function Subtotal() {
  const {item} = useContext(StateContext);
  console.log(item);
  return (
    <>
      <div className="subtotal">
      <h2>{item.type}</h2>
        <p className="amount">
          Subtotal of {item.length} items:&nbsp;
          <strong>&#x20B9; {getBasketTotal(item)}</strong>
        </p>
        {/* <small className="subtotal_gift">
          <input type="checkbox" />
          This order contains a gift
        </small> */}
        <button className="proceed_button">Proceed to checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
