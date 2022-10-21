import { useSelector } from "react-redux"
import Order from "./Order";

const Orders = (props) => {

    let orders = useSelector(state => state.orders);

    return (
        <div>
            <h2>Ваші замовлення:</h2>
            {
                orders.map((order) => <Order key={order.id} name={order.name} price={order.price} img={order.img}/>)
            }
        </div>
    )
} 

export default Orders;