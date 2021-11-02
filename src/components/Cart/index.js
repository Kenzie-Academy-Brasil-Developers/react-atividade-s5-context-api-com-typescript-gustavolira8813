import { useCart } from "../../Providers/Cart";
import ProductCard from "../ProductCard";

const Cart = () => {
  const { cart, deleteProductFromCart } = useCart();
  return (
    <ul className="products-list">
      {cart.map((product, i) => (
        <ProductCard key={i} title="cart" product={product} />
      ))}
    </ul>
  );
};
export default Cart;
