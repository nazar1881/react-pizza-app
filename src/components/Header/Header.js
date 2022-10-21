import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
import s from './Header.module.css'


const Header = () => {

    let orders = useSelector(state => state.orders);

    return (
        <div className={s.header}>
            <div>
                <h2>Shaurma-Nazhbula</h2>
            </div>
            <div className={s.linksWrapper}>
                    <NavLink to='shaurmas' className={s.links}>Наша шаурма</NavLink>
                    <span className={s.links}>+380962244492</span>
                    <NavLink to='about-us' className={s.links}>Про нас</NavLink>
                    {
                        orders.length != 0
                        ? <NavLink to='orders' className={s.order}>Замовити</NavLink>
                        : <span className={s.chooseOrder}>Оберіть замовлення</span>
                    }
                    
            </div>
        </div>
    )
}

export default Header;