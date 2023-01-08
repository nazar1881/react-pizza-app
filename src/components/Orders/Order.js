import { useDispatch } from "react-redux";
import s from "./Order.module.css"

const Order = ({id, name, price, img, count}) => {

    let dispatch = useDispatch();

    let deleteOrder = (orderId) => {
        dispatch({type:"DELETE_ITEM", payload: orderId})
    }

    let incCount = () => {
        dispatch({type:"INC_ITEM"})
    }

    let decCount = () => {

    }

    
        console.log(id);
        console.log(name);
        console.log(count);
    

    return (
        <div className={s.orderWrapper}>
            <div className={s.imgWrapper}>
                <img src={img} className={s.img}></img>
            </div>
            <div className={s.infWrapper}>
                <div>
                    <span>Назва: {name}</span>
                </div>
                <div>
                    <span>Вартість: {price}грн</span>
                </div>
                <div >
                    <img></img>
                    <button onClick={() => decCount()}>minus</button>
                </div>
                <div>
                    <span>Кількість: {count}</span>
                </div>
                <div >
                    <img></img>
                    <button onClick={() => incCount()}>plus</button>
                </div>
                <button onClick={() => deleteOrder(id)} className={s.deleteBtn}>Видалити замовлення</button>
            </div>
        </div>
    )
}

export default Order;