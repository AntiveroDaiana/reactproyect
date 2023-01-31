import { useState, useContext } from "react";
import './ItemCount.css';
import { DataContext } from "../../context/Dataprovider";

function ItemCount( {stock} ) {
    const value = useContext(DataContext);
    const [counter, setCounter] = useState(1);
    const addCarrito = value.addCarrito;
    const [detalle] = useState([])

    const subtract = () => {
        if (counter > 1) {
            setCounter( counter - 1 );
        }
    }

    const add = () => {
        if (counter < stock) {
            setCounter( counter + 1 );
        }
    }

    return (
        <div className="item-count">
            <div>
                <button className="item-count_subtract" onClick={subtract}>-</button>
                <strong className="count__subtract">{counter}</strong>
                <button className="item-count_add" onClick={add}>+</button>
            </div>
            <button onClick={() => addCarrito(detalle.id)}className="item-count_add-to-car">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;