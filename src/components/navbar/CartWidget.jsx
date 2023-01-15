import { FaShoppingCart } from "react-icons/fa";
import './stylecart.css'

function CartWidget() {
    return (
        <div className="navbar__car">
            <div className="icon"><FaShoppingCart/></div> 
            <h6>22</h6>
        </div>
    );
}

export default CartWidget;

