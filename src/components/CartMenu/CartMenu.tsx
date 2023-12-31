import React, { FC, SetStateAction, useEffect, Dispatch } from "react";
import "./cart-menu.scss";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CartClose from "../../imgs/Group (6).png";
import DeleteIcon from "../../imgs/DeleteBtn.png";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/actions";

import { useNavigate } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";

interface CartProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const CartMenu: FC<CartProps> = ({ isVisible, setIsVisible }) => {
  const items = useTypesSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calcTotalPrice = (items: any[]) =>
    items
      .reduce((acc: any, item: { price: any }) => (acc += item.price), 0)
      .toFixed(2);

  function handleClick(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    setIsVisible(false);
    window.onscroll = function () {};
  }

  function openCartPage(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    setIsVisible(false);
    window.onscroll = function () {};
    navigate(`/Cart`);
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="cart-menu">
      <div data-aos="fade-left" className="cart-menu__container">
        <div className="cart-menu__content">
          <div className="cart-menu__header">
            <div className="cart-menu__header-title">Shopping Cart</div>
            <div className="cart-menu__close-btn" onClick={handleClick}>
              <img src={CartClose} alt="close" />
            </div>
          </div>
          <div className="cart-menu__goods">
            {items.length
              ? items.map((item) => (
                  <div className="cart-menu__product">
                    <div className="cart-menu__image">
                      <img src={item.thumbnail} alt="" />
                      {/* <ProductCover product={item} /> */}
                    </div>
                    <div className="cart-menu__title">{item.title}</div>
                    <div
                      className="cart-menu__delete-btn"
                      onClick={() => dispatch(deleteItemFromCart(item.id))}
                    >
                      <img src={DeleteIcon} alt="" />
                    </div>
                  </div>
                ))
              : "Cart is empty"}
          </div>
          <div className="cart-menu__footer">
            <div className="cart-menu__footer-title">Subtotal</div>
            <div className="cart-menu__total-price">
              {calcTotalPrice(items)}
            </div>
            <button className="cart-menu__open-btn" onClick={openCartPage}>
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMenu;
