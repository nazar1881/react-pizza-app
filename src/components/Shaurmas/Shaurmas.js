import { useEffect, useState } from "react";
import Shaurma from "./Shaurma";
import s from "./Shaurma.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";


const baseURL = "http://localhost:3000/shaurmas";

const Shaurmas = () => {

    let [shaurmas, setShaurmas] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let dispatch = useDispatch();

    let setShaurmasToReducer = (shaurmas) => {
        dispatch({type:"SET_SHAURMAS", payload: shaurmas})
    }

    useEffect(() => {
        axios.get(baseURL)
        .then(responce => {
            setShaurmas(responce.data);
            setShaurmasToReducer(responce.data)
            //console.log(responce.data);
            setLoading(false);
        })
    }, [])

    return ( 
        <div>
            <h1>Шаурма-Нажбула</h1>
            <div className={s.itemsWrapper}>
                {
                isLoading 
                ? <Loader/>
                : shaurmas.map((shaurma) => <Shaurma name={shaurma.name} key={shaurma.id} id={shaurma.id} price={shaurma.price} img={shaurma.img} count={shaurma.count}/>) 
                }
            </div>
        </div>
        
    )
    
}

export default Shaurmas;