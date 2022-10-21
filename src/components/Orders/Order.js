import s from "./Order.module.css"

const Order = ({name, price, img}) => {
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
            </div>
        </div>
    )
}

export default Order;