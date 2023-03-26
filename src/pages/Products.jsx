import { useEffect, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import Product from "../components/Product.jsx";

export default function Products() {
  const [totalProducts, setTotalProducts] = useState(null);
  const [productPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPage = Math.ceil(totalProducts / productPerPage);
  const [currentRecords, setCurrentRecords] = useState(null);

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

  return (
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
  );
}
