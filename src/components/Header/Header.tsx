import React, { FC } from "react";
import "./header.scss";
import CartIcon from "../../imgs/Vector.svg";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__container _container">
        <div className="header__content">
          <div className="header__logoname">Store</div>
          <div className="header__menu menu">
            <ul className="menu__cont">
              <li className="menu__item">Home</li>
              <li className="menu__item">Shop</li>
              <li className="menu__item">Contacts</li>
            </ul>
          </div>
          <div className="header__cart-btn">
            <img src={CartIcon} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
