import { Link } from "react-router-dom";
import { formatterPeso } from "../../helpers/formatterPeso";
import './Item.css';


function Item( { id, image, name, price } ) {

    return (
        <article className="item">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <h3>{name}</h3>
            <strong>{formatterPeso(price)}</strong>
            <Link to={`/item/${id}`} className="item_link">Detalle</Link>
        </article>    
    )
}

export default Item;