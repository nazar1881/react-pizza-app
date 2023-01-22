import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Shaurma.module.css"

const Shaurma = ({id, name, price, img, count}) => {

    let dispatch = useDispatch();
    let orders = useSelector(state => state.orders);
    let shaurmas = useSelector(state => state.shaurmas)

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


    /*let addOrder = () => {
        const item = {
            id, 
            name, 
            price, 
            img, 
            count
        }
       dispatch({type:"ADD_ITEM", payload: item})
    }*/
 

    console.log(orders);
    console.log(count);
    //console.log(shaurmas);

    return (
        <div className={s.itemWrapper}>
            <div >
                <NavLink to={`shaurma-details/${id}`}>
                <img className={s.itemImg} src={img}></img>
                </NavLink>
                
            </div>
            <div className={s.itemInformation}>
                <span>Шаурма: {name}</span>
                <span>Ціна: {price}грн</span>
            </div>
            {
                count > 1
                ? <div>
                    <button >Minus</button>
                    <button>Plus</button>
                    </div>
                :<button onClick={() => {
                    addOrder()
                }} className={s.itemBtn}>В кошик</button>
            }
            
        </div>
    )
}

export default Shaurma;