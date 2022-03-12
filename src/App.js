import "./App.css";
import env from "react-dotenv";
import Navbar from "./components/navbar/navbar";
import { commerce } from "./library/commerce";
import Products from "./components/products/products";
import { useEffect, useState } from "react";
//import { SettingsEthernet, SettingsRemote } from "@material-ui/icons";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCarts = async () => {
    //const {data} = await commerce.cart.retrieve();
    setCart(await commerce.cart.retrieve());
    //console.log(data)
  };

  const addToCartHandler = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    //console.log(item)
  };

  const updateCartHandler = async (productId, quantity) => {
    const res = await commerce.cart.update(productId, { quantity });
    setCart(res.cart);
  };
  const removeFromCartHandler = async (productId) => {
    const res = await commerce.cart.remove(productId);
    setCart(res.cart);
  };
  const emptyCartHandler = async () => {
    const res = await commerce.cart.empty();
    setCart(res.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCarts();
  }, []);

  const fuck = () => (cart ? console.log(`this is the cart ${cart}  `) : null);
  fuck();
  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cart?.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                addToCartHandler={addToCartHandler}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                addToCartHandler={addToCartHandler}
                updateCartHandler={updateCartHandler}
                removeFromCartHandler={removeFromCartHandler}
                emptyCartHandler={emptyCartHandler}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
