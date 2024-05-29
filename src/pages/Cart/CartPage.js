import CartList from "./components/CartList";
import CartEmpty from"./components/CartEmpty";
import { useCart } from "../../context";
import useTitle from "../../hooks/useTitle";
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
