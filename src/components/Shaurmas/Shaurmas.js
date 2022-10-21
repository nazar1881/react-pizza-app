import Shaurma from "./Shaurma";
import s from "./Shaurma.module.css"

const Shaurmas = ({shaurmas}) => {

    return ( 
        <div>
            <h1>Шаурма-Нажбула</h1>
            <div className={s.itemsWrapper}>
            {
                shaurmas.map((shaurma) => <Shaurma name={shaurma.name} key={shaurma.id} id={shaurma.id} price={shaurma.price} img={shaurma.img}/>) 
            }
            </div>
        </div>
        
    )
    
}

export default Shaurmas;