import React, { FC } from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import ProductBuy from "../ProductBuy.tsx/ProductBuy";
import "./product.scss";

const Product: FC = () => {
  const product: any = useTypesSelector(
    (state) => state.current.currentProduct
  );
  return (
    <div className="product">
      <div className="product__container _container">
        <div className="product__content">
          <div className="product__img">
            <img src={product.thumbnail} alt="" />
          </div>
          <div className="product__info">
            <div className="product__main-info">
              <div className="product__title">{product.title}</div>
              <div className="product__price">{product.price}</div>
              <div className="product__description">
                {product.description}. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quibusdam voluptatibus consequatur libero
                consequuntur nobis quae aut dolores quis porro laborum.
              </div>
              <ProductBuy product={product} classNameBtn="product__btn" />
            </div>
            <div className="product__secondary-info">
              <div className="secondary-info__cont">
                <div className="secondary-info__column">
                  <div className="secondary-info__text">Category</div>
                  <div className="secondary-info__text">Brand</div>
                  <div className="secondary-info__text">Rating</div>
                </div>
                <div className="secondary-info__column">
                  <div className="secondary-info__text">
                    : {product.category}
                  </div>
                  <div className="secondary-info__text">: {product.brand}</div>
                  <div className="secondary-info__text">: {product.rating}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
