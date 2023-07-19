import React, { FC } from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <div className="footer__content">
          <div className="footer__main-info">
            <div className="footer__store">
              <div className="footer__store-title">Store</div>
              <div className="footer__store-text">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </div>
            </div>
            <ul className="footer__links">
              <li className="footer__link head">Links</li>
              <li className="footer__link">
                <Link to={"/Home"} style={{ color: "#000" }}>
                  Home
                </Link>
              </li>
              <li className="footer__link">
                <Link to={"/Shop"} style={{ color: "#000" }}>
                  Shop
                </Link>
              </li>
              <li className="footer__link">
                <Link to={"/Contacts"} style={{ color: "#000" }}>
                  Contacts
                </Link>
              </li>
            </ul>
            <ul className="footer__help">
              <li className="footer__link head">Help</li>
              <li className="footer__link">Payment Options</li>
              <li className="footer__link">Returns</li>
              <li className="footer__link">Privacy Policies</li>
            </ul>
          </div>
          <div className="footer__sec-info">
            2023 store. All rights reverved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
