import { useEffect, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import Product from "../components/Product.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export default function Products() {
  const pageNum = new URLSearchParams(useLocation().search).get("page");
  const navigate = useNavigate();

  const [totalProducts, setTotalProducts] = useState(null);
  const [productPerPage, setProductPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(pageNum || 1);
  const numberOfPage = Math.ceil(totalProducts / productPerPage);
  const [currentRecords, setCurrentRecords] = useState(null);

  useEffect(() => {
    console.log("effect");
    if (!pageNum) {
      navigate(`?page=1`);
    }
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => setTotalProducts(result.products.length));
  }, []);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${productPerPage}&skip=${
        (currentPage - 1) * productPerPage
      }`
    )
      .then((res) => res.json())
      .then((data) => setCurrentRecords(data.products));
  }, [productPerPage, currentPage]);

  console.log(pageNum);

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
        {currentRecords ? (
          currentRecords.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
        {numberOfPage !== NaN && (
          <Pagination
            setCurrentPage={setCurrentPage}
            numberOfPage={numberOfPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </>
  );
}
