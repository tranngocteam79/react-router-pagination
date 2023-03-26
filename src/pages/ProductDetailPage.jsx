import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ProductsDetailPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log("id of page", id);
  useEffect(() => {
    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, [id]);
  return (
    <>
      {product && (
        <div className="product-detail">
          <h2>{product.title}</h2>
          <span>{product.price}</span>
          <p>{product.description.slice(0, 100)}</p>
          <h5>{product.brand}</h5>
          <h6>{product.category}</h6>
          <img src={product.thumbnail} alt={product.title} />
        </div>
      )}
    </>
  );
}
