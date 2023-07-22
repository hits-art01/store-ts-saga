import { ProductType } from "../redux/types";
import { useMemo } from "react";

export const useSearchedProducts = (
  products: ProductType[],
  query: string,
  sliceLimit: number,
  page: number
) => {
  const currentPage = products.slice(0, sliceLimit * page);
  const searched = useMemo(() => {
    return currentPage.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }, [query]);

  return searched;
};
