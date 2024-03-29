import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
import s from './Header.module.css'


const Header = () => {

    let orders = useSelector(state => state.orders.orders);

    return (
        <div className={s.header}>
            <div>
                <NavLink to="/" className={s.mainContentLink}>
                    <h2>Shaurma-Nazhbula</h2>
                </NavLink>
            </div>
            <div className={s.linksWrapper}>
                    <NavLink to='shaurmas' className={s.links}>Наша шаурма</NavLink>
                    <NavLink to='drinks' className={s.links}>Наші напої</NavLink>
                    <span className={s.links}>+380962244492</span>
                    <NavLink to='about-us' className={s.links}>Про нас</NavLink>
                    {
                        orders.length != 0
                        ? <NavLink to='orders' className={s.order}>Замовити<span className={s.ordersCounter}>{orders.length}</span></NavLink>
                        : <span className={s.chooseOrder}>Оберіть замовлення</span>
                    }
                    
            </div>
        </div>
    )
}

export default Header;