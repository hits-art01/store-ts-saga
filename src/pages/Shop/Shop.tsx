import React, { FC } from "react";
import "./shop.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import ProductsShop from "../../components/ProductsShop/ProductsShop";

const Shop: FC = () => {
  return (
    <div className="shop">
      <Header />
      <Banner title="Shop" />
      <ProductsShop />
      <Footer />
    </div>
  );
};

export default Shop;
