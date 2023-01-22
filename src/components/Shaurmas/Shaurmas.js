import Shaurma from "./Shaurma";
import s from "./Shaurma.module.css";
import Loader from "../Loader/Loader";


const Shaurmas = ({shaurmas, isLoading}) => {

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