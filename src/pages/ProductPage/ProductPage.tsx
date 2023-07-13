import React from "react";
import "./product-page.scss";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { ProductType } from "../../redux/types";

const ProductPage = () => {
  const product: any = useTypesSelector(
    (state) => state.current.currentProduct
  );
  console.log(product);
  return <div>{product.title}</div>;
};

export default ProductPage;
