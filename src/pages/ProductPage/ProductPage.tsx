import React, { useState } from "react";
import "./product-page.scss";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import { ProductType } from "../../redux/types";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../../redux/actions";
import ProductBuy from "../../components/ProductBuy.tsx/ProductBuy";
import { Tabs, TabPanel, Tab, TabList } from "react-tabs";
import LinkBar from "../../components/LinkBar/LinkBar";
import Product from "../../components/Product/Product";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import Related from "../../components/Related/Related";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
  return (
    <div className="product-page">
      <Header />
      <LinkBar />
      <Product />
      <ProductTabs />
      <Related />
      <Footer />
    </div>
  );
};

export default ProductPage;
