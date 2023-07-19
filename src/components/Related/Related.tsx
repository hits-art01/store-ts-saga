import React, { FC } from "react";
import "./related.scss";
import Slider from "react-slick";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import Product from "../Product/Product";
import ProductItem from "../ProductItem/ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductType } from "../../redux/types";

const Related: FC = () => {
  const products = useTypesSelector((state) => state.products.products);
  const current: any = useTypesSelector(
    (state) => state.current.currentProduct
  );
  const category = current.category;
  const currentId = current.id;
  const relatedProducts = products.filter(
    (item: ProductType) => item.category === category
  );
  const relatedProductsWithoutCurrent = relatedProducts.filter(
    (item: ProductType) => item.id !== currentId
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="related">
      <div className="related__container _container">
        <div className="related__content">
          <div className="related__title">Related Products</div>
          <div className="related__slider">
            <Carousel
              dotListClass="custom-dot-list-style"
              responsive={responsive}
              focusOnSelect={true}
              containerClass="carousel-container"
              infinite={true}
              partialVisible={true}
            >
              {relatedProductsWithoutCurrent.map((item: ProductType) => (
                <div key={item.title}>
                  <ProductItem product={item} />
                </div>
              ))}
            </Carousel>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
