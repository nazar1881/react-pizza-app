import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./Drinks.module.css"

const Drink = ({id, name, price, img, count}) => {

    let dispatch = useDispatch();
    let orders = useSelector(state => state.orders);

    let addOrder = () => {
        const item = {
            id, 
            name, 
            price, 
            img, 
            count
        }
        const findItem = orders.orders.find((i) => i.id == item.id) 
        
        if (findItem) {
            findItem.count ++
        } else {
            dispatch({type:"ADD_ITEM", payload: item})
        }
    }

    return (
        <div className={s.itemWrapper}>
            <div >
                <img className={s.itemImg} src={img}></img>
            </div>
            <div className={s.itemInformation}>
                <span>Напій: {name}</span>
                <span>Ціна: {price}грн</span>
            </div>
            
            <button onClick={() => {
                addOrder()
            }} className={s.itemBtn}>В кошик</button>
        </div>
    )
}

export default Drink;