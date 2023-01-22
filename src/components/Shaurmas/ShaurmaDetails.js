import s from "./Shaurma.module.css"

const ShaurmaDetails = ({shaurma}) => {

    console.log(shaurma);
    return (
        <div>
            <h1>Опис Шаурми</h1>
            <div className={s.div}> 
                <div >
                    <img className={s.shaurmaDetailsImg} src={shaurma.img}></img>
                </div>
                <div className={s.shaurmaDescription}>
                    <div className={s.descriptionText}>
                        <p>Шаурма: {shaurma.name}</p>
                        <p>Ціна: {shaurma.price}грн</p>
                        <p>Опис: {shaurma.description}</p>
                        <p>Рейтинг: {shaurma.rate}</p>
                    </div>
                </div> 
            </div>
        </div>
        
     
    )
}

export default ShaurmaDetails;