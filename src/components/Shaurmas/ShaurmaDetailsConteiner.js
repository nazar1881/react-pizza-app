import { useParams } from "react-router-dom";
import ShaurmaDetails from "./ShaurmaDetails";

const ShaurmaDetailsConteiner = ({shaurmas}) => {
    
    const {shaurmaId} = useParams()

    console.log(shaurmas);
    console.log(shaurmaId);

    return (
        <div>
            {
                shaurmas.filter(s => s.id == shaurmaId).map(shaurma => <ShaurmaDetails shaurma={shaurma} key={shaurma.id}/>)
            }   
        </div>
    )
}

export default ShaurmaDetailsConteiner;