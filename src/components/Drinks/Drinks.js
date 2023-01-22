import s from "./Drinks.module.css";
import Loader from "../Loader/Loader";
import Drink from "./Drink";


const Drinks = ({drinks, isLoading}) => {

    return ( 
        <div>
            <h1>Напої</h1>
            <div className={s.itemsWrapper}>
                {
                isLoading 
                ? <Loader/>
                : drinks.map((drink) => <Drink name={drink.name} key={drink.id} id={drink.id} price={drink.price} img={drink.img} count={drink.count}/>) 
                }
            </div>
        </div>
        
    )
    
}

export default Drinks;