import React from "react";
import { useHistory } from "react-router-dom";

import { useStateValue } from "./StateProvider";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = () => {
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          price: price,
          image: image,
          rating: rating,
        },
      });
    } else {
      history.push("/login");
    }
  };
  
  return (
    <div className="product">
      <div className="product__info">
        <p className="">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
