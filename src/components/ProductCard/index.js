import { useCart } from "../../Providers/Cart";
import "./styles.css";
const ProductCard = ({ product, title }) => {
  const { addProductToCart, deleteProductFromCart } = useCart();
  return (
    <li className="card">
      <img
        className="card-item card-img"
        src={product.image}
        alt={product.title}
      />
      <h3 className="card-item card-title">{product.title}</h3>
      <h2 className="card-item card-price">{product.price}</h2>
      {title === "cart" ? (
        <button onClick={() => deleteProductFromCart(product)}>Remover</button>
      ) : (
        <button onClick={() => addProductToCart(product)}>Adicionar</button>
      )}
    </li>
  );
};
export default ProductCard;
