import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

function ItemDetail( { image, name, description, hours, price, category, stock } ) {
    
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }



    return (
        <div className="todo">
          <article className="item-detail">
            <img src={process.env.PUBLIC_URL + image} alt={name}/>
            <div className="item-detail__text-container">
                <div>
                    <h3>{name}</h3>
                    <em>{category}</em>
                </div>
                <div>
                    <p>{description}</p>
                    <p><strong>Horas: </strong>{hours}</p>
                    <p><strong>Precio: </strong>{price}</p>
                    <strong className="item-detail__text-container-price"></strong>
                    <ItemCount stock={stock}/>
                    <button className="item-detail__text-container-back" onClick={handleBack}>Volver</button>
                </div>
            </div>
        </article>    
        </div>
          
    )
}

export default ItemDetail;