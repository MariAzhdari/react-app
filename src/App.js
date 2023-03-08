import React, { useState } from 'react';
import Product from './component/product/Product';
const App =(props)=>{
const[product ,setProduct]=useState({
    product: [
      { title: "book1", price: 80 },
     { title: "book2", price: 60 },
      { title: "book3", price: 20 },
    ],
})
const changeHandler =()=>{
  setProduct({   product: [
      { title: "book1", price: 800 },
      { title: "book2", price: 600 },
       { title: "book3", price: 200 },
    ],})

  
}
return(
      <div className='container'>
        <h1>Mari Book shop</h1>
        <Product
          title={product.product[0].title}
          price={product.product[0].price}
         
        />
        <Product
          title={product.product[1].title}
          price={product.product[1].price}
        />
        <Product
          title={product.product[2].title}
          price={product.product[2].price}
          click={changeHandler}
        />
        <button style={{backgroundColor:"yellow-green"}} onClick={changeHandler}>click me</button>
      </div>
    );
}

export default App;
