import React from "react";
import "./style/cards.css";
import { useContext } from "react";
import { StateContext } from "./StateProvider";
function Card({ items }) {
  const { dispatch } = useContext(StateContext);
  const addToBasket = (a) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: a.id,
        title: a.title,
        imgSrc: a.imgSrc,
        text: a.text,
      },
    });
  };
  return (
    <>
      <div className="row">
        {items.map((elem) => {
          const { id, imgSrc, title, text } = elem;
          return (
            
            <div className="content" key={id}>
            <div style={{height:"87%"}}> 
              <img src={imgSrc} alt="random" style={{width:"50%", height:"auto"}} />
              <h4>{title}</h4>
              <p>
                <span>&#x20B9;</span>
                {text}
              </p>
              </div>
              <button className="cart" onClick={() => addToBasket(elem)}>
                Add To Cart
              </button>
              </div>
          );
        })}
      </div>
    </>
  );
}
export default Card;
