import { useLocation } from "react-router-dom";
import OrderFail from "./components/OrderFail";
import OrderSuccess from "./components/OrderSuccess";
import useTitle from "../../hooks/useTitle";
const OrderPage = () => {
  useTitle("order Summary")
  const {state} = useLocation();
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data}/> : <OrderFail/>}
    </main>
  )
}

export default OrderPage
