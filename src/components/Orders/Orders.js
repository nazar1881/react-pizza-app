import { useSelector } from "react-redux"
import Order from "./Order";

const Orders = (props) => {

    let orders = useSelector(state => state.orders.orders);

    return (
        <div>
            <h2>Ваші замовлення:</h2>
            {
                orders.length 
                ? orders.map((order) => <Order key={order.id} id={order.id} name={order.name} price={order.price} img={order.img} count={order.count}/>)
                : <h3>Замовлень ще немає (</h3>
            }
        </div>
    )
} 

export default Orders;