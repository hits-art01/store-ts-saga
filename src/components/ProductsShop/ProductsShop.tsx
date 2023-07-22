import React, { FC, useEffect, useState, useMemo } from "react";
import { useTypesSelector } from "../../hooks/useTypesSelector";
import ProductItem from "../ProductItem/ProductItem";
import "./products-shop.scss";
import { useDispatch } from "react-redux";
import { ProductType } from "../../redux/types";
import { getProductsWatch } from "../../redux/actions";
import { useSearchedProducts } from "../../hooks/useSearchedProducts";

const ProductsShop: FC = () => {
  const products = useTypesSelector((state) => state.products.products);
  const [limitedProducts, setLimitedProdcuts] = useState<ProductType[]>([]);
  const [limit, setLimit] = useState<number>(30);
  const pages = useMemo(() => Math.ceil(products.length / limit), [limit]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const searchedAndLimitedProducts = useSearchedProducts(
    products,
    query,
    limit,
    page
  );

  function getPageProduct(sliceLimit: number) {
    const currentPage = products
      .slice(0, sliceLimit * page)
      .filter((product) => product.title.toLowerCase().includes(query));

    setLimitedProdcuts(currentPage);
  }

  useEffect(() => {
    dispatch(getProductsWatch());
  }, []);

  useEffect(() => {
    dispatch(getProductsWatch());
    getPageProduct(limit);
  }, [limit, page, query]);

  const dispatch = useDispatch();

  return (
    <div className="products-shop">
      <div className="products-shop__filter-bar filter-bar">
        <div className="filter-bar__container _container">
          <div className="filter-bar__content">
            <div className="filter-bar__limit">
              <div className="filter-bar__show">Show</div>
              <input
                className="filter-bar__input"
                type="number"
                min={1}
                max={30}
                value={limit > 0 ? limit : undefined}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLimit(+e.target.value)
                }
              />
            </div>
            <div className="filter-bar__search">
              <input
                type="text"
                placeholder="Search"
                className="filter-bar__search-input"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuery(e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="all-products">
        <div className="all-products__container _container">
          <div className="all-products__content">
            {limitedProducts.length
              ? limitedProducts.map((item: ProductType) => (
                  <ProductItem product={item} />
                ))
              : products
                  .slice(0, 30)
                  .map((item: ProductType) => <ProductItem product={item} />)}
          </div>
          <div className="all-products__pages-btns">
            <button
              className="page-btn"
              onClick={() => setPage((prev) => ++prev)}
            >
              {limit === 30 || pages === page ? "That's all" : "Show more"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsShop;
