import React, { FC, useState } from "react";
import "./header.scss";
import CartIcon from "../../imgs/Vector.svg";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CartMenu from "../CartMenu/CartMenu";
import { Link } from "react-router-dom";
import BurgerIcon from "../../imgs/Burger.png";
import ModalMenu from "../ModalMenu/ModalMenu";

const Header: FC = () => {
  const items = useTypesSelector((state) => state.cart.items);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function handleClickCart() {
    setIsVisible(true);
    disableScroll();
  }
  function handleClickMenu() {
    setIsVisibleMenu(true);
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
            <div className="header__icon-btns">
              <div className="header__burger" onClick={handleClickMenu}>
                <img src={BurgerIcon} alt="" />
              </div>
              <div className="header__cart-btn" onClick={handleClickCart}>
                <img src={CartIcon} alt="cart" />
                {items.length > 0 ? (
                  <div className="items-quantity">{items.length}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isVisible ? (
        <CartMenu isVisible={isVisible} setIsVisible={setIsVisible} />
      ) : null}
      {isVisibleMenu ? (
        <ModalMenu
          isVisibleMenu={isVisibleMenu}
          setIsVisibleMenu={setIsVisibleMenu}
        />
      ) : null}
    </>
  );
};

export default Header;
