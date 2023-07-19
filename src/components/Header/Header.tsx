import React, { FC, useState } from "react";
import "./header.scss";
import CartIcon from "../../imgs/Vector.svg";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CartMenu from "../CartMenu/CartMenu";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const items = useTypesSelector((state) => state.cart.items);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  function disableScroll() {
    // Get the current page scroll position in the vertical direction
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Get the current page scroll position in the horizontal direction

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function handleClick() {
    setIsVisible(true);
    disableScroll();
  }
  return (
    <>
      <div className="header">
        <div className="header__container _container">
          <div className="header__content">
            <div className="header__logoname">Store</div>
            <div className="header__menu menu">
              <ul className="menu__cont">
                <li className="menu__item">
                  <Link className="menu__link" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/Shop">
                    Shop
                  </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link" to="/Contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="header__cart-btn" onClick={handleClick}>
              <img src={CartIcon} alt="cart" />
              {items.length > 0 ? (
                <div className="items-quantity">{items.length}</div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {isVisible ? (
        <CartMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : null}
    </>
  );
};

export default Header;
