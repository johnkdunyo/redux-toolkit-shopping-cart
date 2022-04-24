import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

const Products = () => {

  const products = useSelector(state=>state.products.items)
  // console.log(products)

  return (
    <div>
      <ul className="products-container">
        {products.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
