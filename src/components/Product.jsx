export default function Product({ product }) {
  return (
    <div className="product">
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description.slice(0, 100)}</p>
      <img src={product.thumbnail} alt={product.title} />
    </div>
  );
}
