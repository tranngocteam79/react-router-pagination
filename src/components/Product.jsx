import { Link } from "react-router-dom";
export default function Product({ product }) {
  return (
    <div className="product">
      <h2>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h2>
      <span>{product.price}</span>
      <p>{product.description.slice(0, 100)}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}
