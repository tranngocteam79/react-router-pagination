import { useEffect, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import Product from "../components/Product.jsx";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [productPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPage = Math.ceil(products?.length / productPerPage);
  const currentRecords = products?.slice(
    currentPage * productPerPage - productPerPage,
    currentPage * productPerPage
  );

  console.log("currentPage", currentPage);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

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
