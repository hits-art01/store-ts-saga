import React, {
  FC,
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from "react";
import "./modal-menu.scss";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import CartClose from "../../imgs/Group (6).png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

interface CartProps {
  isVisibleMenu: boolean;
  setIsVisibleMenu: Dispatch<SetStateAction<boolean>>;
}

const ModalMenu: FC<CartProps> = ({ isVisibleMenu, setIsVisibleMenu }) => {
  const items = useTypesSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(e: { stopPropagation: () => void }) {
    e.stopPropagation();
    setIsVisibleMenu(false);
    window.onscroll = function () {};
  }

  function openPage(page: string) {
    setIsVisibleMenu(false);
    window.onscroll = function () {};
    navigate(page);
  }

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="modal-menu">
      <div data-aos="fade-left" className="modal-menu__container">
        <div className="modal-menu__content">
          <div className="modal-menu__header">
            <div className="modal-menu__title">Menu</div>
            <div className="modal-menu__close-btn" onClick={handleClick}>
              <img src={CartClose} alt="close" />
            </div>
          </div>
          <div className="modal-menu__links-btn">
            <button
              className="modal-menu__link"
              onClick={() => openPage("/Home")}
            >
              {">"} Home
            </button>
            <button
              className="modal-menu__link"
              onClick={() => openPage("/shop")}
            >
              {">"} Shop
            </button>
            <button
              className="modal-menu__link"
              onClick={() => openPage("/contacts")}
            >
              {">"} Contacts
            </button>
            <button
              className="modal-menu__link"
              onClick={() => openPage("/cart")}
            >
              {">"} Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
