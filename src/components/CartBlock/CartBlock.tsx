import React, { FC } from "react";
import "./cart-block.scss";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import DeleteIcon from "../../imgs/ant-design_delete-filled.svg";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/actions";

const CartBlock: FC = () => {
  const productsInCart = useTypesSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const calcTotalPrice = (items: any[]) =>
    items
      .reduce((acc: any, item: { price: any }) => (acc += item.price), 0)
      .toFixed(2);
  return (
    <div className="cart-block">
      <div className="cart-block__container _container">
        <div className="cart-block__content">
          <div className="cart-block__products">
            <div className="cart-block__prod-wrap cart-header">
              <div className="cart-header__title _first">Product</div>
              <div className="cart-header__title">Price</div>
            </div>
            {productsInCart.map((item) => (
              <div className=" cart-block__prod-wrap">
                <div className="prod-wrap__image">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="prod-wrap__title">{item.title}</div>
                <div className="prod-wrap__price">{item.price}</div>
                <div
                  className="prod-wrap__delete-btn"
                  onClick={() => dispatch(deleteItemFromCart(item.id))}
                >
                  <img src={DeleteIcon} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="cart-block__total">
            <div className="cart-block__total-cont">
              <div className="cart-block__total-title">Cart Total</div>
              <div className="cart-block__total-info">
                Total
                <div className="cart-block__total-price">
                  {calcTotalPrice(productsInCart)}
                </div>
              </div>
              <button className="cart-block__total-btn">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBlock;
