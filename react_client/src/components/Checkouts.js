import react from "react";
import Subtotal from "./Subtotal";
import "./style/checkouts.css";
import {useContext} from "react";
import { StateContext } from "./StateProvider";
const Checkouts = () => {
  const {item} = useContext(StateContext);
  const {dispatch}=useContext(StateContext)
  const removefrombasket = (items) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id:items.id,
    });
  };
  return item.length ? (
    <>
      <div className="checkout_container">
        <div className="checkout_right">
          <Subtotal />
        </div>
        <h1 className="title">Your shopping basket</h1>
        <div className="checkout_left">
          {item.map((curele) => {
            const { id, title, text, imgSrc } = curele;
            return (
              <div className="checkoutproducts" key={id}>
                <img className="checkoutproducts_image" src={imgSrc} />
                <div className="checkoutproducts_info">
                  <p className="checkoutproducts_title">{title}</p>
                  <p className="checkoutproducts_price">
                    <small>&#x20B9;</small>
                    <strong>{text}</strong>
                  </p>
                </div>
                <button onClick={()=>removefrombasket(curele)} className="removebtn">Remove from cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  ) : <h1>No Items in Your Shopping cart</h1>;
};

export default Checkouts;
