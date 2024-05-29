import CartList from "./components/CartList";
import CartEmpty from"./components/CartEmpty";

import useTitle from "../../hooks/useTitle";
import { useCart } from "../../context";

const CartPage = () => {
  useTitle("Cart");
  const {cartList} =useCart();

  return (
    <main>
      {cartList.length ? <CartList/> : <CartEmpty/>}
    </main>
  )
}

export default CartPage
