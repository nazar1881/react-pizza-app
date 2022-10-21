import { useDispatch, useSelector } from "react-redux";
import s from "./Shaurma.module.css"

const Shaurma = ({id, name, price, img}) => {

    let dispatch = useDispatch();
    let orders = useSelector(state => state.orders);

    let addOrder = (name, price) => {
        dispatch({type:"ADD_ITEM", payload:name, price})
    }

    let deleteOrder = (order) => {
        dispatch({type:"DELETE_ITEM", payload:{order}})
    }

    console.log(orders);

    return (
        <div className={s.itemWrapper}>
            <div >
                <img className={s.itemImg} src={img}></img>
            </div>
            <div className={s.itemInformation}>
                <span>Шаурма: {name}</span>
                <span>Ціна: {price}грн</span>
            </div>
            <button onClick={() => addOrder({id, name, price, img})} className={s.itemBtn}>В кошик</button>
        </div>
    )
}

export default Shaurma;