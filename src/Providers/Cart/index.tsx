import { useContext, createContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addProductToCart: (product: Product) => void;
  deleteProductFromCart: (product: Product) => void;
}
const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([] as Product[]);

  const addProductToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const deleteProductFromCart = (product: Product) => {
    const newCart = cart.filter((e) => e.id !== product.id);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, deleteProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
