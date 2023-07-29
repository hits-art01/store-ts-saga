import React, { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import CartBlock from "../../components/CartBlock/CartBlock";

const Cart: FC = () => {
  return (
    <div className="cart">
      <Header />
      <Banner title="Cart" />
      <CartBlock />
      <Footer />
    </div>
  );
};

export default Cart;
