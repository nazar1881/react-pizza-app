import s from './MainContent.module.css'
import Slider from './Slider';

const MainContent = () => {

    const slides = [
        {img: "https://img.povar.ru/main/94/1c/00/85/shaurma_na_mangale-577820.JPG"},
        {img: "https://roll-club.kh.ua/wp-content/uploads/2020/06/s-kuricej-sajt.jpg"},
        {img: "https://i.obozrevatel.com/food/recipemain/2020/2/28/shaurma-v-domashnix-usloviyax.jpg?size=636x424"},
        {img: "https://kurkumashaurma.by/assets/images/products/104/meksikanskaya-1200-dsc-5855.jpg"},
        {img: "https://img.povar.ru/main/94/0a/a9/6b/vegetarianskaya_shaurma-772065.jpg"}
    ]

    return (
        <div>
            <div className={s.mainContent}>
                <div className={s.mainContentText}>
                <p>Вас вітає Шаурма-Нажбула, найкраща шаурма в Україні. В нас ви можете замовити різну смачну шаурму і будь-які напої за дуже приємну ціну.</p>
                <p>Не зволікай, у нас шаурму замовляй !!!</p>
                </div>
            </div>
            <div className={s.sliderWrapper}>   
                <h1>Наша Шаурма</h1>
                <Slider slides={slides}/>
            </div>
        </div>
        
    )
}

export default MainContent;