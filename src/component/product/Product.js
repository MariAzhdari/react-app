import React from "react";

const Product = (props) => {
    return (
      <div>
        <p>title : {props.title}</p>
        <p onClick={props.click}> price :{props.price}</p>
        <p>{props.children}</p>
      </div>
    );
}
export default Product;