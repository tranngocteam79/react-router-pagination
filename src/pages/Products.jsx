import { useEffect, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import Product from "../components/Product.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

export default function Products() {
  const currentPage = new URLSearchParams(useLocation().search).get("page");
  const navigate = useNavigate();

  const [productPerPage, setProductPerPage] = useState(8);
  const { data: currentsData, totalProducts } = useFetch(
    `https://dummyjson.com/products?limit=${productPerPage}&skip=${
      (currentPage - 1) * productPerPage
    }`
  );
  const numberOfPage = Math.ceil(totalProducts / productPerPage);

  useEffect(() => {
    console.log("effect");
    if (!currentPage) {
      navigate(`?page=1`);
    }
  }, []);

  return (
    <>
      <input
        id="input-product"
        type="number"
        onChange={(e) => {
          if (e.target.value === "") setProductPerPage(8);
          else setProductPerPage(e.target.value);
          navigate(`?page=1`);
        }}
      />
      <div className="product-list">
        {currentsData ? (
          currentsData.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
        {numberOfPage !== NaN && (
          <Pagination numberOfPage={numberOfPage} currentPage={currentPage} />
        )}
      </div>
    </>
  );
}
