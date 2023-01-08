import loader from "./../../common/img/loader.svg";
import s from "./Loader.module.css";

const Loader = () => {
    return (
        <div>
            <img src={loader} className={s.loader}></img>
        </div>
    )
}

export default Loader;